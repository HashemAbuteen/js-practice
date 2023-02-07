function testNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(`${num} is greater than 10.`);
    } else if (num < 10) {
      reject(`${num} is less than 10.`);
    } else {
      resolve(`${num} is equal to 10.`);
    }
  });
}

testNumber(8)
  .then(res => console.log(res))
  .catch(err => console.error(err));

