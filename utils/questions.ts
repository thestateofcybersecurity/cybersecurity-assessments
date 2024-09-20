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
    category: 'basic',
  },
  {
    id: 'DB:B.Q02',
    text: 'Are data backups tested annually?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
  },
  {
    id: 'BM:B.Q01',
    text: 'Is malicious web content being blocked using DNS filtering via methods like DNS resolvers and DNS firewalls?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
  },
  {
    id: 'BM:B.Q02',
    text: 'Are web browser security settings managed?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
  },
  {
    id: 'PP:B.Q01',
    text: 'Are annual tabletop exercises that include phishing response scenarios conducted?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
  },
  {
    id: 'PP:B.Q02',
    text: 'Are users trained to recognize cyber threats like phishing?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
  },
  {
    id: 'PP:B.Q03',
    text: 'Is email filtered to protect against malicious content?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    category: 'basic',
  },
  // Add more questions for each category (basic, intermediate, advanced)
  // ... (include all questions from the assessment)
];

export const categories = [
  { id: 'DB', name: 'Robust Data Backup' },
  { id: 'BM', name: 'Web Browser Management and DNS Filtering' },
  { id: 'PP', name: 'Phishing Prevention and Awareness' },
  { id: 'NM', name: 'Network Perimeter Monitoring' },
  { id: 'AM', name: 'Asset Management' },
  { id: 'PM', name: 'Patch and Update Management' },
  { id: 'UM', name: 'User and Access Management' },
  { id: 'AI', name: 'Application Integrity and Allowlist' },
  { id: 'IR', name: 'Incident Response' },
  { id: 'RM', name: 'Risk Management' },
];
