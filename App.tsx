import React, { useState } from 'react';
import { useRouter } from 'next/router';
import QuestionForm from './components/QuestionForm';
import ResultsDashboard from './components/ResultsDashboard';
import ReportGenerator from './components/ReportGenerator';
import Layout from './components/Layout';
import { calculateScore } from './utils/calculateScore';
import { AssessmentResult } from './types';
import { questions } from './utils/questions';

const App: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<AssessmentResult | null>(null);
  const router = useRouter();

  const handleSubmit = (formAnswers: Record<string, string>) => {
    setAnswers(formAnswers);
    const calculatedResults = calculateScore(formAnswers);
    setResults(calculatedResults);
    router.push('/results');
  };

  const handleExportReport = () => {
    if (results) {
      ReportGenerator.generateReport(results, answers);
    }
  };

  return (
    <Layout>
      {router.pathname === '/' && (
        <QuestionForm questions={questions} onSubmit={handleSubmit} />
      )}
      {router.pathname === '/results' && results && (
        <>
          <ResultsDashboard results={results} />
          <button onClick={handleExportReport} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Export Report
          </button>
        </>
      )}
    </Layout>
  );
};

export default App;
