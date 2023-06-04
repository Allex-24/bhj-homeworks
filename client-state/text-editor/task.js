const editor = document.getElementById('editor');

window.addEventListener('load', () => {
	const savedValue = localStorage.getItem('editorValue');

	if(savedValue) {
		editor.value = savedValue;
	}
});


editor.addEventListener('input', () => {
	const value = editor.value;

	localStorage.setItem('editorValue', value);
});
