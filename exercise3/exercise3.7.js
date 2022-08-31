//Javascript, 3.7

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

[x, y] = numbers;

console.log(x + " " + y);

[x, z, y] = numbers;

console.log(x + " " + y);

[a, b, c, d, ...newArray] = numbers;

console.log(newArray);
