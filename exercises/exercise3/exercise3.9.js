//Javascript, 3.9
// Vivian, Jaakko and Maija happen to be identical siblings, so their lastnames
// and ages are the same. Map through the names array to create three objects from them.
// The objects should have a first name, last name and age.

const names = ["Vivian", "Jaakko", "Maija"];

const people = names.map((name) => {
  return { fname: name, lname: "Jefferies", age: 13 };
});

console.log(people);
console.log(people[0]);
