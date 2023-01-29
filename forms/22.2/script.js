const checkBox = document.getElementById("myCheck");
const label = document.getElementsByTagName("label")[0];
showImage();
checkBox.addEventListener("change", showImage);

function showImage() {
  const img = document.getElementById("pearImg");
  if (checkBox.checked == true){
    img.classList.remove("disapear");
    label.innerText = "this a pear";
  } else {
    label.innerText = "dis a pear";
    img.classList.add("disapear");
  }
}
