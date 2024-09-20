import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { AssessmentResult, CategoryScore, TierScore } from '../types';

interface ResultsDashboardProps {
  results: AssessmentResult;
}

const COLORS = ['#82ca9d', '#8884d8', '#ffc658'];

const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ results }) => {
  const tierScores: TierScore[] = [
    { tier: "Basic", yes: results.basicScore, no: 100 - results.basicScore },
    { tier: "Intermediate", yes: results.intermediateScore, no: 100 - results.intermediateScore },
    { tier: "Advanced", yes: results.advancedScore, no: 100 - results.advancedScore },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ransomware Readiness Assessment Results</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Overall Score: {results.overallScore}%</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={[
                  { name: 'Score', value: results.overallScore },
                  { name: 'Remaining', value: 100 - results.overallScore },
                ]}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                <Cell key="cell-0" fill="#82ca9d" />
                <Cell key="cell-1" fill="#8884d8" />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Goal Performance</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={results.categoryScores}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="name" type="category" width={150} />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" fill="#82ca9d" name="Score %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Assessment Tiers</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={tierScores}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tier" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="yes" stackId="a" fill="#82ca9d" name="Yes" />
              <Bar dataKey="no" stackId="a" fill="#8884d8" name="No" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Category Breakdown</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Yes</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {results.categoryScores.map((category, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{category.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.score}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.yes}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.no}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ResultsDashboard;
