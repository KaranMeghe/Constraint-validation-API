const form = document.querySelector('form');
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', (event) =>{
    // each time user types something, we check input is correct or not
    if(email.validity.valid){
        // in case there is an error message visible, if the field is valid, we remove the error message.
        emailError.textContent = ''; // Restet content of the message
        emailError.className = 'error'; // Reset the visual state of the message
    }  else{
        // If there is still error , show correct error
        showError();
    }
});

form.addEventListener('submit',(event) =>{
    // if the email field is valid, we let the form submit
    if(!email.validity.valid){
        showError(); //show error message

        // Then we prevent the form from being sent by canceling the evwnt
        event.preventDefault();
    }
})

function showError(){
if(email.validity.valueMissing){
    // if the field is empty, display the following error message
    emailError.textContent = 'You need to enter an email address';
} else if (email.validity.typeMismatch){
    // if the field dosent contain an email address, display the folowing error msg.
    emailError.textContent = 'Entered value should be in email format';
} else if(email.validity.tooShort){
    // if the data is too short, display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you enterd ${email.value.minLength}`;
}

emailError.className = 'error active';
}