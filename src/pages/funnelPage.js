import {url} from '../resources/constants.js'

export class FunnelPage {
    //selectors
    // static async get fistName() {
    //      return await $('#first_name');
    // }

    // methods
    static async open(path) {
        await browser.url(path)
    }
}



