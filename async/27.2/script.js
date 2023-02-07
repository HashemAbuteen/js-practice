function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      let isArrayValid = true;
      for (let i = 0; i < words.length; i++) {
        if (typeof words[i] !== "string") {
          isArrayValid = false;
          break;
        }
      }
      if (isArrayValid) {
        resolve(words.map(word => word.toUpperCase()));
      } else {
        reject("Array contains non-string values.");
      }
    });
  }
  
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      resolve(words.sort());
    });
  }
  
  const words = ["apple", "cherry", "banana"];
  const notWords = ["apple", "banana", 123];
  
  makeAllCaps(words)
    .then(res => sortWords(res))
    .then(res => console.log(res))
    .catch(err => console.error(err));
  
  makeAllCaps(notWords)
    .then(res => sortWords(res))
    .then(res => console.log(res))
    .catch(err => console.error(err));
  