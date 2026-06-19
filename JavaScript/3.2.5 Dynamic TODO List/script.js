const input = document.getElementById('task');
const list = document.getElementById('list');

document.getElementById('addBtn')
.addEventListener('click', () => {

    const li = document.createElement('li');
    li.textContent = input.value;

    list.appendChild(li);

    input.value = '';
});

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});