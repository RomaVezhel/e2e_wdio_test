export default class Page {
    constructor(path) {
        this.path = path
    }

    async open(path) {
        await browser.url(this.path)
    }
}