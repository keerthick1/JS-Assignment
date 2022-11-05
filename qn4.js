let holdCabinet1 =  ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 =  ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

// (i)
let conCat = holdCabinet1.concat(holdCabinet2); // concated the two array
console.log(holdCabinet1); // No, original array is not affected
console.log(holdCabinet2); // No, original array is not affected

// (ii)
let holdSlice1 = holdCabinet1.slice(2, 4);
let holdSlice2 = holdCabinet2.slice(2, 4);
console.log(holdCabinet1); // No, original array is not affected
console.log(holdCabinet2); // No, original array is not affected

// (iii)

let rev = holdCabinet1.reverse();
let sort = holdCabinet2.sort();
console.log(holdCabinet1); // Yes, original array is affected
console.log(holdCabinet2); // Yes, original array is affected