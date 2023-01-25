const smiliesDiv = document.getElementById("smilies");
const input = document.getElementsByTagName("input")[0];
const submitButton = document.getElementsByTagName("button")[0];

submitButton.addEventListener("click" , ()=> {
    smiliesDiv.innerText = "";
    if(isNaN(parseFloat(input.value))) {
        smiliesDiv.innerText = "please provide a number";
    }
    else {
        const numberOfSmilies = Number(input.value);
        for (let i = 0; i < numberOfSmilies; i++) {
            const smily = document.createElement("span");
            smily.innerText = "smiley";
            smiliesDiv.appendChild(smily);
        }
    }
})