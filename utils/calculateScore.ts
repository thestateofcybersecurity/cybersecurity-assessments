// utils/calculateScore.ts
import { AssessmentResult } from '../types';

export const calculateScore = (answers: Record<string, string>): AssessmentResult => {
  // Implement the scoring logic based on the provided assessment methodology
  // This is a simplified example
  const totalQuestions = Object.keys(answers).length;
  const yesAnswers = Object.values(answers).filter((answer) => answer === 'yes').length;
  const overallScore = (yesAnswers / totalQuestions) * 100;

  return {
    overallScore: Math.round(overallScore),
    basicScore: Math.round(overallScore * 0.8), // Example calculation
    intermediateScore: Math.round(overallScore * 0.6), // Example calculation
    advancedScore: Math.round(overallScore * 0.4), // Example calculation
  };
};
