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

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`
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
    maxTemperature.innerHTML = data.main.temp_max
    minTemperature.innerHTML = data.main.temp_min
    humidity.innerHTML = data.main.humidity

    const sunriseTime = data.sys.sunrise;
    const sunriseDate = new Date(sunriseTime * 1000);
    const localTime = sunriseDate.toLocaleTimeString();
    sunrise.innerHTML = localTime;

    console.log(sunriseTime);
    console.log(sunriseDate);
    console.log(localTime);


    const sunsetTime = data.sys.sunset;
    const sunsetDate = new Date(sunsetTime * 1000);
    const localTime1 = sunsetDate.toLocaleTimeString();
    sunset.innerHTML = localTime1;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute = ('src', iconsrc)
    myGraphic.setAttribute = ('alt', data.weather[0].description)
}

apiFetch();

// select HTML elements in the document
const day1desc = document.querySelector("#day1desc");
const day1temp = document.querySelector("#day1temp");
const day2desc = document.querySelector("#day2desc");
const day2temp = document.querySelector("#day2temp");
const day3desc = document.querySelector("#day3desc");
const day3temp = document.querySelector("#day3temp");

// const myKey = "69bff3d2a3c6c8cfb2059c29cb498fd2"
// const myLat = "51.5072"
// const myLong = "0.1276"

const myForecast = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

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

function displayResultF(data) {
    console.log(data.list[0].weather[0].description)
    day1desc.innerHTML = data.list[0].weather[0].description
    day1temp.innerHTML = `${data.list[0].main.temp}&deg;F`
    day2desc.innerHTML = data.list[1].weather[0].description
    day2temp.innerHTML = `${data.list[1].main.temp}&deg;F`
    day3desc.innerHTML = data.list[2].weather[0].description
    day3temp.innerHTML = `${data.list[2].main.temp}&deg;F`
}
apiFetchF();