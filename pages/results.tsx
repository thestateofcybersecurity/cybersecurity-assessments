import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import ResultsDashboard from '../components/ResultsDashboard';
import ReportGenerator from '../components/ReportGenerator';
import { AssessmentResult } from '../types';

const ResultsPage: React.FC = () => {
  const router = useRouter();
  const { results, answers } = router.query;

  if (!results || !answers) {
    return <div>Loading...</div>;
  }

  const parsedResults: AssessmentResult = JSON.parse(results as string);
  const parsedAnswers: Record<string, string> = JSON.parse(answers as string);

  const handleExportReport = () => {
    ReportGenerator.generateReport(parsedResults, parsedAnswers);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ResultsDashboard results={parsedResults} />
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleExportReport}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Export Report
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ResultsPage;
