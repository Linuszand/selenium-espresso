const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until} = require('selenium-webdriver');
const { expect } = require('chai');

async function textConvert(driver, element, text) {
  element = await driver.findElement(By.css(element));
  await driver.wait(until.elementIsVisible(element), 5000);
  let convertText = await element.getText();
  expect(convertText).to.equal(text)
}

async function clickWaitSeven(driver) {
  await clickElement(driver, 'Wait');
  await clickElement(driver, 'Wait');
  await clickElement(driver, 'Wait');
  await clickElement(driver, 'Wait');
  await clickElement(driver, 'Wait');
  await clickElement(driver, 'Wait');
  await clickElement(driver, 'Wait');
}

async function clickElement(driver, element) {
  let xpath = "//ul/li[text()='" + element + "']";
  element = await driver.findElement(
    By.xpath(xpath)
  );
  await element.click();
}

async function waitForDescription(driver, text) {
  let description;
  let descriptionText;
  let wait;

  while (descriptionText !== text) {
    description = await driver.findElement(By.css('.description'));
    await driver.wait(until.elementIsVisible(description), 5000);
    descriptionText = await description.getText();

    wait = await driver.findElement(
      By.xpath("//ul/li[text()='Wait']")
    );
    await driver.wait(until.elementIsVisible(wait), 5000);
    await wait.click();
  }

  expect(descriptionText).to.equal(text);
}

module.exports = { waitForDescription, clickElement, textConvert, clickWaitSeven};
