const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  nav.classList.toggle('active');
}

const linkedinIcon = document.querySelector('.bxl-linkedin-square');

linkedinIcon.addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/nathan-chung-257663309/', '_blank');
});

const githubIcon = document.querySelector('.bxl-github');

githubIcon.addEventListener('click', () => {
  window.open('https://github.com/nchung01', '_blank');
});

