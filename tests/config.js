module.exports = {
  // right now chrome is our only options since
  // we haven't installed other drivers
  // and have special settings in support/world.js
  browser: 'chrome',
  // run headless (don't show browser)
  headless: true,
  // max execution time
  timeout: 30000,
  // to run in 'slow motion' increase this time
  sleepBetweenSteps: 0
};