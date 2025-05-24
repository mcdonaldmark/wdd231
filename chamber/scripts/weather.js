// select HTML elements in the document
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const maxTemperature = document.querySelector('#max');
const minTemperature = document.querySelector('#min');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const myGraphic = document.querySelector('#graphic');

const myKey = "69bff3d2a3c6c8cfb2059c29cb498fd2"
const myLat = "51.5072"
const myLong = "0.1276"

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`
// const myForecast = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = `${data.main.temp}&deg;F`
    maxTemperature.innerHTML = `High: ${data.main.temp_max}`
    minTemperature.innerHTML = `Low: ${data.main.temp_min}`
    humidity.innerHTML = `Humidity: ${data.main.humidity}`

    const sunriseTime = data.sys.sunrise;
    const sunriseDate = new Date(sunriseTime * 1000);
    const localTime = sunriseDate.toLocaleTimeString();
    sunrise.innerHTML = `Sunrise: ${localTime}`

    const sunsetTime = data.sys.sunset;
    const sunsetDate = new Date(sunsetTime * 1000);
    const localTime1 = sunsetDate.toLocaleTimeString();
    sunset.innerHTML = `Sunset: ${localTime1}`

    const myGraphic = document.getElementById('myImage');
    const iconsrc = `https://openweathermap.org/img/wn/01d.png`;
    myGraphic.setAttribute = ('SRC', iconsrc);
    myGraphic.setAttribute = ('alt', data.weather[0].description);

    console.log(myGraphic);
}

apiFetch();

// select HTML elements in the document
const day1temp = document.querySelector("#day1temp");
const day2temp = document.querySelector("#day2temp");
const day3temp = document.querySelector("#day3temp");
const day1day = document.querySelector("#day1day");
const day2day = document.querySelector("#day2day");
const day3day = document.querySelector("#day3day");

// const myKey = "69bff3d2a3c6c8cfb2059c29cb498fd2"
// const myLat = "51.5072"
// const myLong = "0.1276"

const myForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetchF() {
    try {
        const response = await fetch(myForecast);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResultF(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function getDayOfWeek(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const dayOfWeek = date.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayOfWeek];
}

function displayResultF(data) {
    const day1day = data.list[0].dt;
    const day1 = getDayOfWeek(day1day);
    day1temp.innerHTML = `${day1}: ${data.list[0].main.temp}&deg;F:`
    const day2day = data.list[8].dt;
    const day2 = getDayOfWeek(day2day);
    day2temp.innerHTML = `${day2}: ${data.list[8].main.temp}&deg;F`
    const day3day = data.list[16].dt;
    const day3 = getDayOfWeek(day3day);
    day3temp.innerHTML = `${day3}: ${data.list[17].main.temp}&deg;F`
}
apiFetchF();