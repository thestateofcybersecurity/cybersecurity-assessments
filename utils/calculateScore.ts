import { AssessmentResult, CategoryScore } from '../types';
import { questions, categories } from './questions';

export const calculateScore = (questions, answers) => {
  let totalQuestions = questions.length;
  let answeredYes = 0;

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
    const userAnswer = answers[question.id];
    if (userAnswer === 'yes') {
      answeredYes++;
    }
  });

  let percentage = (answeredYes / totalQuestions) * 100;
  return { answeredYes, totalQuestions, percentage };
};

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
