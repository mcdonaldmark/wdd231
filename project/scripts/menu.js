const url = 'https://mcdonaldmark.github.io/wdd231/project/data/cuisine.json';
const cards = document.querySelector('#cards');
async function getCuisineData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.cuisine);
    displayCuisine(data.cuisine);
}

getCuisineData();

const displayCuisine = (cuisine) => {
    cuisine.forEach((item) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let portrait = document.createElement('img');
        let description = document.createElement('p');

        name.textContent = `${item.name}`;
        description.textContent = `${item.description}`;
        portrait.setAttribute('src', item.image);
        portrait.setAttribute('alt', item.name);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '250');
        portrait.setAttribute('height', '240');

        card.appendChild(name);
        card.appendChild(portrait);
        card.appendChild(description);

        cards.appendChild(card);
    });
}