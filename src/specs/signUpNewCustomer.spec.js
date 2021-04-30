import {signUpUserData} from '../test_data/signUpUserData.js'
import {url} from '../resources/constants.js'
import {FunnelPage} from '../pages/funnelPage.js'
import chai from 'chai'

const expect = chai.expect


describe('Sign up new customer', function () {
    it('Page is opened', async function () {
        await FunnelPage.open(url)
        await expect(url).to.include('funnel_qa_course_work')
    });

    it('Enter valid data in the registration form', async function () {
        const firstName = await $('#first_name');
        const lastName = await $('#last_name');
        await firstName.setValue(signUpUserData.getRandomFirstName());
        await lastName.setValue(signUpUserData.getRandomLastName());
        await (await $('.iti__flag-container')).click();
        await (await $('#iti-item-gt')).click();
        const phoneNumber = await $("#phone_num");
        await phoneNumber.setValue(signUpUserData.getRandomPhoneNumber());
        await (await $('#user_email')).setValue(signUpUserData.getRandomEmail());
        await (await $('#lead-form-submit')).click();


    });
});