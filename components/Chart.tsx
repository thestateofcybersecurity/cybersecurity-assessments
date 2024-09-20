import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CategoryScore } from '../types';

interface ChartProps {
  data: CategoryScore[];
  title: string;
}

const Chart: React.FC<ChartProps> = ({ data, title }) => {
  return (
    <div className="w-full h-96">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="score" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
