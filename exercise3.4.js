//Javascript, 3.4

const randomizer = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

let x = Math.random;

console.log(randomizer(1, 30));
