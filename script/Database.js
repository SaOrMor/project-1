"use strict";




class Database {
    // method to get users array from localStorage
getAllUsers() {
   const usersStr = localStorage.getItem("users");
   const usersArr = JSON.parse( userStr);

   if (usersStr === null) {
       return [];
   } else {
    return usersArr;
   }
}
   
   saveNewUser (newUser) {
       // get the array of users saved in the local storage
        const usersArr = this.getAllUsers();

        // update the users array and add the new user to it
        const updatedUsersArr = [...usersArr, newUser];

        // save back the updated users array to localStorage
        const updatedUsersStr = Json.stringify ( updatedUsersArr );
        localStorage.setItem("users", updatedUsersStr );
   }
}
    // method to save a user into the localStorage users array
const db = new Database();