const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
    if (input.value === '') {
        output.textContent = 'Anonymous'
    }
    output.textContent = input.value;
})