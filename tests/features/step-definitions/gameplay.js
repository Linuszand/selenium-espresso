const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until, Key } = require('selenium-webdriver');
const { expect } = require('chai');
const { waitForDescription, clickElement, textConvert, clickWaitSeven } = require('./testFunctions');

Given('that I am at {string}', async function (url)  {
  await this.driver.get(url);
});

When("I win the game", async function () {
  await clickElement(this.driver, 'Enter the cafe');
  
  await clickElement(this.driver, 'Buy an espresso');

  await clickElement(this.driver, 'Buy an espresso');

  await clickElement(this.driver, 'Exit the cafe');

  await clickElement(this.driver, 'Go north')

  await waitForDescription(this.driver, "You sharpen your ears. You hear people laughing and buzzing to the east? Could it be a cafe?")

  await clickElement(this.driver, 'Go east');
  
  await waitForDescription(this.driver, 'The bartender offers you a can of beer for free... "Come on... Get in to the groove... You can pay me for the next one!"')

  await textConvert(this.driver, '.bag-content > span', 'a can of beer');

  await clickElement(this.driver, 'Go west');

  await clickElement(this.driver, 'Go south');

  await clickElement(this.driver, 'Go south');
  
  await waitForDescription(this.driver, "You wait. You here music coming from the west. Some kind of festival? Out here?");

  await clickElement(this.driver, 'Go west');

  await waitForDescription(this.driver, "The guitarist shouts out to you: \"You look like a hipp kid, why don't come on up and jam with us?\"");

  await clickElement(this.driver, 'Jam with the band');

  await textConvert(this.driver, '.money > .progress > .bad > .val', "5");

  await clickElement(this.driver, 'Go east');

  await clickElement(this.driver, 'Go north');

  await clickElement(this.driver, 'Enter the cafe');

  await clickElement(this.driver, 'Buy an espresso');

  await waitForDescription(this.driver, "The barista is in a dark corner phoning a friend. You overhear parts of the conversion: \"I'm tired of pushing coffee. I just want a beer, but I'm stuck here for like 5 more hours... Man, I tell you if someone would just bring me a beer...\"");

  await clickElement(this.driver, 'Give beer to barista');
});
Then("I should see the description text {string}", async function (text) {
  await textConvert(this.driver, '.description', text);
});

When("I wait enough times to die", async function () {
  await clickWaitSeven(this.driver);
});

Then("I should see the game over text {string}", async function (text) {
  await textConvert(this.driver, '.description', text)
});

