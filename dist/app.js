"use strict";
const hobbies = ["sports", "cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);
const intendedHobbies = ["chess", "soccer", ...hobbies];
console.log(`Active Hobbies: ${activeHobbies}`);
console.log(`Intended Hobbies: ${intendedHobbies}`);
const person = { name: "Max", age: 30 };
const copiedPerson = Object.assign({}, person);
console.log(`Copied Person: ${copiedPerson.name} - ${copiedPerson.age}`);
const addRest = (...numbers) => {
    let result = numbers.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
    return result;
};
console.log(addRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
const [hobby1, hobby2, ...remainingHobbies] = intendedHobbies;
console.log(`hobby1:${hobby1},  hobby2:${hobby2}, remainingHobbies:${remainingHobbies}`);
console.log(remainingHobbies);
//# sourceMappingURL=app.js.map