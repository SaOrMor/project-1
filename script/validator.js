"use strict";

// validation
// manage the errors to be shown to the user



// email:
// email syntax (@, .com)
// call to db to check if email is available



// password:
// length of the password
// if the password and repeat-password are matching

class Validator {
    constructor() {
// predetermined error messages
this.invalidEmailError = "Enter a valid email address";
this.emailExistsError = "The entered email address is already taken"
this.passwordError = "Passwrd must me at least 6 characters long"
this.repeatPasswordError = "Password and repeat pasword must match!"

// object with all the current errors that are shown to the user
this.errors = {
invalidEmailError: this.invalidEmailError,
passwordError: this.passwordError,
repeatPasswordError: this.repeatPasswordError,
emailExistsError: this.emailExistsError
}
    }
// validate if email is taken and if syntax is valid
    validateValidEmail =(email) => {
// is email syntax valid
/

    if (  emailIsValid(email)  ) {
        delete this.errors.invalidEmailError;
    } else {
        this.errors.invalidEmailError = this.invalidEmailError;
    }
    }

    emailSyntaxIsValid = () => {
        const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        
        const emailIsValid = emailRegEx.test(email);
        return emailIsValid;
    }

validateUniqueEmail = (email) => {
    const users = db.getAllUsers();

    let emailUnique = true;

    users.forEach( (userObj) ) => {
        if (userObj.email === email) {
            emailunique = false
        }
    });
// if email is unique (not taken) - remove the error message
if (emailUnique) {
    delete this.errors.emailExistsError
} else {
    this.errors.emailExistsError = this.emailExistsError;
}
}


// validate the pasword length
validatePassword = (password) => {
if (password.length >= 6) {
    delete this.errors.passwordError;
} else {
    this.errors.passwordError = this.passwordError;
}
};

// validate if password and repeat-password are matching
validateRepeatPassoword = (password, repeatPassword) => {
    if (password === repeatPassword) {
        delete this.errors.repeatPasswordError;
    } else {
        this.errors.repeatPasswordError = this.repeatPasswordError;
    }
}

// get the errors to show them to the user on the sign up page
getError = () => {
    return this.errors;
};

}

const validator = new Validator();









