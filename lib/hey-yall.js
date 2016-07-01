'use strict';

const fs = require('fs');

let inFile = process.argv[2];
let outFile = process.argv[3];

fs.readFile(inFile, { encoding: 'utf8' }, (error, names) => {
  if (error) {
    console.error(error);
  }

  // Do Something with the Names ... Esther Erin Josh John Shireen
  let nameArray = names.split('\n');
  nameArray.pop();

  nameArray.forEach((name) => {
    let line = 'Hello, ' + name + '!\n';
    fs.writeFile(outFile, line, { flag: 'a' }, (error) => {
      if (error) {
        console.error(error);
      }
    });
  });
  console.log('\n Copied.');
});
