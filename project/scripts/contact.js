const url = 'https://mcdonaldmark.github.io/wdd231/project/data/cuisine.json';
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

getCuisineData();

const displayCuisine = (cuisine) => {
    cuisine.forEach((item) => {
        const optionElement = document.createElement("option");
        optionElement.textContent = item.name;
        selectElement.appendChild(optionElement);
    });
}


//Timestamp
var now = new Date();
var timestamp = now.toISOString();
document.getElementById('timestamp').value = timestamp;

