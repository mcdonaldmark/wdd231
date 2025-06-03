const url = 'https://mcdonaldmark.github.io/wdd231/chamber/data/attractions.json';
const cards = document.querySelector('#cards');
async function getAttractionsData() {
    const response = await fetch(url);
    const data = await response.json();
    displayAttractions(data.attractions);
}

getAttractionsData();

const displayAttractions = (attractions) => {
    attractions.forEach((attraction) => {

        let card = document.createElement('section');
        let title = document.createElement('h2');
        let image = document.createElement('img');
        let description = document.createElement('p');

        title.textContent = `Attraction Name: ${attraction.title}`;
        image.setAttribute('src', attraction.image);
        image.setAttribute('alt', `${title}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', '200');
        description.textContent = `Description: ${attraction.description}`

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(description);

        document.querySelector(".grid1").appendChild(card);
    }
    );
}