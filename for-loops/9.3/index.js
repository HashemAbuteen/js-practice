const food = ["Noodle", "Pasta", "Ice-cream",
"Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza",
"Olives", "Hamburgers"];

function compareArrays(arr1, arr2) {
    let sameItems = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          sameItems.push(arr1[i]);
        }
      }
    }
    return sameItems.length > 0 ? sameItems : false;
  }
  
  console.log(compareArrays(food, food1));
  