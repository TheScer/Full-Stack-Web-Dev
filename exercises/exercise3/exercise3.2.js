//Javascript, 3.2

// Complete the code in the function, so that it will return the length
// of the longest name given in the array.
// For example, with these name, the log in the end should print '8'.

const names = ["Lily", "Aurelius", "Peter"];

function longestName(names) {
  const namesLength = names.map((name) => name.length);
  return Math.max.apply(Math, namesLength);
}

console.log(longestName(names));

// logic
// check every element length
// find the max length
