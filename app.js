let colors = ["red", "green", "blue"];
let borders = ["green-b", "blue-b", "red-b"];


let label = document.createElement("p");
label.setAttribute("id", "label");
label.innerHTML = "Move to corrent area."
document.body.appendChild(label)

let container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

let mainDiv1 = document.createElement("div");
mainDiv1.setAttribute("class", "mainDiv1");
container.appendChild(mainDiv1);

for (let i = 0; i < 3; i++) {
  let div = document.createElement("div");
  div.setAttribute("class", `${colors[i]}`);
  div.setAttribute("draggable", "true");
  mainDiv1.appendChild(div);
}

let mainDiv2 = document.createElement("div");
mainDiv2.setAttribute("class", "mainDiv2");
container.appendChild(mainDiv2);

for (let i = 0; i < 3; i++) {
  let div = document.createElement("div");
  div.setAttribute("class", `${borders[i]}`);

  mainDiv2.appendChild(div);
}

let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let newGreen = document.querySelector(".green-b");
let newBlue = document.querySelector(".blue-b");
let newRed = document.querySelector(".red-b");
let arr = [red, green, blue];
let array = [newGreen, newBlue, newRed];

for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener("dragstart", dragStart);
  arr[i].addEventListener("dragover", dragOver);
}
for (let i = 0; i < array.length; i++) {
  array[i].addEventListener("dragover", dragOver);
  array[i].addEventListener("drop", drop);
}

let elem;
let className;

function dragStart(e) {
  elem = e.target;
  className = elem.className;
}

function dragOver(event) {
  event.preventDefault();
}

let newElem;
let newClassName;

function drop(event) {
  newElem = event.target;
  newClassName = event.target.className.split("-").slice(0, 1).toString();
  if (newClassName == className) {
    let newDiv = document.createElement("div");
    let classs = event.target.className;
    newDiv.setAttribute("class", `${classs}`);
    elem.parentNode.insertBefore(newDiv, elem);
    newElem.parentNode.replaceChild(elem, newElem);
  }
}
