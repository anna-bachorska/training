const weather = document.querySelector('.weather');
const searchBtn = document.querySelector('button[role="search"]');
const cityField = document.querySelector('input[type="search"]');
const forecastRow = document.querySelector('.forecast > .row');
const populationRow = document.querySelector('.forecast > .population');
const dateElement = document.querySelector('.header__date');


const icons = {
    '01d': 'wi-day-sunny',
    '02d': 'wi-day-cloudy',
    '03d': 'wi-cloud',
    '04d': 'wi-cloudy',
    '09d': 'wi-showers',
    '10d': 'wi-rain',
    '11d': 'wi-thunderstorm',
    '13d': 'wi-snow',
    '50d': 'wi-fog',
    '01n': 'wi-night-clear',
    '02n': 'wi-night-alt-cloudy',
    '03n': 'wi-cloud',
    '04n': 'wi-night-cloudy',
    '09n': 'wi-night-showers',
    '10n': 'wi-night-rain',
    '11n': 'wi-night-thunderstorm',
    '13n': 'wi-night-alt-snow',
    '50n': 'wi-night-fog',
};

// wyświetlanie daty w określonym przez nas formacie
function printTodayDate() {
    const today = new Date();
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    };
    dateElement.insertAdjacentText('afterbegin', today.toLocaleString('en-us', options));
}

// wyświetlanie pełnej nazwy tygodnia bazując na dacie
function getWeekDay(date) {
    const options = {weekday: 'long'};
    return date.toLocaleString('en-us', options);
}

// usuwanie elementów z poprzedniego wyszukania
function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function renderPopulation(population) {
    const markup = `<div>
    <h4>Population of city: ${population}</h4>
</div>`

    removeChildren(populationRow)
    populationRow.insertAdjacentHTML('afterbegin', markup);
}

// wyświetlanie danych o prognozie pogody
function renderForecast(forecast) {
    removeChildren(forecastRow);
    forecast.forEach((weatherData) => {
        const markup = `<div class="forecast__day">
     <h3 class="forecast__date">${getWeekDay(new Date(weatherData.dt * 1000))}</h3>
     <h4>${weatherData.dt_txt}</h4>
     <i class='wi ${icons[weatherData.weather[0].icon]} forecast__icon'></i>
     <p class="forecast__temp">${Math.floor(weatherData.main.temp)}°C</p>
     <p class="forecast__desc">${weatherData.weather[0].main}</p>
   </div>`;
        forecastRow.insertAdjacentHTML('beforeend', markup);
    });
}

// wyświetlanie elementów z danymi o obecnej pogodzie
function renderWeather(weatherSummary) {
    const markup = `<h1 class="location">${weatherSummary.name}, ${weatherSummary.sys.country}</h1>
 <div class="weather__summary">
    <p><i class="wi ${icons[weatherSummary.weather[0].icon]} weather-icon"></i> <span class="weather__celsius-value">${Math.floor(weatherSummary.main.temp)}°C</span></p>
    <p>${weatherSummary.weather[0].main}</p>
    <ul class="weather__miscellaneous">
    <li><i class="wi wi-humidity"></i> Humidity  <span>${weatherSummary.main.humidity}%</span></li>
    <li><i class="wi wi-small-craft-advisory"></i> Wind Speed <span>${weatherSummary.wind.speed} m/s</span></li>
    </ul>
 </div>
 `;
    removeChildren(weather);
    weather.insertAdjacentHTML('beforeend', markup);
}

function getForecast(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            renderForecast(data.list.filter(forecast => forecast.dt_txt.split(" ")[1] == "12:00:00"))
            renderPopulation(data.city.population)
        })
        .catch(() => {
            setTimeout(() => getForecastByCity(cityField.value), 30000 )
        })
}

function getCityWeather(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => renderWeather(data))
        .catch(() => {
            setTimeout(() => getWeatherByCity(cityField.value), 30000 )
        })
}

function getWeatherByCity(city) {
    getCityWeather(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=bfd94ac7b58fd900b09e9d2f37bdda90&units=metric`);
}

function getForecastByCity(city) {
    getForecast(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=bfd94ac7b58fd900b09e9d2f37bdda90&units=metric`);
}

printTodayDate();

function getData(city) {
    getWeatherByCity(city);
    getForecastByCity(city);
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchBtn.disabled = true
    getData(cityField.value)
    setInterval(() => {
        getData(cityField.value)
    }, 20000)

});
