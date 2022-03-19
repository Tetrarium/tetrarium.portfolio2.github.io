const burger = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');
const menuList = document.querySelectorAll('.menu-list__item');

burger.addEventListener('click', () => {
	menu.classList.toggle('menu-active');
})

menuList.forEach((elem) => {
	elem.addEventListener('click', () => {
		menu.classList.remove('menu-active');
	});
});

document.addEventListener('click', (event) => {
	if (event.target.closest('.menu') || event.target.closest('.humburger-menu')) return;
	menu.classList.remove('menu-active');
});