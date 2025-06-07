const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;

const modify = document.querySelector("#modified")
const modified = (document.lastModified);
modify.innerHTML = `${modified}`;

const products = [
    {
        id: "1",
        name: "Cheeseballs with Strawberry Smoothie",
    },
    {
        id: "2",
        name: "Bolon",
    },
    {
        id: "3",
        name: "Chicken Soup with Egg Noodles",
    },
    {
        id: "4",
        name: "Lomo Saltado",
    },
];

const selectElement = document.getElementById("productName");

products.forEach(product => {
    const optionElement = document.createElement("option");
    optionElement.value = product.id;
    optionElement.textContent = product.name;
    selectElement.appendChild(optionElement);
});