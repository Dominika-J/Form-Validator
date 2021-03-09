const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const showError = (input, message) => {
    const formStyling = input.parentElement; //div
    formStyling.className = 'form-styling error';
    const small = formStyling.querySelector('small');
    small.innerText = message;
}

const showSuccess = (input) => {
    const formStyling = input.parentElement; //div
    formStyling.className = 'form-styling success';

}

const emailIsValid = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Napis jmeno');
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Napis email');
    } else {
        showSuccess(email);
    }
});

