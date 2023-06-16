const button = document.getElementById("btn1");
const body = document.querySelector("body");
const color = ["red", "green", "blue", "yellow", "pink", "purple", "orange"];

body.style.backgroundColor = "violet";

// button.addEventListener('click',changeB)
// we can direct give onClick command to button by direct use addEventlistner like this

function changeB() {
  const colorIndex = parseInt(Math.random() * color.length);
  body.style.backgroundColor = color[colorIndex];
}
