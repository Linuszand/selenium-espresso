const { Before, After, AfterStep } = require('@cucumber/cucumber');
const { sleepBetweenSteps } = require('../../config');

const sleep = ms => new Promise(res => setTimeout(res, ms));

Before(function () {
  return this.driver.manage().window().maximize();
});

After(function () {
  return this.driver.quit();
});

AfterStep(async function () {
  await sleep(sleepBetweenSteps);
});