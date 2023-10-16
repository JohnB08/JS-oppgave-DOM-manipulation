const header = document.createElement("header");
header.className = "header";
const headText = document.createElement("h1");
const nav = ["Home", "Learn More!", "Help", "Content List"];

/* Body styling */

document.body.style.width = "100vw";
document.body.style.height = "100vh";
document.body.style.display = "grid";
document.body.style.gridTemplateRows = "20% 1fr";
document.body.style.gridTemplateColumns = "1fr 75% 1fr";
document.body.style.background = "blue";

/* Header + navbar */

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
header.style.background = "green";
header.style.color = "white";
header.style.padding = "1em 0";
headText.style.gridArea = "1/1/2/2";
navBar.style.gridArea = "2/1/3/2";
header.style.textAlign = "center";
navBar.style.display = "flex";
navBar.style.width = "100%";

/* Navbar button */

for (i = 0; i < nav.length; i++) {
  const btn = document.createElement("button");
  btn.textContent = nav[i];
  navBar.appendChild(btn);
  btn.className = "btn";
  btn.style.borderTop = "0.1em solid grey";
  btn.style.borderBottom = "0.65em solid black";
  btn.style.borderRadius = "2em";
  btn.style.backgroundColor = "white";
  btn.style.width = "100%";
  btn.style.cursor = "pointer";
  btn.style.transition = "250ms ease-in-out";
  btn.addEventListener("mouseover", (event) => {
    btn.style.borderBottom = "0.35em solid black";
    btn.style.borderTop = "0.3em solid black";
  });
  btn.addEventListener("mouseout", (event) => {
    btn.style.borderBottom = "0.65em solid black";
    btn.style.borderTop = "0.1em solid grey";
  });
}

/* Main body */

const main = document.createElement("main");
main.className = "main";
main.style.background = "white";
main.style.textAlign = "center";
main.style.gridArea = "2/2/3/3";
document.body.append(main);
const p = document.createElement("p");
p.textContent = "I'm Testing stuff.";
main.appendChild(p);
const img = document.createElement("div");
img.style.width = "100%";
img.innerHTML =
  '<img src="./img/forest_trees_autumn.jpg" alt="Autumn trees!" style="width: 100%">';
main.appendChild(img);
function smallScreen(width) {
  if (width.matches) {
    document.body.style.gridTemplateColumns = "1fr 75% 0fr";
    navBar.style.flexDirection = "column";
    header.style.gridArea = "1/1/3/2";
    main.style.gridArea = "1/2/3/3";
    headText.style.gridArea = "1/1/2/2";
    navBar.style.gridArea = "2/1/3/2";
    header.style.gridTemplateRows = "10% 1fr";
    header.style.gridTemplateColumns = "1fr";
  } else {
    document.body.style.gridTemplateColumns = "1fr 75% 1fr";
    navBar.style.flexDirection = "row";
    header.style.gridArea = "1/1/2/4";
    main.style.gridArea = "2/2/3/3";
    headText.style.gridArea = "1/1/2/2";
    navBar.style.gridArea = "2/1/3/2";
    header.style.gridTemplateRows = "1fr 1fr";
    header.style.gridTemplateColumns = "1fr";
  }
}
let width = window.matchMedia("(max-width: 600px)");
smallScreen(width);
window.addEventListener("resize ", () => {
  smallScreen(width);
});
