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

