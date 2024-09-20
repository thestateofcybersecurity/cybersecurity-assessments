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
  category: string;
  yes: number;
  no: number;
  unanswered: number;
  total: number;
  percentComplete: number;
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
