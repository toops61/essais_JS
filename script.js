const leTitre = document.querySelector("div.container > header > h2");
leTitre.onclick = changeTitle;
function changeTitle() {
leTitre.innerHTML = "le nouveau titre";
}

const leHeader = document.getElementsByTagName("header");
leHeader.innerHTML = "<p>je rajoute un paragraphe</p>";

const container = document.getElementsByClassName("container");

function createParagraph() {
    const premierParagraph = document.createElement("p");
    premierParagraph.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, quibusdam! Quam sint a unde aspernatur consequatur repellendus explicabo corporis repellat, maxime mollitia. Doloribus, quis error fuga expedita similique nulla itaque totam est enim sunt harum saepe repellat magnam eum velit animi eveniet! Corporis distinctio exercitationem facilis debitis. Hic dolor corporis quisquam, iste sit quam officiis, nostrum et omnis necessitatibus optio minima aliquid sint vero? Sit facilis magni obcaecati, asperiores alias dolores dolor tempora quae maiores corrupti non saepe, quia placeat neque omnis impedit reprehenderit doloribus rerum reiciendis quibusdam. Nemo accusantium reiciendis adipisci. Deserunt exercitationem fugiat recusandae nemo aspernatur iste voluptatum. Nobis, provident? Enim, officia soluta. Alias, dignissimos, nemo amet excepturi sunt cum tenetur consequuntur fuga praesentium voluptate fugiat numquam deserunt, consequatur atque aliquam corporis magnam optio cumque perferendis commodi saepe quis! Nulla quae praesentium perferendis alias quo numquam aspernatur adipisci repudiandae corrupti vel porro magnam dolorum accusamus, sequi error nesciunt enim. Cum perferendis eos quam! Saepe excepturi possimus, tenetur dignissimos assumenda alias ipsam eligendi sequi qui rerum neque placeat, quisquam, repellat porro aut. Maxime earum cum veniam temporibus molestiae? Quos facilis inventore, ex animi amet dolor accusantium eos autem numquam! Voluptates corporis recusandae nostrum, voluptate possimus quas neque laudantium fugiat enim rerum asperiores aut, cupiditate voluptatum? Repudiandae nesciunt eaque esse laboriosam qui eum dolore facilis alias, error ad necessitatibus quo illo, sapiente expedita. Quis hic ducimus quos quia veniam, illo obcaecati reiciendis nesciunt consequatur impedit aperiam expedita consequuntur laudantium, eius aliquid eligendi molestias perferendis ex odit et vitae blanditiis velit. Placeat earum praesentium odio iusto ut, dignissimos eligendi libero minima perferendis! Quidem iusto cumque voluptatum numquam, quaerat blanditiis ducimus incidunt dignissimos cum. Eos a, pariatur distinctio atque vero assumenda repudiandae, eligendi illum aliquid quisquam, optio cum perspiciatis ad! Eaque ullam dolore est minima laudantium voluptatibus hic error molestiae illum soluta."
    let article = document.getElementById("article");
    article.replaceChild(premierParagraph, document.getElementById("premierParagraphe"));
}

const titrePrincipal = document.getElementById("header1");
titrePrincipal.onclick = createParagraph;

const etoile = document.getElementsByClassName("favorite__star");