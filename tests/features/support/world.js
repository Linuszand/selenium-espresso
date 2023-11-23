const seleniumWebdriver = require('selenium-webdriver');
const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const { timeout, browser, headless } = require('../../config');

const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();
headless && options.addArguments('--headless=new');

class CustomWorld {
  constructor() {
    this.driver = new seleniumWebdriver
      .Builder()
      .setChromeOptions(options)
      .forBrowser(browser)
      .build();
  }
}

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);