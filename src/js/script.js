const headerBurgerElement = document.getElementById('burger');
const burgerElement = document.getElementById('burger-line');
const navMenu = document.getElementById('menu');
const buttonUpElement = document.getElementById('buttonUp');
const logoElement = document.getElementById('logo');
const titleMenuElement = document.getElementById('titleMenu');

// открытие/закрытие меню
headerBurgerElement.addEventListener("click", () => {
	navMenu.classList.toggle('active');
	burgerElement.classList.toggle('active');
	logoElement.classList.toggle('active');
	titleMenuElement.classList.toggle('active');
});

// вернуться наверх плавно
buttonUpElement.addEventListener("click", () => window.scrollTo({
	top: 0,
	behavior: 'smooth',
}))

// слайдер
// const slider = document.querySelector('.slider');
// const slides = document.querySelector('.slides');
// const slideItems = document.querySelectorAll('.slide');
// const slideWidth = slideItems[0].clientWidth;
// const slidesLength = slideItems.length;

// let currentIndex = 0;

// function slideNext() {
// 	currentIndex++;
// 	slides.style.transition = "transform 0.5s ease";
// 	slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

// 	if (currentIndex >= slidesLength - 2) {
// 		slides.addEventListener('transitionend', function () {
// 			if (currentIndex >= slidesLength - 1) {
// 				slides.style.transition = "none";
// 				slides.style.transform = `translateX(0)`;
// 				currentIndex = 0;
// 			}
// 		});
// 	}
// }

// function slidePrev() {
// 	if (currentIndex <= 0) {
// 		slides.style.transition = "none";
// 		slides.style.transform = `translateX(-${slideWidth * (slidesLength - 1)}px)`;
// 		currentIndex = slidesLength - 2;
// 	} else {
// 		currentIndex--;
// 		slides.style.transition = "transform 0.5s ease";
// 		slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
// 	}
// }