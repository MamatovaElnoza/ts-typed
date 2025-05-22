"use strict";
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');
const button = document.querySelector('.button');
const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');
const resultpassword = document.querySelector('.password-result');
function changes(val) {
    let output = '';
    for (let index = 0; index < val.length; index++) {
        const letter = val[index];
        output += (letter === letter.toLowerCase()) ? letter.toUpperCase() : letter.toLowerCase();
    }
    return output;
}
// function changes(value: string) :string {
//     return [...value]
//     .map(letter => (letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()))
//     .join('');
// }
function isValidPassword(pw) {
    const hasUpperCase = /[A-Z]/.test(pw);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pw);
    return pw.length >= 10 && hasUpperCase && hasSymbol;
}
button.addEventListener('click', () => {
    result1.textContent = changes(input1.value);
    result2.textContent = changes(input2.value);
    const valid = isValidPassword(input3.value);
    resultpassword.textContent = valid ? 'valid!' : '10 characters, 1 symbol, 1 uppercase';
    resultpassword.style.color = valid ? 'green' : 'red';
});
// =========== SAMMI PROJECT
var Website;
(function (Website) {
    Website["YouTube"] = "YouTube";
    Website["Instagram"] = "Instagram";
})(Website || (Website = {}));
let person = {
    id: 1,
    name: "Leanne Graham",
    isMarried: false,
    username: 'Bret',
    email: ['elnoza@gmail.com', 'islom@gmail.com'],
    address: {
        street: "Kulas Light",
        suite: 'Apt. 556',
        zipcode: 92998 - 3874,
        geo: [-37.3159, 81.1496],
    },
    phone: 1 - 770 - 736 - 80315644,
    website: Website.Instagram,
    company: {
        name: 'Romaguera-Crona',
        bs: 'harness real-time e-markets',
    },
};
//sammi module 1 all tasks
let planet = 'neptun';
let moons = 2;
let isMarried = false;
console.log(typeof moons);
// 2
function points(a, b) {
    return a * b;
}
console.log(points(2, 5));
//3
let gadget = {
    model: 'nokia',
    battery: 85,
    waterproof: false
};
