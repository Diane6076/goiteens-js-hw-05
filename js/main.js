// 1#
const backdrop = document.querySelector('backdrop');
const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const body = document.querySelector('body');

openModalBtn.addEventListener('click', () => {
 body.classList.add('show-modal');
});

closeModalBtn.addEventListener('click', () => {
    body.classList.remove('show-modal');
});

backdrop.addEventListener('click', () => {
    body.classList.remove('show-modal');
});
   

// 2#
const color = document.querySelector('.color');
// const red = document.querySelector('.red');
// const white = document.querySelector('.white');
// const green = document.querySelector('.green');

color.addEventListener('color', () => {
    document.body.style.backgroundColor = 'color';
});
// red.addEventListener('red', () => {
//     document.body.style.backgroundColor = 'red';
// });
// white.addEventListener('white', () => {
//     document.body.style.backgroundColor = 'pink';
// });
// green.addEventListener('green', () => {
//     document.body.style.backgroundColor = 'yellow';
// });

  // 3#

  //4#


  
  // 5#
