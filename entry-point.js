const maxAPI = require('max-api')
const App = require('./src/app')
const app = new App()

maxAPI.addHandler('directory', (directoryUrl) => {
  app.setDirectory(directoryUrl)
  app.readDir()
});

maxAPI.addHandler('search', (word) => {
  results = app.search(word)
  console.log(JSON.stringify(results))

  let arr = []
  results.forEach(r => {
    r.matches.forEach(m => {
      arr.push(m.value)
    })
  })
  maxAPI.outlet(arr)
});

maxAPI.addHandler('top-result', () => {
  maxAPI.outlet(app.topResult())
})


