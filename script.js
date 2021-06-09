const leTitre = document.querySelector("div.container > header > h2");
leTitre.innerHTML = "le nouveau titre";

const leHeader = document.getElementsByTagName("header");
leHeader.innerHTML = "<p>je rajoute un paragraphe</p>";

const container = document.getElementsByClassName("container");
const createParagraph = document.createElement("p");

createParagraph.innerHTML = "dshklfds fhskjqhfkljshqf";
