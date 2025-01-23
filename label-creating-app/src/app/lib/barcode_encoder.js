// import JsBarcode from "jsbarcode";

// Generate barcode and render to a canvas element
// export function createBarcodeCanvas(inputText) {
//     const canvas = document.createElement("canvas");
//     JsBarcode(canvas, inputText, {
//         format: "CODE128",
//         displayValue: true,
//     });
//     return canvas.toDataURL("image/png");
// }

// Back End Function:
// 1. Look for a div with class .content
// 2. For each child div in .content, if div also contains .inj
// 3. Inject from the CSV column for loop [index]

//fonts.google.com/specimen/Libre+Barcode+128

export default function encodeCode128B(inputText) {
  var i,
    intWeight,
    intLength,
    intWtProd = 0,
    arrayData = [];
  var arraySubst = ["Ã", "Ä", "Å", "Æ", "Ç", "È", "É", "Ê"];

  // Length of the input string
  intLength = inputText.length;

  // Start Code B
  arrayData[0] = 104;
  intWtProd = 104;

  // Calculate weighted sum for checksum
  for (i = 0; i < intLength; i++) {
    arrayData[i + 1] = inputText.charCodeAt(i) - 32; // Map to Code 128B values
    intWeight = i + 1; // Position in the string
    intWtProd += intWeight * arrayData[i + 1]; // Weighted sum
  }

  // Calculate checksum
  var checksum = intWtProd % 103;
  arrayData[i + 1] = checksum;

  // Append the Stop Code
  arrayData[i + 2] = 106;

  // Convert checksum to a character
  var checksumChar;
  if (checksum > 94) {
    checksumChar = arraySubst[checksum - 95];
  } else {
    checksumChar = String.fromCharCode(checksum + 32);
  }

  // Construct the final encoded string
  var encodedString = "Ì"; // Start Code B
  for (var j = 1; j <= intLength; j++) {
    encodedString += String.fromCharCode(arrayData[j] + 32);
  }
  encodedString += checksumChar; // Append checksum character
  encodedString += "Î"; // Stop Code

  return encodedString;
}
