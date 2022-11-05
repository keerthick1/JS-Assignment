let cargoHold =  ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

// (i)
let idx = cargoHold.indexOf('slinky');
cargoHold[idx] = 'space tether';
console.log(cargoHold);

// (ii)
console.log(cargoHold.pop()); // removes the last item
console.log(cargoHold);

// (iii)
console.log(cargoHold.shift()); // return the first item
console.log(cargoHold);

// (iv)
cargoHold.unshift("1138");
cargoHold.push("20 meters");
console.log(cargoHold);

// (v)
console.log(`Array : ${cargoHold} \nlength is ${cargoHold.length}`);

