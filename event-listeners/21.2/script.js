const htmlElement = document.getElementsByTagName("html")[0];
let baseFontSize = getComputedStyle(htmlElement).getPropertyValue("font-size");
const fontLabel = document.getElementById("span-font-size");
fontLabel.innerHTML = baseFontSize;

htmlElement.style.fontSize = baseFontSize;

const increaseButton = document.getElementById("increase-font-size");
const decreaseButton = document.getElementById("decrese-font-size");

increaseButton.addEventListener("click" , () => {
    fontSize = Number(baseFontSize.slice(0 , baseFontSize.length-2));
    if(fontSize<100){
        fontSize++;
    }
    htmlElement.style.fontSize = fontSize +"px";
    baseFontSize = htmlElement.style.fontSize;
    fontLabel.innerHTML = baseFontSize; 
});

decreaseButton.addEventListener("click" , () => {
    fontSize = Number(baseFontSize.slice(0 , baseFontSize.length-2));
    if(fontSize>6){
        fontSize--;
    }
    htmlElement.style.fontSize = fontSize +"px";
    baseFontSize = htmlElement.style.fontSize;
    fontLabel.innerHTML = baseFontSize;
})