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
const myForecast = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`


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

    const sunsetTime = data.sys.sunset;
    const sunsetDate = new Date(sunsetTime * 1000);
    const localTime1 = sunsetDate.toLocaleTimeString();
    sunset.innerHTML = localTime1;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute = ('src', iconsrc)
    myGraphic.setAttribute = ('alt', data.weather[0].description)
}

apiFetch();