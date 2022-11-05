let people =  ["Greg", "Mary", "Devon", "James"];

// a.
for(let i=0; i<people.length; i++){
    console.log(people[i]);
}

// b.
people.shift();

// c.
people.pop();

// d.
people.unshift("Matt");

// e.
people.push("Keerthick");

console.log(people);

// f.)
// for(let i=0; i<people.length; i++){
//     if(people[i].match('Mary')) break;
//     console.log(people[i]);
// }

// g

let copy = people.slice(2, people.length);
console.log(copy);

// h.)
console.log(people.indexOf('Mary'));

// i.)
console.log(people.indexOf('Foo'));

// j.)

people =  ["Greg", "Mary", "Devon", "James"];

people.splice(0, 1);

people.splice(2, 0, 'Elizabeth', 'Artie');

console.log(people);


// k.)

let withBob = people.concat('Bob');
console.log(withBob);