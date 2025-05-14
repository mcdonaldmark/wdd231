const url = 'https://mcdonaldmark.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#cards');
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // fill in the blank

        fullName.textContent = `${prophet.name}`;

        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}