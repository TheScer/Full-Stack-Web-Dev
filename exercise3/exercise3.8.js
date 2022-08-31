//Javascript, 3.8

const person1 = {
  name: "Vilja",
  lastName: "Pelto",
};
("");
const person2 = {
  name: "Miina",
  lastName: "Kenttä",
};

const people = [];
people.push(person1, person2);
console.log(people);

people.map((person) => console.log("good evening " + person.name + "!"));
