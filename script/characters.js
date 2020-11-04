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
     <a href= "https://awoiaf.westeros.org/index.php/${data.name}"
        <p>Name: ${data.name}</p> </a>
      <p>Culture: ${data.culture}</p>
      <p>Gender: ${data.gender}</p>
      <p>Aliases: ${data.aliases}</p>
      <p>Tv series: ${data.tvSeries}</p>
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
