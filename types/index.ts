// types/index.ts
export interface Question {
  id: string;
  text: string;
  options: { value: string; label: string }[];
}

export interface AssessmentResult {
  overallScore: number;
  basicScore: number;
  intermediateScore: number;
  advancedScore: number;
}
