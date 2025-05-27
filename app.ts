// const input1 = document.querySelector('.input1') as HTMLInputElement;
// const input2 = document.querySelector('.input2') as HTMLInputElement;
// const input3 = document.querySelector('.input3') as HTMLInputElement;
// const button = document.querySelector('.button') as HTMLButtonElement;
// const result1 = document.querySelector('.result1') as HTMLElement;
// const result2 = document.querySelector('.result2') as HTMLElement;
// const resultpassword = document.querySelector('.password-result') as HTMLElement;

// function changes(val: string) {
//   let output = ''
//   for (let index = 0; index < val.length; index++) {
//     const letter = val[index];
//     output += (letter === letter.toLowerCase()) ? letter.toUpperCase() : letter.toLowerCase();
//   } return output;
// }

// function changes(value: string) :string {
//     return [...value]
//     .map(letter => (letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()))
//     .join('');
// }


// function isValidPassword(pw: string) {
//   const hasUpperCase = /[A-Z]/.test(pw);
//   const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pw);
//   return pw.length >= 10 && hasUpperCase && hasSymbol;
// }

// button.addEventListener('click', () => {
//   result1.textContent = changes(input1.value);
//   result2.textContent = changes(input2.value);
//   const valid = isValidPassword(input3.value)
//   resultpassword.textContent = valid ? 'valid!' : '10 characters, 1 symbol, 1 uppercase';
//   resultpassword.style.color = valid ? 'green' : 'red';
// });



// =========== SAMMI PROJECT
// enum Website {
//   YouTube = 'YouTube',
//   Instagram = 'Instagram',
// }

// let person: {
//   id: number
//   name: string
//   isMarried: boolean
//   username: string
//   email: string[]
//   address: {
//     street: string
//     suite: string
//     zipcode: string | number
//     geo: [number, number]
//   }
//   phone: number
//   website: Website
//   company: {
//     name: string
//     bs: string
//   }
// } = {
//   id: 1,
//   name: "Leanne Graham",
//   isMarried: false,
//   username: 'Bret',
//   email: ['elnoza@gmail.com', 'islom@gmail.com'],
//   address: {
//     street: "Kulas Light",
//     suite: 'Apt. 556',
//     zipcode: 92998 - 3874,
//     geo: [-37.3159, 81.1496],
//   },
//   phone: 1 - 770 - 736 - 80315644,
//   website: Website.Instagram,
//   company: {
//     name: 'Romaguera-Crona',
//     bs: 'harness real-time e-markets',
//   },
// }

//sammi module 1 all tasks
// let planet: string = 'neptun'
// let moons: number = 2
// let isMarried: boolean = false
// console.log(typeof moons);
// // 2
// function points(a: number, b: number): number | string {
//   return a * b
// }
// console.log(points(2, 5));
// //3
// let gadget: { model: string; battery: number; waterproof: boolean } = {
//   model: 'nokia',
//   battery: 85,
//   waterproof: false
// }
// //4
// const scores: number[] = [88, 76, 91, 100];
// let score = scores
// score.push(20)
// console.log(score);
// //5
// const code: [string, number] = ['xxzzz', 97.00]
// code[0]
// //6
// const tags: readonly string[] = ["bug", "butterfly", "urgent"];
// //7
// enum Signal {
//   Red,
//   Yellow,
//   Green
// }
// console.log(Signal.Green);


// Talabalar ro‘yxati yaratiladi. Har bir talaba bo‘yicha ma’lumotlar chiqariladi. 18 yoshdan kattalar ajratiladi. Faqat Active holatdagilar ajratiladi. Har bir talaba uchun     o‘rtacha baho hisoblanadi. Qisqa StudentSummary[] tuziladi.

// enum StudentStatus {
//   Active,
//   Graduated,
//   Dropped
// }

// interface Student {
//   id: number;
//   name: string;
//   age: number;
//   status: StudentStatus;
//   grades: number[];
// }

// interface StudentSummary {
//   name: string;
//   age: number;
//   averageGrade: number;
// }

// const students: Student[] = [
//   { id: 1, name: "Ali", age: 20, status: StudentStatus.Active, grades: [80, 75, 90] },
//   { id: 2, name: "Laylo", age: 17, status: StudentStatus.Graduated, grades: [88, 92, 95] },
//   { id: 3, name: "Diyor", age: 22, status: StudentStatus.Dropped, grades: [60, 55, 70] },
//   { id: 4, name: "Malika", age: 19, status: StudentStatus.Active, grades: [100, 95, 98] }
// ];

// const summaries: StudentSummary[] = [];

// function calculateAverage(grades: number[]): number {

//   let maxIndex = grades.indexOf(Math.max(...grades));
//   let minIndex = grades.indexOf(Math.min(...grades));
//   let updatedGrades = [...grades];

//   if (maxIndex > minIndex) {
//     updatedGrades.splice(maxIndex, 1);
//     updatedGrades.splice(minIndex, 1);
//   } else {
//     updatedGrades.splice(minIndex, 1);
//     updatedGrades.splice(maxIndex, 1);
//   }

//   const sum = updatedGrades.reduce((acc, val) => acc + val, 0);
//   return sum / updatedGrades.length;
// }

// for (let i = 0; i < students.length; i++) {
//   const { name, age, status, grades } = students[i];

//   console.log(`----- ${name} - Yosh: ${age}, Holat: ${StudentStatus[status]} -----`);
//   console.log(`Baholar: ${grades.join(", ")}`);

//   if (age >= 18) {
//     console.log("18 yoshdan katta");
//   }

//   if (status === StudentStatus.Active) {
//     console.log('active');
//   } else {
//     console.log('active emas');

//   }

  // const average = calculateAverage(grades);
  // console.log(`O'rtacha baho: ${average.toFixed(2)}`);
// }




// let info: 100 | 199
// let success: 200 | 299
// let redirect: 300 | 399
// let client: 400 | 499
// let error: 500 | 599
function code(code: 100 | 200 | 300 |400 |500) {
  if (code === 100) {
  console.log('Informational responses');
} else if (code === 200){
  console.log('Successful respponses');
}else if (code=== 300){
  console.log('Redirection messages');
}else if (code=== 400){
  console.log('Client error respponses');
}else if (code===500){
  console.log('Server error respponses');
}else {
  console.log('wtf is this?');
  
}
}
code(300)
