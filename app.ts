const input1 = document.querySelector('.input1') as HTMLInputElement;
const input2 = document.querySelector('.input2') as HTMLInputElement;
const input3 = document.querySelector('.input3') as HTMLInputElement;
const button = document.querySelector('.button') as HTMLButtonElement;
const result1 = document.querySelector('.result1') as HTMLElement;
const result2 = document.querySelector('.result2') as HTMLElement;
const resultpassword = document.querySelector('.password-result') as HTMLElement;

function changes(val: string) {
  let output = ''
  for (let index = 0; index < val.length; index++) {
    const letter = val[index];
    output += (letter === letter.toLowerCase()) ? letter.toUpperCase() : letter.toLowerCase();
  } return output;
}

// function changes(value: string) :string {
//     return [...value]
//     .map(letter => (letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()))
//     .join('');
// }


function isValidPassword(pw: string) {
  const hasUpperCase = /[A-Z]/.test(pw);
  const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pw);
  return pw.length >= 10 && hasUpperCase && hasSymbol;
}

button.addEventListener('click', () => {
  result1.textContent = changes(input1.value);
  result2.textContent = changes(input2.value);
  const valid = isValidPassword(input3.value)
  resultpassword.textContent = valid ? 'valid!' : '10 characters, 1 symbol, 1 uppercase';
  resultpassword.style.color = valid ? 'green' : 'red';
});



// =========== SAMMI PROJECT
enum Website {
  YouTube = 'YouTube',
  Instagram = 'Instagram',
}

let person: {
  id: number
  name: string
  isMarried: boolean
  username: string
  email: string[]
  address: {
    street: string
    suite: string
    zipcode: string | number
    geo: [number, number]
  }
  phone: number
  website: Website
  company: {
    name: string
    bs: string
  }
} = {
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
}

//sammi module 1 all tasks
let planet: string = 'neptun'
let moons: number = 2
let isMarried: boolean = false
console.log(typeof moons);
// 2
function points(a:number, b:number):number |string {
  return a * b
}
console.log(points(2,5));
//3
let gadget: {model: string; battery: number; waterproof: boolean} = {
  model: 'nokia',
  battery: 85,
  waterproof: false
}
//4
const scores: number[] = [88, 76, 91, 100];
let score = scores
score.push(20)
console.log(score);
//5
const code: [string, number] = ['xxzzz', 97.00]
code[0]