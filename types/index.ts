export interface Question {
  id: string;
  text: string;
  options: { value: string; label: string }[];
  category: 'basic' | 'intermediate' | 'advanced';
  references: string[];
}

export interface AssessmentResult {
  overallScore: number;
  basicScore: number;
  intermediateScore: number;
  advancedScore: number;
  categoryScores: CategoryScore[];
}

export interface CategoryScore {
  name: string;
  score: number;
  yes: number;
  no: number;
  total: number;
}
