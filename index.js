const header = document.createElement("header");
header.className = "header";
const headText = document.createElement("h1");
const nav = ["Home", "Learn More!", "Help", "Content List"];

/* Body styling */

document.body.style.width = "100vw";
document.body.style.height = "100vh";
document.body.style.display = "grid";
document.body.style.gridTemplateRows = "15% 1fr";
document.body.style.gridTemplateColumns = "1fr 50% 1fr";

/* Content */

document.body.append(header);
headText.textContent = "Hello!";
header.appendChild(headText);
const navBar = document.createElement("div");
navBar.className = "navbar";
header.appendChild(navBar);
header.style.gridArea = "1/1/2/4";
header.style.display = "grid";
header.style.gridTemplateRows = "1fr 1fr";
header.style.gridTemplateColumns = "1fr";
header.style.background = "black";
header.style.color = "white";
headText.style.gridArea = "1/1/2/2";
navBar.style.gridArea = "2/1/3/2";
header.style.textAlign = "center";
navBar.style.display = "flex";
navBar.style.width = "100%";

/* Making button */

for (i = 0; i < nav.length; i++) {
  const btn = document.createElement("button");
  btn.textContent = nav[i];
  navBar.appendChild(btn);
  btn.className = "btn";
  btn.style.width = "25%";
  btn.style.borderTop = "0.1em solid grey";
  btn.style.borderBottom = "1em solid black";
  btn.style.backgroundColor = "white";
  btn.style.transition = "500ms ease-in-out";
  btn.addEventListener("mouseover", (event) => {
    btn.style.borderBottom = "0.5em solid black";
    btn.style.borderTop = "0.5em solid black";
  });
  btn.addEventListener("mouseout", (event) => {
    btn.style.borderBottom = "1em solid black";
    btn.style.borderTop = "0.1em solid grey";
  });
}

/* Main body */

const main = document.createElement("main");
main.className = "main";
main.style.gridArea = "2/2/3/3";
document.body.append(main);
const p = document.createElement("p");
p.textContent = "I'm Testing stuff.";
main.appendChild(p);
