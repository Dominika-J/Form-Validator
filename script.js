const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const showError = (input, message) => {
    const formStyling = input.parentElement;
    formStyling.className = 'form-styling error';
    const small = formStyling.querySelector('small');
    small.innerText = message;
}

const showSuccess = () => {

}

const fields = [username, email, password, password2];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    fields.forEach(field => {
        switch (field.name) {
            case 'username':
            case 'email': 

            

            case 'password':
            case 'password2':
            validateFilled(field);
            break;
            
        }

    })
    
})
const validateFilled = (fieldElement) => {
    if(fieldElement.value === '') {
        showError (fieldElement, `${fieldElement.name} je požadováno`);
    } else {
        showSuccess(fieldElement);
    }
}
    
cons validateEmail = (fieldElement) => {
    if (fieldElement.value === '') {

    }
} 