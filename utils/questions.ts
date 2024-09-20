// utils/questions.ts
import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 'DB:B.Q01',
    text: 'Are important systems and data backed up daily to an offsite location with the ability to restore multiple versions back at least 30 days?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
  // Add all questions from the provided assessment
];
