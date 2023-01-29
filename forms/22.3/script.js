let word;
const wordDiv = document.getElementById("word");
const lettersDiv = document.getElementById("letters");
let score;
let foundLetters ;
var commonWords = [
    "that", "have", "with", "this", "will", "your", "from", "they", "know", "want",
    "been", "good", "much", "some", "time", "very", "when", "come", "here", "just",
    "like", "over", "such", "take", "than", "them", "well", "also", "back", "even",
    "still", "way", "about", "many", "then", "them", "would", "write", "like", "these", 
    "could", "first", "great", "being", "large", "never", "other", "place", "same", 
    "small", "those", "under", "world", "three", "would", "write", "while", "states", 
    "before", "between", "called", "could", "years", "during", "might", "never", 
    "public", "should", "through", "whereas", "whether"
   ];


   const clickEvent = (e)  => {
    click(e.target.letter);
}

const click = (letter)=> {
    const letterElement = document.getElementById("letter-"+letter);
        if(letterElement.guessed){
            return;
        }
        letterElement.guessed = true;
        let correct = false;
        if(word && word.includes(letter)){
            for(let i = 0; i < word.length ; i++){
                if(word[i] === letter){
                    wordDiv.children[i].innerText = letter;
                    wordDiv.children[i].classList.add("found");
                    letterElement.classList.add("right");
                    correct = true;
                    foundLetters ++;
                }
            }
        }
        if(!correct){
            letterElement.classList.add("false");
            score -= 100;
        }
        if(foundLetters === word.length){
            setTimeout(()=>alert("congrats you got the word \n Score :" + score) , 100) ;
        }
}

const resetGame = ()=> {
    foundLetters = 0
    wordDiv.innerText = "";
    lettersDiv.innerText = "";
    score = 2600;
    const random = Math.floor((Math.random()*(commonWords.length-1))+1);
    word = commonWords[random].toUpperCase();
    fillWord();

for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    const letterElement = document.createElement("div");
    letterElement.classList.add("letter");
    letterElement.id= "letter-"+letter;
    letterElement.innerText = letter;
    letterElement.guessed = false;
    letterElement.letter = letter;
    letterElement.addEventListener("click" , clickEvent);
    lettersDiv.appendChild(letterElement);
  };
}
const fillWord = ()=> {
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        const letterElement = document.createElement("div");
        letterElement.classList.add("letter");
        letterElement.innerText = "?"
        wordDiv.appendChild(letterElement);
    }
}
resetGame();



  document.addEventListener("keydown", function(event) {
    if(event.keyCode >= 65 && event.keyCode <= 90){
        const letter = String.fromCharCode(event.keyCode);
        click(letter);
    }
});





