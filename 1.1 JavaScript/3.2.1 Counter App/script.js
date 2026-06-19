const countEl = document.getElementById('count');
let count = 0;

document.getElementById('inc').addEventListener('click', () => {
    countEl.textContent = ++count;
});

document.getElementById('dec').addEventListener('click', () => {
    countEl.textContent = --count;
});