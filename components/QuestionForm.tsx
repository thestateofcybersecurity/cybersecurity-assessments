// components/QuestionForm.tsx
import React, { useState } from 'react';
import { Question } from '../types';

interface QuestionFormProps {
  questions: Question[];
  onSubmit: (answers: Record<string, string>) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ questions, onSubmit }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {questions.map((question) => (
        <div key={question.id} className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">{question.text}</h3>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="space-y-4">
                {question.options.map((option) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      id={`${question.id}-${option.value}`}
                      name={question.id}
                      type="radio"
                      value={option.value}
                      onChange={(e) => handleChange(question.id, e.target.value)}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      htmlFor={`${question.id}-${option.value}`}
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-end">
        <button
          type="submit"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default QuestionForm;
