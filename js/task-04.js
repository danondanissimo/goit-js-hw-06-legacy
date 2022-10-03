const buttonIncrement = document.querySelector(
    "#counter button[data-action = 'increment']",
);

const buttonDecrement = document.querySelector(
    "#counter button[data-action = 'decrement']",
);

const counter = document.querySelector('#counter #value');


let counterValue = +counter.textContent;

buttonDecrement.addEventListener('click', () => {
    counterValue -= 1;
    counter.textContent = counterValue;
})


buttonIncrement.addEventListener('click', () => {
    counterValue += 1;
    counter.textContent = counterValue;
})

