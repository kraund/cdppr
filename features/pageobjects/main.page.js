/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage {
    /**
     * define selectors using getter methods
     */
    get annualCover() {
        return $("//span[contains(text(), 'Re')]");
    }
    get singleTripCover() {
        return $("//div//button[contains(@style, 'background: none;')]");
    }
    get referralCode() {
        return $("header").$("h4*=referral");
    }
    get support() {
        return $("//div[@aria-label='Open Intercom Messenger']");
    }
    get xCovidMessage() {
        return $("//div[@role]//*[name()='svg' and contains(@focusable, 'false')]");
    }
    get hamburgerButton() {
        return $("#Colour")
    }
    get aboutUs() {
        return $("//li//a[contains(text(), 'About us')]")
    }
    get claims() {
        return $("//li//a[contains(text(), 'Claims')]")
    }
    get contact() {
        return $("//li//a[contains(text(), 'Contact')]")
    }
    get returnHome() {
        return $("//li//a[contains(text(), 'Return home')]")
    }
    get returnQuote() {
        return $("//li//a[contains(text(), 'Restart quote')]")
    }
    get supportIcon() {
        return $("//div/div//div//*[name()='svg' and contains(@viewBox, '0 0 28 32')] ")
    }
    get supportWindow() {
        return $("//div//iframe[contains(@title, 'Intercom live chat messenger')]")
    }

    /**
     * define functions and methods
     */

    closeCovidMessage() {
        this.xCovidMessage.click()
    }

    chooseOptionMainPage(option) {
        switch (option) {
            case "Annual cover":
                this.annualCover.click();
                break;
            case "Single cover trip":
                this.singleTripCover.click();
                break;
            case "Referral Code":
                browser.$(this.referralCode).click();
                break;
            case "Support":
                browser.$(this.support).click();
        }
    }
    hamburgerButtonClick() {
        this.hamburgerButton.click()
    }
    hamburgerMenuIsDisplayed() {
        expect(this.aboutUs.isDisplayed()).toEqual(true)
        expect(this.claims.isDisplayed()).toEqual(true)
        expect(this.contact.isDisplayed()).toEqual(true)
        expect(this.returnHome.isDisplayed()).toEqual(true)
        expect(this.returnQuote.isDisplayed()).toEqual(true)
    }
    supportIconClicked() {
        this.supportIcon.click()
    }
    supportWindowisDisplayed() {
        browser.waitUntil(
            () => {
                const obj = this.supportWindow
                const state = obj.isDisplayed()
                return state === true
            }
        )

    }

}

module.exports = new MainPage();