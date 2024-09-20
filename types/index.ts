// types/index.ts
export interface Question {
  id: string;
  text: string;
  options: { value: string; label: string }[];
  category: 'basic' | 'intermediate' | 'advanced';
}

export interface AssessmentResult {
  overallScore: number;
  basicScore: number;
  intermediateScore: number;
  advancedScore: number;
  categoryScores: {
    [key: string]: number;
  };
}

export interface CategoryScore {
  name: string;
  score: number;
}
