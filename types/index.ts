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
  categoryScores: CategoryScore[];
}

export interface CategoryScore {
  name: string;
  score: number;
  yes: number;
  no: number;
  total: number;
}

export interface TierScore {
  tier: string;
  yes: number;
  no: number;
  unanswered: number;
  total: number;
}

export interface PerformanceSummary {
  tier: string;
  yes: number;
  no: number;
  unanswered: number;
}
