const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
const featureImg = document.querySelectorAll('.design-block__img');
const title = document.querySelector('title');
const designTitles = document.querySelectorAll('.design__title');


const changeContent = (array, value) => {
	array.forEach((elem) => {
		if (elem.dataset.tabsField === value) {
			elem.classList.remove('hidden');
		} else {
			elem.classList.add('hidden');
		}
	});
}

tabButtons.forEach((tabButton, index) => {
	tabButton.addEventListener('click', (event) => {
		const dataValue = tabButton.dataset.tabsHandler;

		title.innerText = tabButton.innerText;

		changeContent(tabDescriptions, dataValue);
		changeContent(tabImages, dataValue);
		changeContent(featureImg, dataValue);
		changeContent(designTitles, dataValue);

		tabButtons.forEach((btn) => {
			if (btn === event.target) {
				btn.classList.add('design-list__item_active');
			} else {
				btn.classList.remove('design-list__item_active');
			}
		});
	});
});
