import Page from "../pages/page.js";
import {url} from "../test-data/constants";


class FunnelPage extends Page {
    constructor() {
        super(url);
        this.url = url;
    }

    /** selectors */
    get $firstName() {
        return $('#first_name')
    }

    get $lastName() {
        return $('#last_name')
    }

    get $countryDropDown() {
        return $('.iti__flag-container')
    }

    get $mexicoCountry() {
        return $('#iti-item-mx')
    }

    get $phoneNumber() {
        return $("#phone_num")
    }

    get $userEmail() {
        return $('#user_email')
    }

    get $submitBtn() {
        return $('#lead-form-submit')
    }

    get $popUp() {
        return $(".nrp__block")
    }

    get $popUpBtn() {
        return $("div.nrp__btn")
    }

    get $popUpTextTY() {
        return $(".nrp__t1")
    }

    get $popUpTextInfo() {
        return $(".nrp__t2")
    }

    /** methods */
    async setFirstName(value) {
        // await (await this.firstName).waitForDisplayed()
        await (await this.$firstName).setValue(value)
    }

    async setLastName(value) {
        await (await this.$lastName).setValue(value)
    }

    async selectCountry() {
        await (await this.$countryDropDown).click()
    }

    async selectMexicoCountry() {
        await (await this.$mexicoCountry).click()
    }

    async setPhoneNumber(value) {
        await (await this.$phoneNumber).setValue(value)
    }

    async clickSubmitBtn() {
        await (await this.$submitBtn).click()
    }

    async setEmail(value) {
        await (await this.$userEmail).setValue(value)
    }

    async popUpIsDisplayed() {
        await (await this.$popUp).waitForDisplayed({ timeout: 10000, timeoutMsg: 'Expect TY pop is displayed' })
    }

    async getPopUpTextTY() {
        return await (await this.$popUpTextTY).getText()
    }

    async getPopUpTextInfo() {
        return await (await this.$popUpTextInfo).getText()
    }

    async clickPopUpBtn() {
        await (await this.$popUpBtn).click()
    }

    async popUpIsNotDisplayed() {
        await (await this.$popUp).waitForDisplayed( { timeout: 10000, reverse: true, timeoutMsg: 'Expect TY pop is not displayed' })
    }
}

export const funnelPage = new FunnelPage();
