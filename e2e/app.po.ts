import { browser, element, by } from 'protractor';

export class NobelPrizePage {
    navigateTo() {
        return browser.get('/');
    }

    getByTag(tag) {
        return element(by.css('app-root ' + tag));
    }

    getParagraphText() {
        return element(by.css('app-root h1')).getText();
    }

    loginButton() {
        return element(by.className('login-button'));
    }

}
