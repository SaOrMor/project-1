"use strict";
function getHouses() {
  const selectHouses = document.querySelector(".Houses-list");
  const randomHouse = Math.floor(Math.random() * 445) + 1;
  selectHouses.innerHTML = " ";
  fetch(`https://www.anapioficeandfire.com/api/houses/${randomHouse}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.name !== "" && data.region !== "") {
        const div = document.createElement("div");
        div.innerHTML = `
        <a href= "https://awoiaf.westeros.org/index.php/${data.name}"
        <p>Name: ${data.name}</p> </a>
        <p>Region: ${data.region}</p>
        <p>Coat of Arms: ${data.coatOfArms}</p>
        <p>Words: ${data.words}</p>
        <p>titles: ${data.titles}</p>
        `;
        selectHouses.appendChild(div);
      } else {
        getHouses();
      }

      console.log(data);
    })

    .catch((error) => {
      console.log("Error");
    });
}

function getBooks() {
  const selectBooks = document.querySelector(".Books-list");
  selectBooks.innerHTML = " ";
  const randomBook = Math.floor(Math.random() * 13) + 1;
  fetch(`https://www.anapioficeandfire.com/api/books/${randomBook}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const div = document.createElement("div");
      div.innerHTML = `
      <a href="https://awoiaf.westeros.org/index.php/${data.name}"
 <p> Title: ${data.name}</p> </a>
 <p> Author: ${data.authors}</p>
 <p> Pages: ${data.numberOfPages}</p>
 <p> Publisher: ${data.publisher}</p>
 <p> Country: ${data.country}</p>
 <p> Release date: ${data.released}</p>
 `;
      selectBooks.appendChild(div);
    })
    .catch((error) => {
      console.log("Error");
    });
}
