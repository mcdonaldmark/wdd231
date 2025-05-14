const url = 'https://mcdonaldmark.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#cards');
async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.companies);
    displayCompanies(data.companies);
}

getCompanyData();

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let name = document.createElement('h2'); // fill in the blank

        // Build the h2 content out to show the prophet's full name
        name.textContent = `${company.name}`; // fill in the blank
        // Build the image portrait by setting all the relevant attributes


        // Append the section(card) with the created elements
        card.appendChild(name); //fill in the blank

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}