const editor = document.getElementById('editor');

window.addEventListener('load', () => {
	const savedValue = localStorage.getItem('editorValue');
	editor.value = savedValu;
});

editor.addEventListener('input', () => {
	localStorage.setItem('editorValue', editor.value);
});
