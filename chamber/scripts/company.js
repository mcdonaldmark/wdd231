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
        let fullName = document.createElement('h2');
        let address = document.createElement("p");
        let address1 = document.createElement("p");
        let address2 = document.createElement("p");
        let address3 = document.createElement("p");
        let phone = document.createElement("p");


        fullName.textContent = `${company.name}`;
        address.textContent = `${company.address.street}`;
        address1.textContent = `${company.address.city}, ${company.address.state}`;
        address3.textContent = `${company.address.country}`;
        address2.textContent = `${company.address.zip}`;
        phone.textContent = `${phone}`;


        card.appendChild(fullName);
        card.appendChild(address);
        card.appendChild(address1);
        card.appendChild(address3);
        card.appendChild(address2);
        card.appendChild(phone);

        cards.appendChild(card);
    });
}