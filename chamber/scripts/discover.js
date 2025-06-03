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
        let figure = document.createElement('figure');
        let image = document.createElement('img');
        let address1 = document.createElement("address");
        let address2 = document.createElement("address");
        let description = document.createElement('p');
        let button = document.createElement('button');

        title.textContent = `${attraction.title}`;
        image.setAttribute('src', attraction.image);
        image.setAttribute('alt', `${title}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', '200');
        address1.textContent = `${attraction.address.street}`
        address2.textContent = `${attraction.address.city}, ${attraction.address.state}, ${attraction.address.zip}`;
        description.textContent = `Description: ${attraction.description}`;
        button.textContent = `Learn More`;


        figure.appendChild(image);

        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(address1);
        card.appendChild(address2);
        card.appendChild(description);
        card.appendChild(button);

        document.querySelector(".grid1").appendChild(card);
    }
    );
}