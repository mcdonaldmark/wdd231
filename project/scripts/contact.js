const url = 'https://mcdonaldmark.github.io/wdd231/project/data/cuisine.json';
const cards = document.querySelector('#product');
async function getCuisineData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data.cuisine);
        displayCuisine(data.cuisine);
    } catch (error) {
        console.log(error);
    }
}

const selectElement = document.getElementById("productName");

cuisine.forEach(product => {
    const optionElement = document.createElement("option");
    optionElement.textContent = product.name;
    selectElement.appendChild(optionElement);
});