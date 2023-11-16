// step 1: add click event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2: get the email address inside the email input
    // input field theke text paite .value use korte hobe
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
    //    step 3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //danger: do not verify email password on the client side
    // step 4: verify email password
    if (email === 'jerin@islam.com' && password === 'secret') {
        console.log('valid user');
    } else {
        console.log('invalid user');
    }
})