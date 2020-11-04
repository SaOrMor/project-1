"use strict";

class Database {
  // method to get users array from localStorage
  getAllUsers() {
    const userStr = localStorage.getItem("users");
    const userArr = JSON.parse(userStr);

    if (userStr === null) {
      return [];
    } else {
      return userArr;
    }
  }

  saveNewUser(newUser) {
    // get the array of users saved in the local storage
    const userArr = this.getAllUsers();
    console.log(newUser);

    // update the users array and add the new user to it
    const updatedUserArr = [...userArr, newUser];

    // save back the updated users array to localStorage
    const updatedUserStr = JSON.stringify(updatedUserArr);
    localStorage.setItem("users", updatedUserStr);
  }
}
// method to save a user into the localStorage users array
const db = new Database();
