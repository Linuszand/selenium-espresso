const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until, Key } = require('selenium-webdriver');
const { expect } = require('chai');

Given('that I am at {string}', async function (url) {
  await this.driver.get(url);
});

Given('I have approved of cookies', async function () {
  // find elements with the text 'Godkänn' in them
  let elementsWithApproveText = await this.driver.findElements(
    By.xpath("//*[contains(text(),'Godkänn')]")
  );
  // the approve button is the second element with 'Godkänn' in it
  let approveBtn = elementsWithApproveText[1];
  // click the approve button
  await approveBtn.click();
});

When('I search for {string}', async function (searchString) {
  let searchField = await this.driver.findElement(
    By.css('[name="q"]')
  );
  // send keys / searchString to the searchField
  await this.driver.actions()
    .sendKeys(searchField, searchString + Key.ENTER)
    .perform();
});

Then('I should get at least {int} hits', async function (minNumberOfHits) {
  // wait for up to 5 secs for the search to complete
  // and then get the result-stats element that includes number of hits
  let resultStatsEl = await this.driver.wait(until.elementLocated(
    By.css('#result-stats')),
    5000
  );
  // get the text of the result-stats element
  let statText = await resultStatsEl.getText();
  // extract number of hits from the text
  let numberOfHits = +statText.split('(')[0].replace(/\D/g, '');
  // check that the number of hits are at least the minumum expected
  expect(numberOfHits).to.be.at.least(minNumberOfHits);
  // If you want to wait/sleep (avoid if possible, use until instead!)
  // await this.driver.sleep(3000);
});