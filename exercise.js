// get body element
let body = document.querySelector("body");

// creating paragraph elemetn and adding to body
let paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red";

body.appendChild(paragraph);

// header 3
let h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3";

body.appendChild(h3);

// div
let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");

div.appendChild(h1);
div.appendChild(p);

body.appendChild(div);

h1.textContent = "I'm in a div";
p.textContent = "ME TOO!";

