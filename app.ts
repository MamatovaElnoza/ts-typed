const input = document.querySelector('.input') as HTMLInputElement;
const button = document.querySelector('.button') as HTMLButtonElement;
const result = document.querySelector('.result') as HTMLElement;

// function changes(value: string) {
//     let output = ''
//     for (let index = 0; index < value.length; index++) {
//         const letter = value[index];
//         output += (letter === letter.toLowerCase()) ? letter.toUpperCase() : letter.toLowerCase();
//     }return output;
// }

function changes(value: string) {
    return [...value]
    .map(letter => (letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()))
    .join('');
}

// button.addEventListener('click', () => {
//     result.input = changes(input.value)
// })
button.addEventListener('click', () => {
  result.textContent = changes(input.value);
});

//  console.log(button);

// =========== SAMMI PROJECT
enum Website {
  YouTube = 'YouTube',
  Instagram = 'Instagram',
}

let person : {
  id: number
  name: string
  isMarried: boolean
  username: string
  email: string[]
  address: {
    street: string
    suite:string
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
    suite:'Apt. 556',
    zipcode: 92998-3874,
    geo: [-37.3159, 81.1496],
  },
  phone: 1-770-736-80315644,
  website: Website.Instagram,
  company: {
    name: 'Romaguera-Crona',
    bs: 'harness real-time e-markets',
  },
}