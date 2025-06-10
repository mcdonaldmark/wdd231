const url = 'https://mcdonaldmark.github.io/wdd231/project/data/cuisine.json';
const cards = document.querySelector('#cards');
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

getCuisineData();

const displayCuisine = (cuisine) => {
    cuisine.forEach((item) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let portrait = document.createElement('img');
        let description = document.createElement('p');

        const openButton = document.createElement('button');
        const closeButton1 = document.querySelector('#closeButton1');
        const closeButton2 = document.querySelector('#closeButton2');
        const closeButton3 = document.querySelector('#closeButton3');
        const closeButton4 = document.querySelector('#closeButton4');
        const closeButton5 = document.querySelector('#closeButton5');
        const closeButton6 = document.querySelector('#closeButton6');
        const closeButton7 = document.querySelector('#closeButton7');
        const closeButton8 = document.querySelector('#closeButton8');
        const closeButton9 = document.querySelector('#closeButton9');
        const closeButton10 = document.querySelector('#closeButton10');
        const closeButton11 = document.querySelector('#closeButton11');
        const closeButton12 = document.querySelector('#closeButton12');
        const closeButton13 = document.querySelector('#closeButton13');
        const closeButton14 = document.querySelector('#closeButton14');
        const closeButton15 = document.querySelector('#closeButton15');
        const closeButton16 = document.querySelector('#closeButton16');
        openButton.textContent = 'Ingredients';

        if (item.name == "Shrimp Ceviche") {

            openButton.addEventListener("click", () => {
                dialogBox1.showModal();
            })
        }

        closeButton1.addEventListener("click", () => {
            dialogBox1.close();
        })

        if (item.name == "Fish Ceviche") {

            openButton.addEventListener("click", () => {
                dialogBox2.showModal();
            })
        }

        closeButton2.addEventListener("click", () => {
            dialogBox2.close();
        })

        if (item.name == "Hornado") {

            openButton.addEventListener("click", () => {
                dialogBox3.showModal();
            })
        }

        closeButton3.addEventListener("click", () => {
            dialogBox3.close();
        })

        if (item.name == "Fanesca") {

            openButton.addEventListener("click", () => {
                dialogBox4.showModal();
            })
        }

        closeButton4.addEventListener("click", () => {
            dialogBox4.close();
        })

        if (item.name == "Llapingachos") {

            openButton.addEventListener("click", () => {
                dialogBox5.showModal();
            })
        }

        closeButton5.addEventListener("click", () => {
            dialogBox5.close();
        })

        if (item.name == "Empanadas de Viento") {

            openButton.addEventListener("click", () => {
                dialogBox6.showModal();
            })
        }

        closeButton6.addEventListener("click", () => {
            dialogBox6.close();
        })

        if (item.name == "Helado de Paila") {

            openButton.addEventListener("click", () => {
                dialogBox7.showModal();
            })
        }

        closeButton7.addEventListener("click", () => {
            dialogBox7.close();
        })

        if (item.name == "Churrasco") {

            openButton.addEventListener("click", () => {
                dialogBox8.showModal();
            })
        }

        closeButton8.addEventListener("click", () => {
            dialogBox8.close();
        })

        if (item.name == "Encebollado") {

            openButton.addEventListener("click", () => {
                dialogBox9.showModal();
            })
        }

        closeButton9.addEventListener("click", () => {
            dialogBox9.close();
        })

        if (item.name == "Guatita") {

            openButton.addEventListener("click", () => {
                dialogBox10.showModal();
            })
        }

        closeButton10.addEventListener("click", () => {
            dialogBox10.close();
        })

        if (item.name == "Seco de Chivo") {

            openButton.addEventListener("click", () => {
                dialogBox11.showModal();
            })
        }

        closeButton11.addEventListener("click", () => {
            dialogBox11.close();
        })

        if (item.name == "Bolón de Verde") {

            openButton.addEventListener("click", () => {
                dialogBox12.showModal();
            })
        }

        closeButton12.addEventListener("click", () => {
            dialogBox12.close();
        })

        if (item.name == "Yaguarlocro") {

            openButton.addEventListener("click", () => {
                dialogBox13.showModal();
            })
        }

        closeButton13.addEventListener("click", () => {
            dialogBox13.close();
        })

        if (item.name == "Chicha de Jora") {

            openButton.addEventListener("click", () => {
                dialogBox14.showModal();
            })
        }

        closeButton14.addEventListener("click", () => {
            dialogBox14.close();
        })

        if (item.name == "Tigrillo") {

            openButton.addEventListener("click", () => {
                dialogBox15.showModal();
            })
        }

        closeButton15.addEventListener("click", () => {
            dialogBox15.close();
        })

        if (item.name == "Morocho") {

            openButton.addEventListener("click", () => {
                dialogBox16.showModal();
            })
        }

        closeButton16.addEventListener("click", () => {
            dialogBox16.close();
        })

        name.textContent = `${item.name}`;
        description.textContent = `${item.description}`;
        portrait.setAttribute('src', `${item.image}`);
        portrait.setAttribute('alt', `${item.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '250');
        portrait.setAttribute('height', '240');

        card.appendChild(name);
        card.appendChild(portrait);
        card.appendChild(description);
        card.appendChild(openButton);

        cards.appendChild(card);
    });
}