// utils/calculateScore.ts
import { AssessmentResult, CategoryScore } from '../types';
import { questions, categories } from './questions';

export const calculateScore = (answers: Record<string, string>): AssessmentResult => {
  const totalQuestions = questions.length;
  const categoryScores: CategoryScore[] = [];
  let basicScore = 0;
  let intermediateScore = 0;
  let advancedScore = 0;

  categories.forEach((category) => {
    const categoryQuestions = questions.filter((q) => q.id.startsWith(category.id));
    const categoryYesAnswers = categoryQuestions.filter((q) => answers[q.id] === 'yes').length;
    const categoryNoAnswers = categoryQuestions.length - categoryYesAnswers;
    const categoryScore = (categoryYesAnswers / categoryQuestions.length) * 100;
    
    categoryScores.push({
      name: category.name,
      score: Math.round(categoryScore),
      yes: categoryYesAnswers,
      no: categoryNoAnswers,
      total: categoryQuestions.length
    });
  });

  questions.forEach((question) => {
    if (answers[question.id] === 'yes') {
      switch (question.category) {
        case 'basic':
          basicScore++;
          break;
        case 'intermediate':
          intermediateScore++;
          break;
        case 'advanced':
          advancedScore++;
          break;
      }
    }
  });

  const basicTotal = questions.filter((q) => q.category === 'basic').length;
  const intermediateTotal = questions.filter((q) => q.category === 'intermediate').length;
  const advancedTotal = questions.filter((q) => q.category === 'advanced').length;

  const overallScore = ((basicScore + intermediateScore + advancedScore) / totalQuestions) * 100;

  return {
    overallScore: Math.round(overallScore),
    basicScore: Math.round((basicScore / basicTotal) * 100),
    intermediateScore: Math.round((intermediateScore / intermediateTotal) * 100),
    advancedScore: Math.round((advancedScore / advancedTotal) * 100),
    categoryScores,
  };
};

export const getCategoryScores = (results: AssessmentResult): CategoryScore[] => {
  return results.categoryScores;
};
