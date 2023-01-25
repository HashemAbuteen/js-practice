const ageInput = document.getElementById("input-age");
const ageCheckButton = document.getElementById("button-age-check");
const resultDiv = document.getElementById("div-result");

ageCheckButton.addEventListener("click" , () => {
    let age = ageInput.value;
    if(!isNaN(parseFloat(age))){
        age = parseFloat(age);
        if(age >= 18){
            resultDiv.innerHTML = "You can drink";
        }
        else {
            resultDiv.innerHTML = "You cannot drink";
        }
    }
    else {
        resultDiv.innerText = "Age must be a number";
    }
})