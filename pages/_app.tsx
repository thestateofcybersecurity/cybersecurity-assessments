import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { AssessmentResult } from '../types';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<AssessmentResult | null>(null);
  const router = useRouter();

  const handleSubmit = (formAnswers: Record<string, string>) => {
    setAnswers(formAnswers);
    // Note: You'll need to import calculateScore here or pass it as a prop to pages that need it
    // const calculatedResults = calculateScore(formAnswers);
    // setResults(calculatedResults);
    router.push('/results');
  };

  const handleExportReport = () => {
    if (results) {
      // Note: You'll need to import ReportGenerator here or pass it as a prop to pages that need it
      // ReportGenerator.generateReport(results, answers);
    }
  };

  return (
    <Layout>
      <Component 
        {...pageProps} 
        onSubmit={handleSubmit} 
        results={results}
        answers={answers}
        onExportReport={handleExportReport}
      />
    </Layout>
  );
}

export default MyApp;
