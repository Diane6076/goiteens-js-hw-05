// 1#
const backdrop = document.querySelector(".backdrop");
const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const body = document.querySelector("body");

openModalBtn.addEventListener("click", () => {
  body.classList.add("show-modal");
});

closeModalBtn.addEventListener("click", () => {
  body.classList.remove("show-modal");
});

backdrop.addEventListener("click", () => {
  body.classList.remove("show-modal");
});

// 2#
// const color = document.querySelector('.color');
const red = document.querySelector(".red");
const white = document.querySelector(".white");
const green = document.querySelector(".green");

console.log(red);
red.addEventListener("change", () => {
  body.style.backgroundColor = "red";
});
white.addEventListener("change", () => {
  document.body.style.backgroundColor = "white";
});
green.addEventListener("change", () => {
  document.body.style.backgroundColor = "green";
});

//4#

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  if (input.value === "") {
    output.textContent = "незнайомець";
  } else {
    output.textContent = input.value;
  }
});

// 5#
 const fontSizeControl = document.querySelector('#font-size-control')
 const text = document.querySelector('#text')

fontSizeControl.addEventListener('input',  handlSizeText);
function  handlSizeText() {
    text.style.fontSize = fontSizeControl.value+'px';
    
}
