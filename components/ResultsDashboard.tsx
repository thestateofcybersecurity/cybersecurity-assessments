import React from 'react';
import { Bar, BarChart, Cell, Pie, PieChart, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { AssessmentResult, CategoryScore } from '../types';

interface ResultsDashboardProps {
  results: AssessmentResult;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ results }) => {
  const pieData = [
    { name: 'Basic', value: results.basicScore },
    { name: 'Intermediate', value: results.intermediateScore },
    { name: 'Advanced', value: results.advancedScore },
  ];

  const radarData = results.categoryScores.map(category => ({
    subject: category.name,
    score: category.score,
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ransomware Readiness Assessment Results</h1>
      
      <div className="card">
        <h2 className="text-2xl font-bold mb-4">Overall Score: {results.overallScore}%</h2>
        <p className="mb-4">Your organization's overall ransomware readiness score. Higher is better.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Basic: {results.basicScore}%</h3>
            <p>Fundamental ransomware protection measures.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Intermediate: {results.intermediateScore}%</h3>
            <p>Advanced protection and detection capabilities.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Advanced: {results.advancedScore}%</h3>
            <p>Sophisticated measures for comprehensive security.</p>
          </div>
        </div>

        <div className="h-64 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold mb-4">Category Scores</h2>
        <div className="h-96 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={results.categoryScores}>
              <Bar dataKey="score" fill="#8884d8" />
              <Tooltip />
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold mb-4">Category Performance Overview</h2>
        <div className="h-96 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="Score" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Tooltip />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold mb-4">Detailed Category Scores</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Category</th>
              <th className="text-left">Score</th>
              <th className="text-left">Yes</th>
              <th className="text-left">No</th>
              <th className="text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {results.categoryScores.map((category, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td>{category.name}</td>
                <td>{category.score}%</td>
                <td>{category.yes}</td>
                <td>{category.no}</td>
                <td>{category.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsDashboard;
