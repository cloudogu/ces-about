import { browser, by, element } from 'protractor';

export class CesAboutPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getMenu() {
    return element(by.tagName('li'))
  }
}
