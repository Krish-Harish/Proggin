const PDFDocument = require('pdfkit');
const fs = require('fs');

function generateReport() {
    const doc = new PDFDocument();
    const writeStream = fs.createWriteStream('report.pdf');
    doc.pipe(writeStream);

    // Title Page
    doc.fontSize(25).text('Project Report Title', { align: 'center' }).moveDown(1);
    doc.fontSize(16).text('Generated on: 2026-04-27 15:25:27', { align: 'center' });
    doc.addPage();

    // Table of Contents
    doc.fontSize(20).text('Table of Contents', { underline: true }).moveDown(1);
    doc.fontSize(14);
    doc.list(['Abstract', 'Project Overview', 'Technical Architecture', 'Code Execution Methods', 'Features', 'Implementation Details', 'Test Results', 'Challenges and Solutions', 'Conclusion', 'References']);
    doc.addPage();

    // Abstract
    doc.fontSize(20).text('Abstract', { underline: true }).moveDown(1);
    doc.fontSize(12).text('This is an abstract of the project report.');
    doc.addPage();

    // Project Overview
    doc.fontSize(20).text('Project Overview', { underline: true }).moveDown(1);
    doc.fontSize(12).text('This section provides an overview of the project.');
    doc.addPage();

    // Technical Architecture
    doc.fontSize(20).text('Technical Architecture', { underline: true }).moveDown(1);
    doc.fontSize(12).text('Description of the technical architecture.');
    doc.addPage();

    // Code Execution Methods
    doc.fontSize(20).text('Code Execution Methods', { underline: true }).moveDown(1);
    doc.fontSize(12).text('Details of how to execute the code.');
    doc.addPage();

    // Features
    doc.fontSize(20).text('Features', { underline: true }).moveDown(1);
    doc.fontSize(12).text('List of features of the project.');
    doc.addPage();

    // Implementation Details
    doc.fontSize(20).text('Implementation Details', { underline: true }).moveDown(1);
    doc.fontSize(12).text('Details about the implementation of the project.');
    doc.addPage();

    // Test Results
    doc.fontSize(20).text('Test Results', { underline: true }).moveDown(1);
    doc.fontSize(12).text('Results from testing the project.');
    doc.addPage();

    // Challenges and Solutions
    doc.fontSize(20).text('Challenges and Solutions', { underline: true }).moveDown(1);
    doc.fontSize(12).text('Discussion of challenges faced and solutions found.');
    doc.addPage();

    // Conclusion
    doc.fontSize(20).text('Conclusion', { underline: true }).moveDown(1);
    doc.fontSize(12).text('Final thoughts and conclusions drawn from the project.');
    doc.addPage();

    // References
    doc.fontSize(20).text('References', { underline: true }).moveDown(1);
    doc.fontSize(12).text('List of references used in this report.');

    doc.end();
}

generateReport();