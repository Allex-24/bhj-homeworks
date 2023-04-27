const cookie = document.getElementById("cookie");
const clickCounter = document.getElementById("clicker__counter");
const clickSpeed = document.createElement("div");

let clickNumber = 0;
let lastClickTime = new Date();

clickSpeed.textContent = "Скорость клика 0";
clickCounter.parentNode.insertBefore(clickSpeed, clickCounter.nextSibling);

cookie.onclick = function () {
	clickNumber++;

	cookie.width === 200 ? (cookie.width = 150, cookie.height = 150) : (cookie.width = 200, cookie.height = 200);

	clickCounter.textContent = clickNumber

	const timeSinceLastClick = new Date() - lastClickTime;
	const clickRate = timeSinceLastClick > 0 ? 1000 / timeSinceLastClick : 0;
	clickSpeed.textContent = `Скорость клика: ${clickRate.toFixed(2)}`;

	clickCounter.textContent = clickNumber;
	lastClickTime = new Date();
};
