
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', function() {
menu.classList.toggle('show');
menuButton.classList.toggle('close');
});

var openModalBtns = document.querySelectorAll('.open-modal');
var closeModalBtns = document.querySelectorAll('.close-modal');
var modals = document.querySelectorAll('.modal');

openModalBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var modalId = this.getAttribute('data-modal-id');
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
  });
});

closeModalBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var modal = this.closest('.modal');
    modal.style.display = 'none';
  });
});

window.addEventListener('click', function (event) {
  modals.forEach(function (modal) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

const carousel = document.querySelector('.carousel');
const nextBtn = document.querySelector('.carousel-next-btn');
const carouselItems = document.querySelectorAll('.carousel-item');

let idx = 0;

function carrousel() {
  idx++;

  if (idx >= carouselItems.length) {
    idx = 0;
  }

  carousel.style.transform = `translateX * 330px)`;
}

setInterval(carrousel, 1800);
