// define source and view-switch boolean
const card = document.querySelector('#company-card');


// pull json data
async function getmembersData() {
    const response = await fetch(source);
    const data = await response.json();
    displayGrid(data.members);
}

// run function
getmembersData();

// define grid display
const displayGrid = (members) => {
    const cards = document.querySelector('div.businesses'); // select the output container element

    members.forEach((business) => {
        // Create elements to add to the div.cards element
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("p");
        let membership = document.createElement("p");
    
        // Build the image logo by setting all the relevant attribute
        logo.setAttribute("src", business.image);
        logo.setAttribute("alt", `${name} logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "180");
        logo.setAttribute("height", "180");
        logo.classList.add("not-list");

        // Build the other content out to show the business information
        name.textContent = `${business.name}`;
        address.textContent = `${business.address}`;
        phone.textContent = `${business.phone}`;
        website.textContent = `${business.website}`;
        website.classList.add("not-list");
        membership.textContent = `${business.membership} Membership`;
        membership.classList.add("not-list");
    
        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
    
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