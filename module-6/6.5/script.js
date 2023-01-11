const obj = {key: "value"};
const filledArray = new Array(100).fill(obj);
const numbersArray = Array.from({length: 100}, (_, i) => i+1);
const object = { key1: "value1", key2: "value2", key3: "value3" };
const values = Object.values(object);
const array = [{ key: "value1" }, { key: "value2" }, { key: "value3" }];
const object2 = Object.assign({}, ...array);
const arr = [1, 2, 3];
console.log(Array.isArray(arr));
const originalArray = [1, 2, 3];
const copiedArray = originalArray.slice();
const copiedArray2 = [...originalArray];
