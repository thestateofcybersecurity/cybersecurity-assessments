import { AssessmentResult } from '../types';
import { questions } from '../utils/questions';
import { jsPDF, autoTable } from 'jspdf';
import 'jspdf-autotable';

const ReportGenerator = {
  generateReport: (results: AssessmentResult, answers: Record<string, string>) => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(20);
    doc.text('Ransomware Readiness Assessment Report', 20, 20);

    // Overall Score
    doc.setFontSize(16);
    doc.text(`Overall Score: ${results.overallScore}%`, 20, 40);

    // Assessment Tiers
    doc.setFontSize(14);
    doc.text('Assessment Tiers', 20, 60);
    doc.autoTable({
      startY: 65,
      head: [['Tier', 'Score']],
      body: [
        ['Basic', `${results.basicScore}%`],
        ['Intermediate', `${results.intermediateScore}%`],
        ['Advanced', `${results.advancedScore}%`],
      ],
    });

    // Category Scores
    doc.setFontSize(14);
    doc.text('Category Scores', 20, doc.lastAutoTable.finalY + 20);
    doc.autoTable({
      startY: doc.lastAutoTable.finalY + 25,
      head: [['Category', 'Score', 'Yes', 'No']],
      body: results.categoryScores.map(category => [
        category.name,
        `${category.score}%`,
        category.yes,
        category.no,
      ]),
    });

    // Detailed Answers
    doc.setFontSize(14);
    doc.text('Detailed Answers', 20, doc.lastAutoTable.finalY + 20);
    doc.autoTable({
      startY: doc.lastAutoTable.finalY + 25,
      head: [['Question', 'Answer']],
      body: questions.map(question => [
        question.text,
        answers[question.id] === 'yes' ? 'Yes' : 'No',
      ]),
    });

    // Recommendations
    doc.addPage();
    doc.setFontSize(16);
    doc.text('Recommendations', 20, 20);
    doc.setFontSize(12);
    let yPos = 30;
    questions.forEach(question => {
      if (answers[question.id] === 'no') {
        const text = `Improve: ${question.text}`;
        const textLines = doc.splitTextToSize(text, 170);
        doc.text(textLines, 20, yPos);
        yPos += 10 * textLines.length;

        doc.setFontSize(10);
        doc.text('References:', 25, yPos);
        yPos += 5;
        question.references.forEach(reference => {
          const refLines = doc.splitTextToSize(reference, 165);
          doc.text(refLines, 30, yPos);
          yPos += 5 * refLines.length;
        });
        doc.setFontSize(12);
        yPos += 10;

        if (yPos > 280) {
          doc.addPage();
          yPos = 20;
        }
      }
    });

    // Save the PDF
    doc.save('ransomware_readiness_assessment_report.pdf');
  }
};

export default ReportGenerator;
