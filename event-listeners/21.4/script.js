let isOn = false;

function toggleLight() {
    let lightbulb = document.getElementById("lightbulb");
    if (isOn) {
        lightbulb.src = "./pic_bulboff.gif";
        isOn = false;
    } else {
        lightbulb.src = "./pic_bulbon.gif";
        isOn = true;
    }
}
