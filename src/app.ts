// ARROW FUNCTIONS
// const add = (n1: number, n2: number = 10) => {
//   return n1 + n2;
// };

// console.log(add(25));

// THE SPREAD OPERATOR

const hobbies = ["sports", "cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);

const intendedHobbies = ["chess", "soccer", ...hobbies];

console.log(`Active Hobbies: ${activeHobbies}`);
console.log(`Intended Hobbies: ${intendedHobbies}`);

const person = { name: "Max", age: 30 };
const copiedPerson = { ...person };

console.log(`Copied Person: ${copiedPerson.name} - ${copiedPerson.age}`);

// THE REST OPERATOR
// -- helps a function accept an unlimited number of arguments
const addRest = (...numbers: number[]) => {
  let result: number = numbers.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return result;
};

console.log(addRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// ARRAY and OBJECT DESTRUCTURING

const [hobby1, hobby2, ...remainingHobbies] = intendedHobbies;

console.log(
  `hobby1:${hobby1},  hobby2:${hobby2}, remainingHobbies:${remainingHobbies}`
);

console.log(remainingHobbies);
