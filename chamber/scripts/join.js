
//Options
const membership = [
    {
        mem: "Nonprofit Membership",
        level: "1",
    },
    {
        mem: "Bronze Membership",
        level: "2",
    },
    {
        mem: "Silver Membership",
        level: "3",
    },
    {
        mem: "Gold Membership",
        level: "4",
    },
];

const selectElement = document.getElementById("membership");

membership.forEach(member => {
    const optionElement = document.createElement("option");
    optionElement.textContent = member.mem;
    selectElement.appendChild(optionElement);
});


//Timestamp
var now = new Date();
var timestamp = now.toISOString();
document.getElementById('timestamp').value = timestamp;


//Create Dynamic Cards
createMembershipCard(membership);

function createMembershipCard(membership) {
    document.querySelector(".grid1").innerHTML = "";
    membership.forEach(member => {
        let card = document.createElement("section");
        let memb = document.createElement("h2");

        const openButton = document.createElement('button');
        const closeButton = document.querySelector('#closeButton');
        const closeButton1 = document.querySelector('#closeButton1');
        const closeButton2 = document.querySelector('#closeButton2');
        const closeButton3 = document.querySelector('#closeButton3');
        openButton.textContent = 'Benefits';

        if (member.level == 1) {

            openButton.addEventListener("click", () => {
                dialogBox.showModal();
            })
        }

        closeButton.addEventListener("click", () => {
            dialogBox.close();
        })

        if (member.level == 2) {

            openButton.addEventListener("click", () => {
                dialogBox1.showModal();
            })
        }

        closeButton1.addEventListener("click", () => {
            dialogBox1.close();
        })

        if (member.level == 3) {

            openButton.addEventListener("click", () => {
                dialogBox2.showModal();
            })
        }

        closeButton2.addEventListener("click", () => {
            dialogBox2.close();
        })

        if (member.level == 4) {

            openButton.addEventListener("click", () => {
                dialogBox3.showModal();
            })
        }

        closeButton3.addEventListener("click", () => {
            dialogBox3.close();
        })

        memb.textContent = member.mem;

        card.appendChild(memb);
        card.appendChild(openButton);

        document.querySelector(".grid1").appendChild(card);
    });
}



















