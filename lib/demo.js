'use strict';

const fs = require('fs');

// Read Directory Script
// fs.readdir('./', (error, data) => {
//   if (error) throw error;
//   console.log(data);
// });

// Read Directory Sync
// console.log(fs.readdirSync('./'));

// Read File Script
// let inputFile = process.argv[1];
//
// fs.readFile(inputFile, 'utf8', (error, data) => {
//   if (error) {
//     throw error;
//   }
//   console.log(data);
// });

// Write File Script
// let inputFile = process.argv[2];
// let outputFile = process.argv[3];
//
fs.writeFile('message.txt', 'John S got his novel back.', {flag: 'a'}, (err) => {
  if (err) {
    throw err;
  }
  console.log('It\'s saved!');
});
