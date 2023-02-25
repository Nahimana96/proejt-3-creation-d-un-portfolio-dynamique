const projets = await fetch("http://localhost:5678/api/works")
  .then((response) => response.json())
  .then((data) => data);

function afficherProjets(projets) {
  for (let projet of projets) {
    const image = document.createElement("img");
    image.src = projet.imageUrl;
    const titre = document.createElement("figcaption");
    titre.innerText = projet.title;

    const gallery = document.querySelector(".gallery");
    const figure = document.createElement("figure");
    gallery.appendChild(figure);
    figure.appendChild(image);
    figure.appendChild(titre);
  }
}
afficherProjets(projets);
const btnTous = document.querySelector(".Tous");
btnTous.addEventListener("click", () => {
  document.querySelector(".gallery").innerHTML = "";
  afficherProjets(projets);
});

const btnObjets = document.querySelector(".Objets");
btnObjets.addEventListener("click", () => {
  const objets = projets.filter((projet) => {
    return projet.category.id == 1;
  });
  document.querySelector(".gallery").innerHTML = "";
  afficherProjets(objets);
});
const btnAppartements = document.querySelector(".Appartements");
btnAppartements.addEventListener("click", () => {
  const appartements = projets.filter((projet) => {
    return projet.category.id == 2;
  });
  document.querySelector(".gallery").innerHTML = "";
  afficherProjets(appartements);
});
const btnHotelRestaurant = document.querySelector(".Hotels-restaurants");
btnHotelRestaurant.addEventListener("click", () => {
  const hotelRestaurant = projets.filter((projet) => {
    return projet.category.id == 3;
  });
  document.querySelector(".gallery").innerHTML = "";
  afficherProjets(hotelRestaurant);
});
const btnModifierProjets = document.querySelector(".modifier-projets");
const btnModifierImage = document.querySelector(".modifier-image");
