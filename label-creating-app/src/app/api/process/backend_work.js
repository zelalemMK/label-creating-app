/* 
Task:
1. parse the csv coming from fronend
2. grab the html template
3. Put the logo image into the template
4. Change the font into the uploaded font
*/

import fs from 'fs/promises';
import path from 'path';
import { JSDOM } from 'jsdom';



async function loadTemplateAsHTMLDOM(sessionDir, fileName) {
  const filePath = path.join(sessionDir, fileName);
  const contents = await fs.readFile(filePath, "utf-8");
  const dom = new JSDOM(contents);
  return dom.window.document;
}

// maybe a function to parse the csv file
// and then one big function that does everything
//  and saves the final html file

async function readCsvToDoubleArray(sessionDir, fileName) {
  // Read entire CSV file into a single string
  const filePath = path.join(sessionDir, fileName);
  const csvData = await fs.readFile(path.resolve(filePath),'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      throw err;
    }
    return data;
  });

  // Split into lines, then split each line by commas
  const rows = csvData
    .split("\n") // Separate rows by newline
    .map((line) => line.trim()) // Trim whitespace
    .filter((line) => line); // Remove empty lines if any

  // Convert each row into an array of values
  const doubleArray = rows.map((row) => row.split(","));

  return doubleArray;
}



export async function processFiles(sessionId) {
  try {
    if (!sessionId) {
      throw new Error('Missing sessionId');
    }

    // Build folder path for this session
    const sessionDir = path.join(process.cwd(), 'public', 'uploads', sessionId);

    // Read uploaded files from session folder
    const files = await fs.readdir(sessionDir);
    const templateFile = files.find(f => f.endsWith('.html'));
    const csvFile = files.find(f => f.endsWith('.csv'));
    const logo = files.find(f => f.endsWith('.png') || f.endsWith('.jpg'));
    const font = files.find(f => f.endsWith('.ttf') || f.endsWith('.otf'));

    // Load it as a DOM object
    const document = await loadTemplateAsHTMLDOM(sessionDir, templateFile);
    console.log('Document:', document.body.innerHTML);
    const csvData = await readCsvToDoubleArray(sessionDir, csvFile);

    // Start looping thru the outer array and do the following
    // 1. add the logo to the template
    // 2. change the font to the uploaded font
    // 3. change the text in the template divs to the csv data
    // 4. save the final html file

    // Assuming csv has a header row
    for (let i = 1; i < csvData.length; i++) {
      console.log('Processing row:', csvData[i]);
      const row = csvData[i];
      const currentDocument = document.cloneNode(true);

      // 1. Add the logo to the template
      const logoElement = document.createElement("img"); // create a new dom element for the logo
      logoElement.src = logo;
      logoElement.alt = "Something went wrong when linking the logo";
      logoElement.width = 100; // set in pixels
      logoElement.height = 100;
      // TODO: Additional styling
      currentDocument.body.prepend(logoElement);

      // 2. Change the font to the uploaded font
      const styleElement = document.createElement("style");
      styleElement.textContent = `@font-face {
        font-family: 'CustomFont';
        src: url(${font}) format('truetype');
      }
      body {
        font-family: 'CustomFont';
      }`;
      currentDocument.head.appendChild(styleElement);

      // 3. Change the text in the template divs to the csv data
      // only select divs that are child elements of the first div with the class "content"
      const contentDiv = currentDocument.querySelector(".container");
      if (contentDiv === null) {
        throw new Error("No div with class 'content' found in the template");
      }

      const divs = contentDiv.querySelectorAll("div");
      for (let j = 0; j < divs.length; j++) {
        divs[j].textContent = row[j];
      }

      // 4. Save the final html file
      const finalHtml = currentDocument.documentElement.outerHTML;
      await fs.writeFile(
        path.join(sessionDir, `label_${i + 1}.html`),
        finalHtml,
        "utf-8"
      );
    }
    return { success: true };

  } catch (error) {
    console.error('Processing error:', error);
    throw error;
  }
}
