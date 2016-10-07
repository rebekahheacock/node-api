'use strict';

const fs = require('fs'); // gives us access to the fs module in node

// these refer to the terminal
const stdin = '/dev/stdin';
const stdout = '/dev/stdout';

// process.argv[0] is node, ruby, etc.
// process.argv[1] is path to file you're executing
// following elements of process.argv are arguments you pass to command line
// node lib/copy-json.js '/path/to/in' 'path/to/out'

// if '-' is passed as the first CL argument, use stdin
// if an input file is specified, use it
// how to use stdin:
// cat data/example.json | node lib/copy-json.js - data/output.txt
// but why 'cat' if process.argv[2] can just be a file path?
// doesn't this imply we're reading the file twice?
let inFile = process.argv[2] === '-' ? stdin : process.argv[2];

// if an output file is specified, use it
// otherwise, use stdout
let outFile = process.argv[3] ? process.argv[3] : stdout;

// if using stdout, append
// otherwise, write (replace contents of output file)
let outFileFlag = outFile === stdout ? 'a' : 'w';

fs.readFile(inFile, { encoding: 'utf8' }, (error, data) => {
  // this is all callback
  let json, pojo;
  // this is the same as if (error) throw error;
  if (error) {
    console.error(error.stack);
    return;
  }

  // parse the data into JSON
  // "pojo" stands for "Plain Old Java Object"
  // can also stand for "Plain Old Javascript Object"
  try {
    pojo = JSON.parse(data);
  } catch (error) { // catch is the opposite of throw (?)
    console.error(error.stack);
    return;
  }

  // do something with the pojo
  // this is where you can alter the data if you want

  // make a string out of the pojo
  // use all properties of object (don't replace/filter anything)
  // use 2 spaces as whitespace
  json = JSON.stringify(pojo, null, 2);

  // save it
  fs.writeFile(outFile, json, { flag: outFileFlag }, error => {
    if (error) {
      console.error(error.stack);
      return;
    }

    // why is this an error and not a log?
    console.error('\ncopied');
  });
});
