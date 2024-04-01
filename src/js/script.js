const headerBurgerElement = document.getElementById('burger');
const burgerElement = document.getElementById('burger-line');
const navMenu = document.getElementById('menu');
const buttonUpElement = document.getElementById('buttonUp');
const logoElement = document.getElementById('logo');
const titleMenuElement = document.getElementById('titleMenu');

// открытие/закрытие меню header
headerBurgerElement.addEventListener("click", () => {
	navMenu.classList.toggle('active');
	burgerElement.classList.toggle('active');
	logoElement.classList.toggle('active');
	titleMenuElement.classList.toggle('active');
});


navMenu.addEventListener("click", () => {
	navMenu.classList.remove('active');
	burgerElement.classList.remove('active');
	logoElement.classList.remove('active');
	titleMenuElement.classList.remove('active');
});


// перемотка на верх страницы
buttonUpElement.addEventListener("click", () => window.scrollTo({
	top: 0,
	behavior: 'smooth',
}))
// для прокрутки можно было бы использовать scrollIntoView()


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

// табы
document.addEventListener("DOMContentLoaded", function () {
	const tabsContainer = document.querySelector('.tabs__buttons');
	tabsContainer.addEventListener('click', function (event) {
		const targetTab = event.target.closest('.tabs__btnBox');
		if (!targetTab) return;

		const tabs = tabsContainer.querySelectorAll('.tabs__btnBox');
		tabs.forEach(tab => tab.classList.remove('active'));
		targetTab.classList.add('active');

		const targetIndex = targetTab.getAttribute('data-target');
		const targetContent = document.querySelectorAll('.tabs__block')[targetIndex];
		const allTabsContent = document.querySelectorAll('.tabs__block');
		allTabsContent.forEach(content => content.classList.remove('active'));
		targetContent.classList.add('active');
	});
});

// спойлеры
const answers = document.querySelectorAll('.faq__item');
const buttons = document.querySelectorAll('.faq__button');

buttons.forEach(function (button, index) {
	button.addEventListener('click', function () {
		// Закрываем все спойлеры, кроме текущего
		answers.forEach(function (answer, i) {
			if (i !== index) {
				answer.classList.remove('active');
			}
		});
		// Переключаем состояние текущего спойлера
		const currentAnswer = answers[index];
		currentAnswer.classList.toggle('active');
	});
});
