

export class signUpUserData {
    static getRandomEmail() {
        const randomPrefix = 'test' + Math.random().toString(36);
        return `${randomPrefix}@mailinator.com`;
    }

    static getRandomPhoneNumber () {
        return Math.random().toString().slice(2,11);
    };

    static getRandomFirstName () {
        const randomUser = [...Array(10)].map(i=>(~~(Math.random()*36)).toString(36)).join('')
        return `test${randomUser}`
    }

    static getRandomLastName () {
        const randomUser = [...Array(10)].map(i=>(~~(Math.random()*36)).toString(36)).join('')
        return `test${randomUser}`
    }


}


// export function getRandomEmail() {
//     const randomPrefix = 'test' + Math.random().toString(36);
//     return `${randomPrefix}@mailinator.com`;
// }



// const getdataForEmail = function getdataForEmail () {
//     let mounth = new Date().getUTCMonth() + 1;
//     const Data = new Date();
//     return Data.getFullYear() + "." + mounth + "." + Data.getDate() +
//         "." + Data.getHours() + "." + Data.getMinutes() +
//         "." + Data.getSeconds() + "." + Data.getMilliseconds();
// }
//
// export let userEmail = function () {
//     return `nfse2eui${getdataForEmail()}@mailinator.com`;
// };

