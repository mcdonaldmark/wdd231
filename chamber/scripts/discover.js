const url = 'https://mcdonaldmark.github.io/wdd231/chamber/data/attractions.json';
const cards = document.querySelector('#cards');
async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
}