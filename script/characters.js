"use strict";
function getCharacters() {
  const prove = document.querySelector(".characters-list");
  fetch("https://www.anapioficeandfire.com/api/characters")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((character) => {
        const createDiv = document.createElement("div");
        createDiv.innerHTML = `
    <p>${character.culture}</p>
    <p>${character.aliases[0]}</p>
    `;
        prove.appendChild(createDiv);
      });

      console.log(data);
    })
    .catch((error) => {});
}
