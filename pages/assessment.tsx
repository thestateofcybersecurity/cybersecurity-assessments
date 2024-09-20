import React from 'react';
import QuestionForm from '../components/QuestionForm';
import { questions } from '../utils/questions';

interface AssessmentPageProps {
  onSubmit: (answers: Record<string, string>) => void;
}

const AssessmentPage: React.FC<AssessmentPageProps> = ({ onSubmit }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
        Ransomware Readiness Assessment
      </h1>
      <p className="text-xl text-gray-500 mb-8">
        Answer the following questions to assess your organization's ransomware readiness.
      </p>
      <QuestionForm questions={questions} onSubmit={onSubmit} />
    </div>
  );
};

export default AssessmentPage;
