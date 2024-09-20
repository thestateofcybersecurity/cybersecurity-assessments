// pages/results.tsx
import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import ResultsDashboard from '../components/ResultsDashboard';
import { AssessmentResult } from '../types';

const ResultsPage: React.FC = () => {
  const router = useRouter();
  const { results } = router.query;

  if (!results) {
    return (
      <Layout>
        <p>No results available. Please complete the assessment first.</p>
      </Layout>
    );
  }

  const parsedResults: AssessmentResult = JSON.parse(results as string);

  return (
    <Layout>
      <ResultsDashboard results={parsedResults} />
    </Layout>
  );
};

export default ResultsPage;
