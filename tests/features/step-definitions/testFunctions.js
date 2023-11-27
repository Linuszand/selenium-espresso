const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until, findElement } = require('selenium-webdriver');
const { expect } = require('chai');

async function textConvert(driver, element, text) {
  element = await driver.findElement(By.css(element));
  let textConvert = await element.getText();
  expect(textConvert).to.equal(text)
}

async function clickElement(driver, element) {
  let xpath = "//menu[@class='choices']//ul/li[text()='" + element + "']";
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
    wait = await driver.findElement(
      By.xpath("//menu[@class='choices']//ul/li[text()='Wait']")
    );
    await driver.wait(until.elementIsVisible(wait), 5000);
    
    description = await driver.findElement(By.css('.description'));
    await driver.wait(until.elementIsVisible(description), 5000);

    descriptionText = await description.getText();
    await wait.click();
  }

  expect(descriptionText).to.equal(text);
}

module.exports = { waitForDescription, clickElement, textConvert };
