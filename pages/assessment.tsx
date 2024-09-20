import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import QuestionForm from '../components/QuestionForm';
import { questions } from '../utils/questions';
import { calculateScore } from '../utils/calculateScore';

const AssessmentPage: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (answers: Record<string, string>) => {
    const results = calculateScore(answers);
    router.push({
      pathname: '/results',
      query: { results: JSON.stringify(results) },
    });
  };

  return (
    <Layout>
      <div className="container">
        <h1 className="text-3xl font-bold mb-6">Ransomware Readiness Assessment</h1>
        <p className="mb-6">
          Answer the following questions to assess your organization's ransomware readiness.
        </p>
        <QuestionForm questions={questions} onSubmit={handleSubmit} />
      </div>
    </Layout>
  );
};

export default AssessmentPage;
