const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('password-check');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInput();
})
const checkInput = () =>{
    // Get all inputs 

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const pwdValue = password.value.trim();
    const pwdCheckValue = passwordCheck.value.trim();
    let message = '';
    if(usernameValue == ''){
        message = 'Username cannot be blank';
        setErrorFor(username,message);
    }else{
        setSuccessFor(username);
    }
    if(emailValue == ''){
        message = 'Email cannot be blank';
        setErrorFor(email,message);
    }else{
        setSuccessFor(email);
    }
    if(pwdValue == ''){
        message = 'Please provide a valid password';
        setErrorFor(password,message);
    }else{
        setSuccessFor(password);
    }
    if(pwdCheckValue == ''){
        message = 'Please confirm password';
        setErrorFor(passwordCheck,message);
    }else{
        setSuccessFor(passwordCheck);
    }
    if(pwdValue!==pwdCheckValue){
        message = 'Sorry,The passwords do not match'
        setErrorFor(passwordCheck,message);
    }
}

const setErrorFor = (input,msg) =>{
    let formControl = input.parentElement; // form control
    const small = formControl.querySelector('small');

    // adding error message inside small tag 
    small.innerText = msg;
    // adding error class
    formControl.className = 'form-control error';
}

const setSuccessFor = (input) =>{
    let formControl = input.parentElement;
    formControl.className = 'form-control success';
}