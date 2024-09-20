import { AssessmentResult } from '../types';
import { questions } from '../utils/questions';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ReportGenerator = {
  generateReport: (results: AssessmentResult, answers: Record<string, string>) => {
    const doc = new jsPDF();

    // Add the autoTable plugin to the jsPDF instance
    const autoTable = (doc as any).autoTable;

    let yPosition = 20;

    // Title
    doc.setFontSize(20);
    doc.text('Ransomware Readiness Assessment Report', 20, yPosition);
    yPosition += 20;

    // Overall Score
    doc.setFontSize(16);
    doc.text(`Overall Score: ${results.overallScore}%`, 20, yPosition);
    yPosition += 20;

    // Assessment Tiers
    doc.setFontSize(14);
    doc.text('Assessment Tiers', 20, yPosition);
    yPosition += 10;

    autoTable(doc, {
      startY: yPosition,
      head: [['Tier', 'Score']],
      body: [
        ['Basic', `${results.basicScore}%`],
        ['Intermediate', `${results.intermediateScore}%`],
        ['Advanced', `${results.advancedScore}%`],
      ],
    });

    yPosition = (doc as any).lastAutoTable.finalY + 20;

    // Category Scores
    doc.setFontSize(14);
    doc.text('Category Scores', 20, yPosition);
    yPosition += 10;

    autoTable(doc, {
      startY: yPosition,
      head: [['Category', 'Score', 'Yes', 'No']],
      body: results.categoryScores.map(category => [
        category.name,
        `${category.score}%`,
        category.yes,
        category.no,
      ]),
    });

    yPosition = (doc as any).lastAutoTable.finalY + 20;

    // Detailed Answers
    doc.setFontSize(14);
    doc.text('Detailed Answers', 20, yPosition);
    yPosition += 10;

    autoTable(doc, {
      startY: yPosition,
      head: [['Question', 'Answer']],
      body: questions.map(question => [
        question.text,
        answers[question.id] === 'yes' ? 'Yes' : 'No',
      ]),
    });

    // Recommendations
    doc.addPage();
    yPosition = 20;
    doc.setFontSize(16);
    doc.text('Recommendations', 20, yPosition);
    yPosition += 10;
    doc.setFontSize(12);

    questions.forEach(question => {
      if (answers[question.id] === 'no') {
        const text = `Improve: ${question.text}`;
        const textLines = doc.splitTextToSize(text, 170);
        doc.text(textLines, 20, yPosition);
        yPosition += 10 * textLines.length;

        doc.setFontSize(10);
        doc.text('References:', 25, yPosition);
        yPosition += 5;
        question.references.forEach(reference => {
          const refLines = doc.splitTextToSize(reference, 165);
          doc.text(refLines, 30, yPosition);
          yPosition += 5 * refLines.length;
        });
        doc.setFontSize(12);
        yPosition += 10;

        if (yPosition > 280) {
          doc.addPage();
          yPosition = 20;
        }
      }
    });

    // Save the PDF
    doc.save('ransomware_readiness_assessment_report.pdf');
  }
};

export default ReportGenerator;
