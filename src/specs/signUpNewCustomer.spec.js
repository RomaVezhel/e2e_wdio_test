import * as signUpUserData from '../test-data/signUpUserData.js'
import {funnelPage} from '../pages/funnelPage.js'
import chai from 'chai'
import {popUpText} from '../test-data/popUpText.js'

const expect = chai.expect

describe('Sign up new customer', function () {
    it('Page is opened', async function () {
        await funnelPage.open();
        await expect(funnelPage.url).to.include('funnel_qa_course_work')
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
        await expect(await funnelPage.getPopUpTextTY()).to.equal(popUpText.popUpTextTY)
        await expect(await funnelPage.getPopUpTextInfo()).to.equal(popUpText.popUpTextInfo);
        await funnelPage.clickPopUpBtn();
    });
});
