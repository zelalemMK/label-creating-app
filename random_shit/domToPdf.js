const domToPdf = require('dom-to-pdf');




/**
 * Converts an HTML string to a PDF buffer using dom-to-pdf.
 * @param html - The HTML content to convert.
 * @returns {Promise<Buffer>} - The generated PDF as a buffer.
 */
export default async function convertHtmlToPdfBuffer(html, options = { format: 'A4', printBackground: true }) {
  return new Promise((resolve, reject) => {
    domToPdf(html, options, (err, pdfBuffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(pdfBuffer);
      }
    });
  });
}