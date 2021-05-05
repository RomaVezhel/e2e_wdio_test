import {funnelPage} from '../pages/funnelPage.js'
import {constants} from "../test-data/constants";
import chai from 'chai'

const expect = chai.expect

class FunnelAssertions {
    async checkPageOpened() {
        await expect(funnelPage.url).to.include('funnel_qa_course_work')
    }

    async checkPopUpTextTY() {
        await expect(await funnelPage.getPopUpTextTY()).to.equal(constants.popUpTextTY)
    }

    async checkPopUpTextInfo() {
        await expect(await funnelPage.getPopUpTextInfo()).to.equal(constants.popUpTextInfo);
    }

}

export const funnelAssertions = new FunnelAssertions();
