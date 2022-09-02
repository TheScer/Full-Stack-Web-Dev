//Javascript, 3.5
// Create a function that takes an array as an argument,
// and logs the value of a random token inside the array.
// Note that the function should work with arrays of different
// size.

const myArray = [12, 35, 46, 89];

const randoLogger = (anArray) => {
  arrLength = anArray.length;
  const x = Math.floor(Math.random() * arrLength);
  return anArray[x];
};

console.log(randoLogger(myArray));
