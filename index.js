const fs = require("fs");
const csv = require("csv-parser");

const templateHtml = fs.readFileSync("HTML.html", "utf-8");

function generateHtml(templateHtml, productData) {
  const imgTag = `<img src="./signature.png" 
        style="max-width: 100%; height: auto;" 
        alt="Logo" />`;

  const sku_name = `<p>${productData.sku_name}</p>`;
  const brand = `<p>${productData.brand}</p>`;
  const catagory = `<p>${productData.catagory}</p>`;

  // Replace the placeholders with actual data
  let filledTemplate = templateHtml.replace(/{{logo}}/, imgTag);
  filledTemplate = filledTemplate.replace(/{{sku_name}}/, sku_name);
  filledTemplate = filledTemplate.replace(/{{brand}}/, brand);
  filledTemplate = filledTemplate.replace(/{{catagory}}/, catagory);

  return filledTemplate;
}

function populateHtmlFromCSVAndSave() {
  const data = fs.readFileSync("products.csv", "utf-8");
  const rows = data.split("\n");

  rows.shift();
  const productData = rows.map((row) => {
    const columns = row.split(",");
    return {
      sku_name: columns[0],
      brand: columns[2],
      catagory: columns[3],
    };
  });

  // create output folder and put html files there
  if (!fs.existsSync("output")) {
    fs.mkdirSync("output");
  }

  productData.forEach((product, index) => {
    const html = generateHtml(templateHtml, product);
    fs.writeFileSync(`output/label_${index}.html`, html);
  });
}

populateHtmlFromCSVAndSave();
