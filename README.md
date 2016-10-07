[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Introduction to the Node API

## Prerequisites

-   Familiarity with JavaScript as a language.
-   Familiarity with JavaScript in the browser environment.

## Objectives

By the end of this, developers should be able to:

-   Reference the Node API documentation for using JavaScript outside the
    browser.
-   Reference the MDN JavaScript documentation for JavaScript language features.
-   Write a Node script using the File System API.

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Install dependencies with `npm install`.

## JavaScript, the Browser, and Node

-   JavaScript: a language specified by ECMA and implemented independently
-   Browser: an environment for running JavaScript (among other things)
-   Node: an environment for running JavaScript outside the browser

Somewhat valid equations:

```txt
Browser = JavaScript + Browser API + (other things)
   Node = JavaScript + CLI/Server API
```

How are the two environments similar? How do they differ?

## Lab: Research the File System API

Take a few minutes to read the following API documentation for the Node File
System module.

While you're reading, imagine how you'd use each function. Write some example
code in your notebook. Try to explain what each function does in your own words,
including what sorts of arguments it takes and each argument's type.

If you finish early, look for other interesting functions in the File System
module.

1.  [`fs.readdir(path, callback)`](https://nodejs.org/dist/latest-v4.x/docs/api/fs.html#fs_fs_readdir_path_callback)
1.  [`fs.readdirSync(path)`](https://nodejs.org/dist/latest-v4.x/docs/api/fs.html#fs_fs_readdirsync_path)
1.  [`fs.readFile(file[, options], callback)`](https://nodejs.org/dist/latest-v4.x/docs/api/fs.html#fs_fs_readfile_file_options_callback)
1.  [`fs.writeFile(file, data[, options], callback)`](https://nodejs.org/dist/latest-v4.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback)

## Annotate-Along: `lib/copy-json.js`

## Code-Along: `hey-yall.js`

"Hello, World!" with the Node file system API.

## Lab: Write a Randomizer

Randomize the lines in a file.

How do you shuffle an array?

## Additional Resources

-   [Docs | Node.js](https://nodejs.org/en/docs/)
-   [JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [Node Courses from CodeSchool](https://www.codeschool.com/search?query=Node.js)
-   [NodeSchool](http://nodeschool.io/)
-   [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle),
 aka Knuth shuffle.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
