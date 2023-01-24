const startElement = document.getElementsByClassName("start-here")[0];
startElement.innerText = "main title";

const subtitlesList = startElement.nextElementSibling.children[0];

const newSubtitle = document.createElement("li");
newSubtitle.innerText = "sub title 4";
subtitlesList.appendChild(newSubtitle);

const mainList = startElement.parentNode;


mainList.lastElementChild.remove();

document.getElementsByTagName("title")[0].innerText = "Master of the Dom";

const theParagraph = document.querySelector("div p");
theParagraph.innerText = "This is a text of my own";

