let cargoHold = ['1138', 'oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket', '20 meters'];

// (i)
cargoHold.splice(3,0, "keys"); // 0 -> insertion without deletion
console.log(cargoHold);

// (ii)
let idx = cargoHold.indexOf('instruction manual'); // 1 -> deletion
cargoHold.splice(idx, 1);
console.log(cargoHold);

// (iii)
cargoHold.splice(2, 2, 'cat', 'dog', 'string cheese');  // 2 -> replace with deletion
console.log(cargoHold);