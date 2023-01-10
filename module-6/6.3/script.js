function getStringLengths(strings) {
    return strings.map(string => string.length);
}

let exampleArray = ["boo", "doooo", "hoo","ro"];
console.log(getStringLengths(exampleArray))
