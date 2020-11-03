"use strict";


class Signup {
    constructor() {
        //store all of the input elements
        this.emailInput = document.querySelector('#email');
        this.passwordInput = document.querySelector('#password');
        this.repeatPasswordinput = document.querySelector('#repeatPassword');
        this.buttonInput = document.querySelector('#signup-button');
        this.errorWrapper = document.querySelector('.message-container');
    }
// handle the email
handleEmailInput = (event) => {
    const emailInput = event.target;
    const email = emailInput.value;

   validator.validateValidEmail(email);
   validator.validateUniqueEmail(email);

   this.setErrorMessages();
}

// handle the password input

handlePasswordInput = (event) => {
    const passwordInput = event.target;
    const repeatPasswordInput = this.repeatPasswordInput;
    
    const password = passwordInput.value;
    const repeatPassword = repeatPasswordInput.value;


   validator.validatePassword(password);
   validator.validateRepeatPassoword(password, validateRepeatPassoword);

   this.setErrorMessages();
}

// password confirmation
handleReapPasswordInput = (event) => {
    const repPasswordInput = event.target;
    const repPassword = repPasswordInput.value;

    validator.validatePassword(password);
    validator.validateRepeatPassoword(password);

    this.setErrorMessages();
}

setErrorMessages = () => {

    this.errorsWrapper.innerHTML = "";

    const errorsObj = validator.getErrors();
    console.log(errorsObj);
    const errorsStringsArr = Object.values(  errorsObj );
    errorsStringsArr.forEach( (str)  ) => {
        const p = document.createElement('p');
        p.textContent = str;

        this.errorWrapper.appendChild(p);
    })
};

saveData = (event) => {

    // prevent the default behaviour of the form submit button
    // which reloads the page

    event.preventDefault();
    // get the value from all of the inputs
    const saveEmail = this.emailInput.value;
    const savePassword = this.passwordInput.value;
    const repeatPass = this.repeatPasswordinput.value;

    // create new user
    //const newUser = {
    //    email: email,
    //    password: password
    //};

    const newUser = new user(email, password)

    console.log("newUser", newUser);

    // save the user in the database



    //empty the form
    this.emailInput.value = "";
    this.passwordInput.value = "";
}


addListeners =() => {
    this.emailInput.addEventListener('input', this.handleEmailInput);
    this.passwordInput.addEventListener('input', this.handlePasswordInput);
    this.repeatPasswordinput.addEventListener('input', this.handleReapPasswordInput);
    this.buttonInput.addEventListener('click', this.saveData);
}

}
// create an instance of the signup (object)
const signup = new Signup();

// add event listeners once the page and all the resources are loaded.
window.addEventListener('load', signup.addListeners );
