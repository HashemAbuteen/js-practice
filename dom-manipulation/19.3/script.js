const formInputs = document.getElementById("code-inputs").children;

formInputs[0].addEventListener("paste" , (event) => {
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

// for (let i = 0; i < 6; i++) {
//     formInputs[i].addEventListener("input", (event)=> {
//         // debugger
//         if(event.target.value.length > 0 && i !==5){
//         event.target.value = event.target.value[0];
//         event.target.nextElementSibling.select();
//         }
//         event.target.classList.replace("red" , "normal");
//     })
// }

// document.getElementsByTagName("form")[0].addEventListener("submit", function(event) {
//     event.preventDefault();
//     let codeSubmited = "";
//     for (let i = 0; i < 6; i++){
//         if(formInputs[i].value.length === 0){
//             formInputs[i].classList.replace("normal" , "red");
//             codeSubmited+= formInputs[i].value;
//         }
//     }
// });
