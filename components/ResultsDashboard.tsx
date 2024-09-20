import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { AssessmentResult, CategoryScore } from '../types';
import { getCategoryScores } from '../utils/calculateScore';

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

const TierBarChart: React.FC<{ data: AssessmentResult }> = ({ data }) => {
  const chartData = [
    { tier: 'Basic', yes: data.basicScore, no: 100 - data.basicScore },
    { tier: 'Intermediate', yes: data.intermediateScore, no: 100 - data.intermediateScore },
    { tier: 'Advanced', yes: data.advancedScore, no: 100 - data.advancedScore },
  ];

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
          <YAxis dataKey="tier" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="yes" stackId="a" fill="#82ca9d" name="Complete" />
          <Bar dataKey="no" stackId="a" fill="#8884d8" name="Incomplete" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const PerformancePieChart: React.FC<{ data: { yes: number; no: number; title: string } }> = ({ data }) => {
  const pieData = [
    { name: 'Complete', value: data.yes },
    { name: 'Incomplete', value: data.no },
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
  const categoryScores = getCategoryScores(results);

  return (
    <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <h2 className="text-2xl font-bold mb-4">RRA Performance Summary</h2>
      
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-4">Overall Score: {results.overallScore}%</h3>
        <p className="text-sm text-gray-600 mb-4">
          Your organization's overall ransomware readiness score. Higher is better.
        </p>
        <PerformancePieChart data={{ yes: results.overallScore, no: 100 - results.overallScore, title: 'Overall Performance' }} />
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-4">RRA Practices Scoring</h3>
        <ScoringTable data={categoryScores} />
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-4">Practices Answered Per Tier</h3>
        <TierBarChart data={results} />
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-4">Performance Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PerformancePieChart data={{ yes: results.basicScore, no: 100 - results.basicScore, title: 'Basic' }} />
          <PerformancePieChart data={{ yes: results.intermediateScore, no: 100 - results.intermediateScore, title: 'Intermediate' }} />
          <PerformancePieChart data={{ yes: results.advancedScore, no: 100 - results.advancedScore, title: 'Advanced' }} />
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-4">Category Performance Overview</h3>
        <RadarChartComponent data={categoryScores} />
      </section>
    </div>
  );
};

export default ResultsDashboard;
