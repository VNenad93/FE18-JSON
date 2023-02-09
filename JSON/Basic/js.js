let sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
let fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

let parsedSandwiches = JSON.parse(sandwiches)
let parsedFries = JSON.parse(fries)

console.log(`My favorite sandwich is a ${parsedSandwiches.sandwich} which has approximately ${parsedSandwiches.calories} calories, along with it I enjoy eating ${parsedFries.fries_size} which have about ${parsedFries.calories} calories.`)