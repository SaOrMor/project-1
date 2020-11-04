"use strict";

class Login {
  constructor() {
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.messageContainer = document.querySelector(".message-container");
    this.loginButton = document.querySelector("#login-button");
  }

  // handle the login (when user clicks the Login button)
  handleSubmit = (event) => {
    // prevent the reload of the page ( form subit button reloads the page)
    event.preventDefault();

    // get the values from the inputs
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    // Get the users from db (localStorage)
    const users = db.getAllUsers();

    // Check the password and email exist in the db (localStorage) -
    // arr.find() - returns the first element that matches the experssion

    const user = users.find(function (userObj) {
      if (userObj.email === email && userObj.password === password) {
        return true;
      }
    });

    // empty the container so that the messages don't add up
    this.messageContainer.innerHTML = "";
    const p = document.createElement("p");

    // set the message
    if (!user) {
      p.textContent = "Email or password are incorrect!";
    } else {
      p.textContent = `Hello ${user.name}!`;
      p.classList.add("correct-message");
      // Redirect to the Homepage
      this.redirect();
    }

    this.messageContainer.appendChild(p);
  };

  redirect = () => {
    setTimeout(() => location.assign("homepage.html"), 2000);

    // setTimeout( () => location.assign("dashboard.html"), 2000)
  };
}
