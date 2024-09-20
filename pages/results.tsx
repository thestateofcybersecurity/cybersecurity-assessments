import React from 'react';
import ResultsDashboard from '../components/ResultsDashboard';
import { AssessmentResult } from '../types';

interface ResultsPageProps {
  results: AssessmentResult | null;
  onExportReport: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ results, onExportReport }) => {
  if (!results) {
    return <div>No results available. Please complete the assessment first.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ResultsDashboard results={results} />
      <div className="mt-8 flex justify-center">
        <button
          onClick={onExportReport}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Export Report
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
