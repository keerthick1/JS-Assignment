const prompt=require('prompt-sync')();
// a.), b.)

let details = [];
let n = prompt("Enter the row size : ");
for(let i=0; i<n; i++){
    details[i] = [];
}

for(let i=0; i<n; i++){
    let element = prompt("Enter the element : "); 
    let symbol = prompt("Enter the symbol : "); 
    let value = prompt("enter the value : "); 
    details[i].push(element, symbol, value);
  }

// console.log(details);

// c.)

let table = [
    ['kalm', 'kce'],
    ['dhruva', 'karpagam']
];

console.log(table[1]); // displays the entire row
console.log(table[1][1]); // displays the specific element

// d.)

console.log(details[0][2]);
console.log(details[1][0]);
console.log(details[2][1]);