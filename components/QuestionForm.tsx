import React, { useState } from 'react';
import { Question } from '../types';

interface QuestionFormProps {
  questions: Question[];
  onSubmit: (answers: Record<string, string>) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ questions, onSubmit }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 10;

  const handleChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(answers);
  };

  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {currentQuestions.map((question) => (
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
                      checked={answers[question.id] === option.value}
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
      <div className="flex justify-between">
        {currentPage > 0 && (
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            Previous
          </button>
        )}
        {(currentPage + 1) * questionsPerPage < questions.length ? (
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default QuestionForm;
