const url = 'https://mcdonaldmark.github.io/wdd231/project/data/cuisine.json';
const cards = document.querySelector('#cards');
async function getCuisineData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCuisine(data.cuisine);
}

getCuisineData();

const displayCuisine = (cuisine) => {
    cuisine.forEach((dish) => {

        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let category = document.createElement("p");
        let description = document.createElement('p');
        let button = document.createElement('button');

        title.textContent = `${dish.name}`;
        image.setAttribute('src', attraction.image);
        image.setAttribute('alt', `${title}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', '200');
        category.textContent = `${dish.category}`;
        description.textContent = `Description: ${dish.description}`;
        button.textContent = `Learn More`;

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(category);
        card.appendChild(description);
        card.appendChild(button);

        document.querySelector(".grid1").appendChild(card);
    }
    );
}