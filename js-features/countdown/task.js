// Получение элементов страницы разметки
const timerElement = document.getElementById("timer");
const statusElement = document.getElementById("status");


// Получение стартового значения таймера
let timer = parseInt(timerElement.innerText);


// Преобразование времени в формат hh:mm:ss
function formatTime(timeInSeconds) {
	let hours = Math.floor(timeInSeconds / 3600);
	let minutes = Math.floor((timeInSeconds % 3600) / 60);
	let seconds = timeInSeconds % 60;

	return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}


// Уменьшение значения таймера каждую секунду
let countDown = setInterval(function() {
	timer--;
	timerElement.innerText = formatTime(timer);

	if (timer <= 0) {
		clearInterval(countDown);
		statusElement.innerHTML = "Вы победили в конкурсе!";
		alert("Вы победили в конкурсе!");
	}
}, 1000);
