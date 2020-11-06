"use strict";
function getCharacters() {
  const prove = document.querySelector(".characters-list");
  const randomChar = Math.floor(Math.random() * 2131) + 1;
  prove.innerHTML = " ";
  fetch(`https://www.anapioficeandfire.com/api/characters/${randomChar}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      // data.forEach((character) => {
      if (data.name !== "" && data.culture !== "") {
        const div = document.createElement("div");
        div.innerHTML = `
     
        <div class= "alert alert-secondary"><a href= "https://awoiaf.westeros.org/index.php/${data.name}"> Name: ${data.name}</a></div> 
  
      <p class= "alert alert-success">Culture: ${data.culture}</p>
      <p class= "alert alert-danger">Gender: ${data.gender}</p>
      <p class= "alert alert-warning">Aliases: ${data.aliases}</p>
      <p class= "alert alert-dark">Tv series: ${data.tvSeries}</p>
      `;
        prove.appendChild(div);
      } else {
        getCharacters();
      }

      // });

      console.log(data);
    })
    .catch((error) => {});
}
