const fs = require('fs')
const Fuse = require('fuse.js')
const { extractAbsolutePath } = require('./utils')

// const options = {
//   shouldSort: true,
//   threshold: 0.6,
//   location: 0,
//   distance: 100,
//   maxPatternLength: 32,
//   minMatchCharLength: 1,
//   keys: []
// };
var options = {
  shouldSort: true,
  includeMatches: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
  ]
};

class App {
  setDirectory(directoryPath) {
    this.directory = extractAbsolutePath(directoryPath)
    return this.directory
  }
  readDir() {
    if (this.directory) {
      try {
        const files =fs.readdirSync(this.directory)
        this.files = files
        console.log(files)
      } catch (e) {
        console.error(e)
      }
    }
  }
  search(word) {
    if (this.files) {
      const fuse = new Fuse(this.files, options)
      const results = fuse.search(word)
      this.results = results;
      return results
    }
  }

  topResult() {
    if (this.results) {
      return this.results[0].matches[0].value
    }
  }
}


module.exports = App
