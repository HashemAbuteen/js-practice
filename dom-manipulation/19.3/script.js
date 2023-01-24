const formInputs = document.getElementById("code-inputs").children;
formInputs[0].addEventListener("paste" , (event) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData("text/plain");
    event.value = "";
    console.log(pastedText);
    for (let i = 0; i < 6 && i < pastedText.length; i++) {
        formInputs[i].value = pastedText[i];
    }
    if(pastedText.length<6){
        formInputs[pastedText.length].select();
        formInputs[pastedText.length].value = "";
    }
})

for (let i = 0; i < 6; i++) {
    formInputs[i].addEventListener("input", (event)=> {
        if(event.target.value.length > 0 && i !==5){
            event.target.value = event.target.value[0];
            event.target.nextElementSibling.select();
        }
        if(i===5 && event.target.value.length > 0){
            event.target.value = event.target.value[0];
        }
        if(event.target.value.length === 0 && i !==0){
            event.target.previousElementSibling.select();
        }
        const regex = /^\d*$/;
        if (!regex.test(event.target.value)){
            event.target.value = "";
            event.target.select();
        }
        event.target.classList.replace("red" , "normal");
    })
}

document.getElementsByTagName("form")[0].addEventListener("submit", function(event) {
    event.preventDefault();
    let codeSubmited = "";
    for (let i = 0; i < 6; i++){
        if(formInputs[i].value.length === 0){
            formInputs[i].classList.replace("normal" , "red");
        }
        codeSubmited+= formInputs[i].value;
    }
    if(codeSubmited === "123456"){
        console.log("Your code is correct");
    }
    else if (codeSubmited.length===6){
        console.log("Wrong code");
    }
    else {
        console.log("Your code is shorter than six");
    }
});


formInputs[5].addEventListener("input", (event)=>{
    if(event.target.value.length !== 0){
        document.querySelector('input[type="submit"]').click();
    }
});