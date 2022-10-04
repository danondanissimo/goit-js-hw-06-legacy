const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formEls = event.currentTarget.elements;

    const email = formEls.email.value;
    const password = formEls.password.value;
    const loginData = {email, password};
    
    if (email === "" || password === "") {
        alert('Поля должны быть заполнены!')
    } else {
        console.log(loginData);
        event.currentTarget.reset();
    };
  
});

