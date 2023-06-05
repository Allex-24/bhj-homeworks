const signinForm = document.getElementById('signin__form');
const welcomeBlock = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');

signinForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const formData = new FormData(signinForm);

	const xhr = new XMLHttpRequest();

	xhr.onload = function () {
		if (xhr.status >= 200 && xhr.status < 300) {
			const data = JSON.parse(xhr.responseText);
			if (data.success) {
				const userId = data.user_id;
				localStorage.setItem('user_id', userId);
				welcomeBlock.classList.add('welcome_active');
				userIdSpan.textContent = userId;
			} else {
				alert('Неверный логин/пароль');
			}
		} else {
			alert('Ошибка при авторизации');
		}
	};

	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);

	xhr.send(formData);
});

window.addEventListener('load', () => {
	const userId = localStorage.getItem('user_id');
	if (userId) {
		welcomeBlock.classList.add('welcome_active');
		userIdSpan.textContent = userId;
	}
});
