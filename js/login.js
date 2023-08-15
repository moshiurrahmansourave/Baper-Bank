// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3:get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element

    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
    
    //DANGER: DO NOT VERIFY email password on the clint side
    // step-4: verify email and password

    if(email === 'moshiur@gmail.com' && password === 'moshiur'){
        window.location.href = 'bank.html';
    }
    else{
       alert('toke ami teijjo sontant ghosona korlam tui pass vule gesos')
    }
})