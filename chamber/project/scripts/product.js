const card = document.querySelector('product-card');

const cards  = document.querySelector('Our-product');

const displayGrid = (product) => {
    const cards = document.querySelector('div.product'); // select the output container element

    members.forEach((business) => {
        // Create elements to add to the div.cards element
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let name = document.createElement("p");
        let product = document.createElement("img");
    
        // Build the image logo by setting all the relevant attribute
        logo.setAttribute("src", product.image);
        logo.setAttribute("alt", `${name} lmg`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "180");
        logo.setAttribute("height", "180");
        logo.classList.add("not-list");

        // Build the other content out to show the business information
        products.textContent = `${product.name}`;
        product.classList.add("not-list");
        product.textContent = `${product.name} product`;
        membership.classList.add("not-list");
    
        // Append the section(card) with the created elements
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(products);
    
        cards.appendChild(card);
    }) // end of forEach loop
} // end of function expression

// add event listeners
const gridButton = document.querySelector("#grid-button");
const listButton = document.querySelector("#list-button");
const display = document.querySelector("article");

gridButton.addEventListener("click",() => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listButton.addEventListener("click",showList);

function showList(){
    display.classList.add("list");
    display.classList.remove("grid");
}