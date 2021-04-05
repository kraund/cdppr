const {
    Given,
    When,
    Then
} = require("@cucumber/cucumber");

const MainPage = require("../pageobjects/main.page");

Given(/^I am on the main page$/, () => {
    browser.url(
        "https://pluto-customer-web-app-staging.herokuapp.com/tailored-annual-or-single"
    );
    browser.pause(1000);
    MainPage.closeCovidMessage();
});

When(/^I click (.*) starting option$/, option => {
    MainPage.chooseOptionMainPage(option);
});

Then(/^I should be redirected to (.*) page$/, page => {
    if (page == "Annual cover") {
        console.log(browser.getUrl())
        expect(browser.getUrl()).toEqual(
            "https://pluto-customer-web-app-staging.herokuapp.com/annual-single"
        );
    } else if (page == "Single cover trip") {
        console.log(browser.getUrl())
        expect(browser.getUrl()).toEqual(
            "https://pluto-customer-web-app-staging.herokuapp.com/single-annual"
        );
    } else {
        console.log("Please provide correct page name");
    }
})

When(/^I click hamburger button$/, () => {
    MainPage.hamburgerButtonClick();
})

Then(/^Hamburger menu is expanded$/, () => {
    MainPage.hamburgerMenuIsDisplayed();
})

When(/^I click support icon$/, () => {
    MainPage.supportIconClicked();
})

Then(/^Support window is opened$/, () => {
    MainPage.supportWindowisDisplayed();
})