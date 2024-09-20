import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { AssessmentResult, CategoryScore, TierScore, PerformanceSummary } from '../types';

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

const TierBarChart: React.FC<{ data: TierScore[] }> = ({ data }) => (
  <div className="h-64">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="tier" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="yes" stackId="a" fill="#82ca9d" name="Yes" />
        <Bar dataKey="no" stackId="a" fill="#8884d8" name="No" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const PerformancePieChart: React.FC<{ data: PerformanceSummary }> = ({ data }) => {
  const pieData = [
    { name: 'Yes', value: data.yes },
    { name: 'No', value: data.no },
  ];

  return (
    <div className="h-64">
      <h3 className="text-center font-bold">{data.tier}</h3>
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

const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ results }) => {
  const tierScores: TierScore[] = [
    { tier: "Basic", yes: results.basicScore, no: 100 - results.basicScore, total: 100 },
    { tier: "Intermediate", yes: results.intermediateScore, no: 100 - results.intermediateScore, total: 100 },
    { tier: "Advanced", yes: results.advancedScore, no: 100 - results.advancedScore, total: 100 },
  ];

  const performanceSummary: PerformanceSummary[] = [
    { tier: "Overall", yes: results.overallScore, no: 100 - results.overallScore },
    { tier: "Basic", yes: results.basicScore, no: 100 - results.basicScore },
    { tier: "Intermediate", yes: results.intermediateScore, no: 100 - results.intermediateScore },
    { tier: "Advanced", yes: results.advancedScore, no: 100 - results.advancedScore },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">RRA Performance Summary</h1>
      
      <section className="card mb-8">
        <h2 className="text-2xl font-bold mb-4">Overall Score: {results.overallScore}%</h2>
        <p className="mb-4">Your organization's overall ransomware readiness score. Higher is better.</p>
        <PerformancePieChart data={performanceSummary[0]} />
      </section>
      
      <section className="card mb-8">
        <h2 className="text-2xl font-bold mb-4">RRA Practices Scoring</h2>
        <ScoringTable data={results.categoryScores} />
      </section>
      
      <section className="card mb-8">
        <h2 className="text-2xl font-bold mb-4">Practices Answered Per Tier</h2>
        <TierBarChart data={tierScores} />
      </section>
      
      <section className="card mb-8">
        <h2 className="text-2xl font-bold mb-4">Performance Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {performanceSummary.slice(1).map((item, index) => (
            <PerformancePieChart key={index} data={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResultsDashboard;
