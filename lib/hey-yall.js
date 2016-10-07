'use strict';

const fs = require('fs');

let inFile = process.argv[2];
let outFile = process.argv[3];

fs.readFile(inFile, { encoding: 'utf8' }, (error, names) => {
  if (error) { 
    // or "throw error;"
    console.error(error.stack);
    return;
  }

  let namesArr = names.split('\n');
  namesArr.pop(); // need b/c we have an extra newline at end of inFile

  namesArr.forEach((name) => {
    let line = `Hello, ${name}! ${'\n'}`;
    fs.writeFile(outFile, line, { flag: 'a' }, error => {
      if (error) {
        console.error(error.stack);
        return;
      }
    });
  });
  console.log('\nSuccess!');
});

