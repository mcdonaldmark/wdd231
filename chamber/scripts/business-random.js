const url = 'https://mcdonaldmark.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#cards');
async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    const shuffledData = shuffleArray(data);
    const selectedData = shuffledData.slice(0, 3);
    console.table(selectedData.companies);
    displayCompanies(selectedData.companies);
}

getCompanyData();

const displayCompanies = (selectedData) => {
    selectedData.forEach((company) => {
        if (company.membership === 2 || company.membership === 3) {
            let card = document.createElement('section');
            let fullName = document.createElement('h2');
            let phone1 = document.createElement("p");
            let email1 = document.createElement("p");
            let url1 = document.createElement("a");
            let portrait = document.createElement('img');
            let membership1 = document.createElement('p');

            fullName.textContent = `Company Name: ${company.name}`;
            phone1.textContent = `Company Phone: ${company.phone}`;
            email1.textContent = `Company Email: ${company.email}`;
            membership1.textContent = `Membership level: ${company.membership}`;
            url1.href = `${company.url1}`;
            url1.textContent = `${company.url1}`;
            portrait.setAttribute('src', company.image);
            portrait.setAttribute('alt', `${fullName}`);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '250');
            portrait.setAttribute('height', '240');

            card.appendChild(fullName);
            card.appendChild(phone1);
            card.appendChild(email1);
            card.appendChild(membership1)
            card.appendChild(url1);
            card.appendChild(portrait);

            document.querySelector(".grid1").appendChild(card);
        }
    });
}