const headerBurgerElement = document.getElementById('burger');
const burgerElement = document.getElementById('burger-line');
const navMenu = document.getElementById('menu');
const buttonUpElement = document.getElementById('buttonUp');
const logoElement = document.getElementById('logo');
const titleMenuElement = document.getElementById('titleMenu');

// =========  burger ========= 
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


// ========= перемотка на верх страницы =========
buttonUpElement.addEventListener("click", () => window.scrollTo({
	top: 0,
	behavior: 'smooth',
}))
// для прокрутки можно было бы использовать scrollIntoView()
// кнопку Наверх можно сделать с помощью ссылки на якорь




// ========= слайдер ==========
window.addEventListener('load', function () {
	const slides = document.querySelectorAll('.slider__item img');
	const sliderBody = document.querySelector('.slider__body');

	let currentSlide = 0;

	// Функция для определения отступа между слайдами
	function calculateMarginRightCard() {
		const firstSlideRect = slides[0].parentNode.getBoundingClientRect();
		const secondSlideRect = slides[1].parentNode.getBoundingClientRect();
		return secondSlideRect.left - (firstSlideRect.left + firstSlideRect.width);
	}
	const marginRightCard = calculateMarginRightCard();

	// добавляем обработчик события клика на кнопки "Next" и "Previous"
	const nextBtn = document.querySelector('.nextBtn');
	const prevBtn = document.querySelector('.prevBtn');
	nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
	prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));

	// Функция для пролистывания слайдов
	function goToSlide(n) {
		slides[currentSlide].parentNode.classList.remove('active');
		currentSlide = (n + slides.length) % slides.length;
		slides[currentSlide].parentNode.classList.add('active');
		// Считаем ширину активного слайда с учетом marginRightCard
		const activeSlideRect = slides[currentSlide].getBoundingClientRect();
		const shiftAmount = currentSlide * (activeSlideRect.width + marginRightCard);
		sliderBody.style.transform = `translateX(-${shiftAmount}px)`;
	}

	// пролистывание слайдера с помощью свайпа
	slides.forEach((slide) => {
		let touchStartX = 0;
		let touchEndX = 0;
		slide.addEventListener('touchstart', (event) => {
			touchStartX = event.touches[0].clientX;
		});
		slide.addEventListener('touchmove', (event) => {
			touchEndX = event.touches[0].clientX;
		});
		slide.addEventListener('touchend', () => {
			const deltaX = touchEndX - touchStartX;
			if (Math.abs(deltaX) > 50) {
				if (deltaX > 0) {
					goToSlide(currentSlide - 1); // Свайп вправо
				} else if (deltaX < 0) {
					goToSlide(currentSlide + 1); // Свайп влево
				}
			}
		});
	});
});

// ============= Модальное окно для слайдера ============= 
const sliderItems = document.querySelectorAll('.slider__item');
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modalImg');

// Добавляем обработчик события клика на каждый элемент слайдера
sliderItems.forEach(item => {
	item.addEventListener('click', function () {
		modalImg.src = item.querySelector('img').src;
		modal.style.display = 'block';
	});
});

// Функция для пролистывания слайдов
function plusSlides(n) {
	// Получаем текущее отображаемое изображение в модальном окне
	let currentIndex = Array.from(sliderItems).findIndex(item => item.classList.contains('active'));
	let nextIndex = currentIndex + n;
	// Проверяем, чтобы индекс не выходил за границы массива слайдов
	if (nextIndex >= sliderItems.length) {
		nextIndex = 0;
	} else if (nextIndex < 0) {
		nextIndex = sliderItems.length - 1;
	}
	const nextSlide = sliderItems[nextIndex];
	const imgElement = nextSlide.querySelector('img');
	modalImg.src = imgElement.src;
	sliderItems[currentIndex].classList.remove('active');
	nextSlide.classList.add('active');
}

// Добавляем обработчик события клика на кнопку закрытия модального окна
const modalCloseBtn = document.querySelector('.modal__closeBtn');
modalCloseBtn.addEventListener('click', function () {
	modal.style.display = 'none';
});




















// ========= табы =========
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

// ========= спойлеры =========
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
