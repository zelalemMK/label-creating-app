/* 
Task:
1. parse the csv coming from fronend
2. grab the html template
3. Put the logo image into the template
4. Change the font into the uploaded font
*/

import fs from "fs/promises";
import path from "path";
import { JSDOM } from "jsdom";
import puppeteer from "puppeteer";
import encodeCode128B from "@/app/lib/barcode_encoder";

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
  const csvData = await fs.readFile(
    path.resolve(filePath),
    "utf-8",
    (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        throw err;
      }
      return data;
    }
  );

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
      throw new Error("Missing sessionId");
    }

    // Build folder path for this session
    const sessionDir = path.join(process.cwd(), "public", "uploads", sessionId);

    // Read uploaded files from session folder
    const files = await fs.readdir(sessionDir);
    const templateFile = files.find((f) => f.endsWith(".html"));
    const csvFile = files.find((f) => f.endsWith(".csv"));
    const logo = files.find((f) => f.endsWith(".png") || f.endsWith(".jpg"));
    const font = files.find((f) => f.endsWith(".ttf") || f.endsWith(".otf"));

    // turn the base font into base64 string
    const basicFont = await fs.readFile(
      path.join(process.cwd(), "public", "uploads", sessionId, font)
    );

    console.log("Basic Font location: ", basicFont);
    const basicFontData = basicFont.toString("base64");
    const base64BasicFont = "data:font/ttf;base64," + basicFontData;

    // import barcode font
    const barcodeFontLocation = await fs.readdir(
      path.join(process.cwd(), "src/app/lib/fonts")
    );
    const barcodeFont = barcodeFontLocation.find((f) => f.endsWith(".ttf"));
    // turn the font into a base64 string
    const fontPath = path.join(process.cwd(), "src/app/lib/fonts", barcodeFont);
    const fontData = await fs.readFile(fontPath);
    const base64BarcodeFont =
      "data:font/ttf;base64," + fontData.toString("base64");

    // Load it as a DOM object
    const document = await loadTemplateAsHTMLDOM(sessionDir, templateFile);
    // console.log("Document:", document.body.innerHTML);
    const csvData = await readCsvToDoubleArray(sessionDir, csvFile);

    // Start looping thru the outer array and do the following
    // 1. add the logo to the template
    // 2. change the font to the uploaded font
    // 3. change the text in the template divs to the csv data
    // 4. save the final html file

    // create an output dir
    const outputDir = path.join(sessionDir, "output");
    fs.mkdir(outputDir);

    // Assuming csv has a header row
    for (let i = 1; i < csvData.length; i++) {
      console.log("Processing row:", csvData[i]);
      const row = csvData[i];
      const currentDocument = document.cloneNode(true);

      // 1. Add the logo to the template
      // inject the image into the IMG tag with the class "logo-container"

      const logoElement = currentDocument.querySelector("img.logo"); // assuming this is an image tag
      // only inject
      if (logoElement === null) {
        throw new Error(
          "No img with class 'logo-container' found in the template"
        );
      }
      // const logoElement = document.createElement("img"); // create a new dom element for the logo
      const logoPath = path.join(sessionDir, logo); // e.g. "logo.png"
      const logoData = await fs.readFile(logoPath);
      const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

      logoElement.src = logoBase64;
      logoElement.alt = "Logo";
      logoElement.width = 240;
      logoElement.height = 80;

      // currentDocument.body.prepend(logoElement);

      // 2. Change the font to the uploaded font
      const styleElement = document.createElement("style");
      styleElement.textContent = `
      @font-face {
        font-family: 'CustomFont';
        src: url(${base64BasicFont}) format('truetype');
      }
      @font-face {
        font-family: 'barcodeFont';
        src: url(${base64BarcodeFont}) format('truetype');
      }
      body {
        font-family: 'CustomFont';
        margin: 0;
        padding: 0;
      }
      .barcode {
        font-family: 'barcodeFont';
      }`;
      currentDocument.head.appendChild(styleElement);

      // 3. Change the text in the template divs to the csv data
      // only select divs that are child elements of the first div with the class "content"
      const contentDiv = currentDocument.querySelector(".content");

      if (contentDiv === null) {
        throw new Error("No div with class 'content' found in the template");
      }
      // only inject into divs that contian the class "inj"
      const divs = contentDiv.querySelectorAll("div.inj");

      for (let j = 0; j < divs.length; j++) {
        // console.log("============== In inject loop ==============");
        // console.log("Processing div: ", divs[j]);
        // console.log("With csv data: ", row[j]);
        // console.log("Inner text\t", divs[j].innerText);
        if (divs[j].classList.contains("barcode")) {
          const encoded = encodeCode128B(row[j]);

          // console.log("Encoded barcode:", encoded);
          // console.log("Divs[j]:", divs[j]);

          divs[j].textContent = encoded;
          continue;
        }
        // get the column index of the div from the class name
        divs[j].textContent = row[j];
      }

      // 4. Save the final html file as a pdf file
      const finalHtml = currentDocument.documentElement.outerHTML;
      // write it to an html and save it on my dev environment
      const outputHtmlPath = path.join(process.cwd(), `output_${i}.html`);
      await fs.writeFile(outputHtmlPath, finalHtml);
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      await page.setContent(finalHtml, { waitUntil: "networkidle0" });
      
      const bodySize = await page.evaluate(() => {
        const body = document.body;
        return {
          width: body.scrollWidth,
          height: body.scrollHeight,
        };
      });

      // Set viewport to match the body size
      await page.setViewport({
        width: bodySize.width,
        height: bodySize.height,
      });

      const pdfPath = path.join(outputDir, `label_${i}.pdf`);
      await page.pdf({
        path: pdfPath,
        width: `${bodySize.width}px`, // Match the exact body width
        height: `${bodySize.height}px`, // Match the exact body height
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }, // Ensure no margins
        scale: 1,
        displayHeaderFooter: false,
      });
      await browser.close();

       await fs.writeFile(
         path.join(outputDir, `label_${i}.html`),
         finalHtml,
         "utf-8"
       );
	console.log(`saved the html at ${outputDir}`);
      // only save 5 for now for testing
      if (i == 5) {
        break;
      }
    }
    return { success: true };
  } catch (error) {
    console.error("Processing error:", error);
    throw error;
  }
}
