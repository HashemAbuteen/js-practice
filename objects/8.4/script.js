const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const countLetters = (arr) => {
    let letterCount = {};
    for(let i = 0; i < arr.length; i++){
        let word = arr[i];
        word = word.toLowerCase();
        for(let j = 0; j < word.length; j++){
            if(!letterCount[word[j]]){
                letterCount[word[j]] = 1;
            }else {
                letterCount[word[j]]++;
            }
        }
    }
    let mostOccurrenceLetter = Object.keys(letterCount).reduce((a, b) => letterCount[a] > letterCount[b] ? a : b);
    console.log("Most occuring letter is: " + mostOccurrenceLetter)
    return letterCount;
}
console.log(countLetters(array));

