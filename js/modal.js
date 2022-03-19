const modalButtons = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.overlay');
const close = modal.querySelector('.modal__close');

const openModal = () => {
	modal.classList.remove('hidden');
}

modalButtons.forEach(btn => {
	btn.addEventListener('click', openModal);
});

overlay.addEventListener('click', () => {
	modal.classList.add('hidden');
});

close.addEventListener('click', () => {
	modal.classList.add('hidden');
});