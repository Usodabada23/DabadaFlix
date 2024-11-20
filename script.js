import { collection } from "./collection.js";

const currentSection = document.querySelector(".movies-container");

for (let item of collection) {
  const card = document.createElement("div");
  card.classList.add("movies-container__card");

  /*const a = document.createElement('a');
    a.href = item["more"];
    a.classList.add("movies-container__card--img");*/

  const img = document.createElement("img");
  img.classList.add("movies-container__card--img");
  img.src = item["picture"];
  img.alt = item["name"];
  //a.appendChild(img)
  img.addEventListener("click", () => {
    window.open(item["more"], "_blank");
  });
  const year = document.createTextNode(item["releaseYear"]);
  const yearCanva = document.createElement("h5");
  yearCanva.classList.add("movies-container__card--year");
  yearCanva.appendChild(year);

  const genreList = document.createElement("ul");
  genreList.classList.add("movies-container__card--genre");

  for (const genre of item["genre"]) {
    const genreItem = document.createElement("li");
    genreItem.textContent = genre;
    genreList.appendChild(genreItem);
  }

  const yearGenreContainer = document.createElement("div");
  yearGenreContainer.classList.add("movies-container__card--year-genre");
  yearGenreContainer.appendChild(yearCanva);
  yearGenreContainer.appendChild(genreList);

  const title = document.createTextNode(item["name"]);
  const titleCanva = document.createElement("h6");
  titleCanva.classList.add("movies-container__card--title");
  titleCanva.appendChild(title);

  const director = document.createTextNode(item["director"]);
  const directorCanva = document.createElement("h7");
  directorCanva.classList.add("movies-container__card--director");
  directorCanva.appendChild(director);

  const synopsis = document.createTextNode(item["synopsis"]);
  const synopsisCanva = document.createElement("p");
  synopsisCanva.classList.add("movies-container__card--synopsis");
  synopsisCanva.appendChild(synopsis);

  const castList = document.createElement("ul");
  castList.classList.add("movies-container__card--cast");
  for (let actor of item["cast"]) {
    const castItem = document.createElement("li");
    castItem.textContent = actor;
    castList.appendChild(castItem);
  }

  card.appendChild(img);
  card.appendChild(yearGenreContainer);
  card.appendChild(titleCanva);
  card.appendChild(directorCanva);
  card.appendChild(synopsisCanva);
  card.appendChild(castList);

  currentSection.appendChild(card);
}
