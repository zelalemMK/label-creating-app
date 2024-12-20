/* 
Task:
1. parse the csv coming from fronend
2. grab the html template
3. Put the logo image into the template
4. Change the font into the uploaded font
*/

import fs from 'fs/promises';
import path from 'path';
import csvParser from 'csv-parser';
import { createReadStream } from 'fs';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

export async function processFiles(sessionId) {
  try {
    if (!sessionId) {
      throw new Error('Missing sessionId');
    }

    // Build folder path for this session
    const sessionDir = path.join(process.cwd(), 'public', 'uploads', sessionId);

    // Read uploaded files from session folder
    const files = await fs.readdir(sessionDir);
    const template = files.find(f => f.endsWith('.html'));
    const csvFile = files.find(f => f.endsWith('.csv'));
    const logo = files.find(f => f.endsWith('.png') || f.endsWith('.jpg'));
    const font = files.find(f => f.endsWith('.ttf') || f.endsWith('.otf'));

    if (!template || !csvFile || !logo || !font) {
      throw new Error('Missing required files');
    }

    // Read template
    const templateContent = await fs.readFile(
      path.join(sessionDir, template),
      'utf-8'
    );

    // Parse CSV
    const records = [];
    const csvStream = createReadStream(path.join(sessionDir, csvFile))
      .pipe(csvParser());
    csvStream.on('data', (data) => records.push(data));
    await finished(csvStream);

    // Create output folder inside session folder
    const outputDir = path.join(sessionDir, 'output');
    await fs.mkdir(outputDir, { recursive: true });

    // Debug logo processing
    const logoPath = path.join(sessionDir, logo);
    console.log('Logo path:', logoPath);
    
    // Verify file exists
    const logoExists = await fs.access(logoPath).then(() => true).catch(() => false);
    if (!logoExists) {
      throw new Error(`Logo file not found at ${logoPath}`);
    }

    // Read and convert logo
    const logoBase64 = await fs.readFile(logoPath, { encoding: 'base64' });
    console.log('Logo converted to base64');
    
    const logoExt = path.extname(logo).substring(1);
    console.log('Logo extension:', logoExt);

    // Verify template has placeholder
    if (!templateContent.includes('{{logo}}')) {
      throw new Error('Logo placeholder not found in template');
    }

    const fontBase64 = await fs.readFile(
      path.join(sessionDir, font),
      { encoding: 'base64' }
    );

    // Process each record
    for (let i = 0; i < records.length; i++) {
      let html = templateContent;
      
      // Replace placeholders with CSV data
      Object.entries(records[i]).forEach(([key, value]) => {
        html = html.replace(new RegExp(`{{${key}}}`, 'g'), value);
      });

      // Insert logo with logging
      const imgTag = `<img src="data:image/${logoExt};base64,${logoBase64}" 
        style="max-width: 100%; height: auto;" 
        alt="Logo" />`;
      console.log('Generated image tag');
      
      html = html.replace('{{logo}}', imgTag);
      console.log('Replaced logo placeholder');

      // Insert custom font
      html = html.replace(
        '</head>',
        `<style>
          @font-face {
            font-family: 'CustomFont';
            src: url(data:font/truetype;charset=utf-8;base64,${fontBase64});
          }
          body { font-family: 'CustomFont', sans-serif; }
        </style>
        </head>`
      );

      // Save generated file
      const outputPath = path.join(outputDir, `output_${i + 1}.html`);
      await fs.writeFile(outputPath, html);
      console.log(`Saved file: ${outputPath}`);
    }

    return { success: true, count: records.length };

  } catch (error) {
    console.error('Processing error:', error);
    throw error;
  }
}
