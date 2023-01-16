// 1. Write a function called doubleValues which accepts an array of integers and returns a new array with all the values in the array passed to the function doubled.
function doubleValues(arr) {
    return arr.map(val => val * 2);
}
console.log(doubleValues([1, 2, 3])); // [2, 4, 6]

// 2. Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function.
function onlyEvenValues(arr) {
    return arr.filter(val => val % 2 === 0);
}
console.log(onlyEvenValues([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// 3. Write a function called showFirstAndLast which accepts an array as an argument and returns a new array with only the first and last elements from the function’s argument array. The returned array should only contain elements that are strings.
function showFirstAndLast(arr) {
    if(arr.length < 2) return [];
    return [arr[0], arr[arr.length-1]].filter(val => typeof val === 'string');
}
console.log(showFirstAndLast(['first', 'second', 'third'])); // ['first', 'third']

// 4. Write a function called vowelCount which accepts a string as an argument. The function should return an object which has the count of the number of vowels that are in the string. The key should be the vowel and the value should be the count. e.g. {a:3, o:2,u:4}. Should not be case-sensitive.
function vowelCount(str) {
    let vowels = 'aeiouAEIOU';
    let vowelsCount = {};
    for(let char of str) {
        if(vowels.includes(char)) {
            vowelsCount[char.toLowerCase()] = (vowelsCount[char.toLowerCase()] || 0) + 1;
        }
    }
    return vowelsCount;
}
console.log(vowelCount('hello world')); // {e: 1, o: 2}

// 5. Write a function capitalize that takes a string as an argument and will return the whole string capitalized.
function capitalize(str) {
    return str.toUpperCase();
}
console.log(capitalize('hello world')); // 'HELLO WORLD'

// 6. Write a function called shiftLetters that takes a string as an argument and return’s an encoded string with each letter shifted down the alphabet by one.
function shiftLetters(str) {
    let newString = '';
    for(let char of str) {
        if(char.match(/[a-z]/i)) {
            let charCode = char.charCodeAt(0);
            if(charCode === 122 || charCode === 90) {
                newString += String.fromCharCode(charCode - 25);
            } else {
                newString += String.fromCharCode(charCode + 1);
            }
        } else {
            newString += char;
        }
    }
    return newString;
}
console.log(shiftLetters('abc')); // 'bcd'


// 7. Create a function called swapCase that takes a string as an argument and returns a string that every other word is capitalized.
function swapCase(str) {
    let words = str.split(' ');
    for(let i = 0; i < words.length; i++) {
        if(i % 2 === 0) {
            words[i] = words[i].toUpperCase();
        } else {
            words[i] = words[i].toLowerCase();
        }
    }
    return words.join(' ');
}
console.log(swapCase('Hello World')); // 'HELLO world'
