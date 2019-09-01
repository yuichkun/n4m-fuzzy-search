const extractAbsolutePath = str => {
  return str.replace(/.*\:/, '')
}

module.exports = {
  extractAbsolutePath
}