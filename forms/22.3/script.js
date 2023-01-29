let word;
const wordDiv = document.getElementById("word");
const lettersDiv = document.getElementById("letters");

const resetGame = ()=> {
    wordDiv.innerText = "";
    lettersDiv.innerText = "";
    fetch("https://random-word-api.herokuapp.com/word")
.then(response => response.json())
.then(data => {
    word = data[0].toUpperCase();
    fillWord();
})
.catch(error => {
    console.error("Error:", error);
});

for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    const letterElement = document.createElement("div");
    letterElement.classList.add("letter");
    letterElement.id= "letter-"+letter;
    letterElement.innerText = letter;
    letterElement.guessed = false;
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



  let foundLetters = 0;
  document.addEventListener("keydown", function(event) {
    if(event.keyCode >= 65 && event.keyCode <= 90){
        const letter = String.fromCharCode(event.keyCode);
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
        }
    }
    if(foundLetters === word.length){
        setTimeout(()=>alert("congrats you got the word") , 100) ;
    }
});



