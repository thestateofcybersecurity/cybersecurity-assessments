import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import QuestionForm from '../components/QuestionForm';
import { calculateScore } from '../utils/calculateScore';
import { questions } from '../utils/questions';

const AssessmentPage: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (answers: Record<string, string>) => {
    const results = calculateScore(answers);
    router.push({
      pathname: '/results',
      query: { results: JSON.stringify(results), answers: JSON.stringify(answers) },
    });
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          Ransomware Readiness Assessment
        </h1>
        <p className="text-xl text-gray-500 mb-8">
          Answer the following questions to assess your organization's ransomware readiness.
        </p>
        <QuestionForm questions={questions} onSubmit={handleSubmit} />
      </div>
    </Layout>
  );
};

export default AssessmentPage;
