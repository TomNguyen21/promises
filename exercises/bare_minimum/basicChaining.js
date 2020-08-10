/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  var readFile = (readFilePath) => {
    return new Promise((resolve, reject) => {
      fs.readFile(readFilePath, 'utf8', (err, data) => {
        if (err) {
          // console.log('readFile error')
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
  var writeFile = (writeFilePath) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(writeFilePath, (err, data) => {
        if (err) {
          console.log('writefile error');
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };

  var errorHandler = (err) => {
    if (err) {
      throw new Error(err);
    }
  };
  readFile(readFilePath)
    .then(writeFile)
    .catch(errorHandler);
  // TODO
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
