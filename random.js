const fs = require('fs/promises');
const path = require('path');
// import fs from 'fs/promises';
// import path from 'path';

// create a dir output from the current dir
const dir = path.join(process.cwd(), 'output');
fs.mkdir(dir, { recursive: true });
