import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

interface CategoryScore {
  name: string;
  yes: number;
  no: number;
  total: number;
  score: number;
}

interface AssessmentResult {
  overallScore: number;
  categoryScores: CategoryScore[];
}

interface ResultsDashboardProps {
  results: AssessmentResult;
}

const COLORS = ['#82ca9d', '#8884d8', '#ffc658'];

const ScoringTable: React.FC<{ data: CategoryScore[] }> = ({ data }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Yes</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Practices</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percent Complete</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.yes}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.no}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.total}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.score}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const TierBarChart: React.FC<{ data: CategoryScore[] }> = ({ data }) => {
  const chartData = data.map(item => ({
    name: item.name,
    Complete: item.score,
    Incomplete: 100 - item.score
  }));

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={150} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Complete" stackId="a" fill="#82ca9d" />
          <Bar dataKey="Incomplete" stackId="a" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const PerformancePieChart: React.FC<{ data: { complete: number; incomplete: number; title: string } }> = ({ data }) => {
  const pieData = [
    { name: 'Complete', value: data.complete },
    { name: 'Incomplete', value: data.incomplete },
  ];

  return (
    <div className="h-64">
      <h3 className="text-center font-bold">{data.title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
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
  );
};

const RadarChartComponent: React.FC<{ data: CategoryScore[] }> = ({ data }) => (
  <div className="h-64">
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar name="Percent Complete" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  </div>
);

const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ results }) => {
  return (
    <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <h2 className="text-2xl font-bold mb-4">RRA Performance Summary</h2>
      
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-4">Overall Score: {results.overallScore}%</h3>
        <p className="text-sm text-gray-600 mb-4">
          Your organization's overall ransomware readiness score. Higher is better.
        </p>
        <PerformancePieChart data={{ complete: results.overallScore, incomplete: 100 - results.overallScore, title: 'Overall Performance' }} />
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-4">RRA Practices Scoring</h3>
        <ScoringTable data={results.categoryScores} />
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-4">Practices Answered Per Category</h3>
        <TierBarChart data={results.categoryScores} />
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-4">Category Performance Overview</h3>
        <RadarChartComponent data={results.categoryScores} />
      </section>
    </div>
  );
};

export default ResultsDashboard;
