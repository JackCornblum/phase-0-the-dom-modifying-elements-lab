// Write your code here!
const main = document.getElementById('main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");
const newContent = "Jack is the champion";
newHeader.innerHTML = newContent;

document.body.appendChild(newHeader, "victory");
