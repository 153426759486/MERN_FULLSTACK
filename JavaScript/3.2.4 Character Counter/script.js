const textarea = document.getElementById('message');
const counter = document.getElementById('counter');

textarea.addEventListener('input', () => {
    counter.textContent = textarea.value.length;
});