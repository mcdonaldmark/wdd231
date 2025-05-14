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
        let fullName = document.createElement('h2'); // fill in the blank

        fullName.textContent = `${company.name}`;

        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}