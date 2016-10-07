'use strict';

const fs = require('fs');

// shuffle function from https://bost.ocks.org/mike/shuffle/
const shuffle = (array) => {
  let m = array.length; // m is sometimes "currentIndex"
  let t, i; // t for temporary value; i for random index

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    // multiple by m and THEN decrement m
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

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

  shuffle(namesArr);

  let newNames = namesArr.join('\n');

  fs.writeFile(outFile, newNames, { flag: 'a' }, error => {
    if (error) {
      console.error(error.stack);
      return;
    }

    console.log('\nSuccess!');
  }); 
});

