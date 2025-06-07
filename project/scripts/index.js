const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;

const modify = document.querySelector("#modified")
const modified = (document.lastModified);
modify.innerHTML = `${modified}`;