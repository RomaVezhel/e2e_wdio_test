import * as signUpUserData from "../test-data/signUpUserData.js";
import {funnelPage} from "../pages/funnelPage.js";
import {funnelAssertions} from "../assertions/funnel.assertions";


describe('Sign up new customer', function () {
    it('Page is opened', async function () {
        await funnelPage.open();
        await funnelAssertions.checkPageOpened();
    });

    it('Enter valid data in the registration form', async function () {
        await funnelPage.setFirstName(signUpUserData.getRandomFirstName());
        await funnelPage.setLastName(signUpUserData.getRandomLastName());
        await funnelPage.selectCountry();
        await funnelPage.selectMexicoCountry();
        await funnelPage.setPhoneNumber(signUpUserData.getRandomPhoneNumber());
        await funnelPage.setEmail(signUpUserData.getRandomEmail());
        await funnelPage.clickSubmitBtn();
        await funnelPage.popUpIsDisplayed();
        // await expect(await funnelPage.popUp).to.exist;        // асершн после wait можно не писать если дождались элемент
        await funnelAssertions.checkPopUpTextTY();
        await funnelAssertions.checkPopUpTextInfo();
        await funnelPage.clickPopUpBtn();
    });
});
