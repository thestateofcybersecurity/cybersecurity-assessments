// components/ResultsDashboard.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AssessmentResult } from '../types';
import Chart from './Chart';
import { getCategoryScores } from '../utils/calculateScore';

interface ResultsDashboardProps {
  results: AssessmentResult;
}

const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ results }) => {
  const categoryScores = getCategoryScores(results);
  const chartData = [
    { name: 'Overall', score: results.overallScore },
    { name: 'Basic', score: results.basicScore },
    { name: 'Intermediate', score: results.intermediateScore },
    { name: 'Advanced', score: results.advancedScore },
  ];

  return (
    <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <h2 className="text-2xl font-bold mb-4">Assessment Results</h2>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Overall Score: {results.overallScore}%</h3>
        <p className="text-sm text-gray-600">
          Your organization's overall ransomware readiness score. Higher is better.
        </p>
      </div>
      <div className="h-64 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h4 className="text-lg font-medium mb-2">Basic: {results.basicScore}%</h4>
          <p className="text-sm text-gray-600">Fundamental ransomware protection measures.</p>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-2">Intermediate: {results.intermediateScore}%</h4>
          <p className="text-sm text-gray-600">Advanced protection and detection capabilities.</p>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-2">Advanced: {results.advancedScore}%</h4>
          <p className="text-sm text-gray-600">Sophisticated measures for comprehensive security.</p>
          <Chart data={categoryScores} title="Category Scores" />
        </div>
      </div>
    </div>
  );
};

export default ResultsDashboard;
