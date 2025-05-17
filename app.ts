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
