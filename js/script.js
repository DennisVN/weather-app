let current = new Date();
const button = document.querySelector('.button');

const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const cityDiv = document.querySelector('.location .city');
const dateDiv = document.querySelector('.location .date');
const currentTemperatureDiv = document.querySelector('.current .temperature');
const descriptionDiv = document.querySelector('.current .weather');
const averageDiv = document.querySelector('.min-max');
const inputValue = document.querySelector('.inputValue');
const weatherIcon = document.querySelector('.weather-icon');

const dateDayOne = document.querySelector('.location-one .date-one');
const dayOneTemperatureDiv = document.querySelector('.current-one .temperature-one')
const weatherDayOne = document.querySelector('.current-one .weather-one');
const minMaxDayOne = document.querySelector('.min-max-one');
const weatherIconDayOne = document.querySelector('.weather-icon-one');


const dateDayTwo = document.querySelector('.location-two .date-two');
const dayTwoTemperatureDiv = document.querySelector('.current-two .temperature-two')
const weatherDayTwo = document.querySelector('.current-two .weather-two');
const minMaxDayTwo = document.querySelector('.min-max-two');
const weatherIconDayTwo = document.querySelector('.weather-icon-two');

const dateDayThree = document.querySelector('.location-three .date-three');
const dayThreeTemperatureDiv = document.querySelector('.current-three .temperature-three')
const weatherDayThree = document.querySelector('.current-three .weather-three');
const minMaxDayThree = document.querySelector('.min-max-three');
const weatherIconDayThree = document.querySelector('.weather-icon-three');

const dateDayFour = document.querySelector('.location-four .date-four');
const dayFourTemperatureDiv = document.querySelector('.current-four .temperature-four')
const weatherDayFour = document.querySelector('.current-four .weather-four');
const minMaxDayFour = document.querySelector('.min-max-four');
const weatherIconDayFour = document.querySelector('.weather-icon-four');

const dateDayFive = document.querySelector('.location-five .date-five');
const dayFiveTemperatureDiv = document.querySelector('.current-five .temperature-five')
const weatherDayFive = document.querySelector('.current-five .weather-five');
const minMaxDayFive = document.querySelector('.min-max-five');
const weatherIconDayFive = document.querySelector('.weather-icon-five');

clickButton = () => {
    
    document.getElementById("run").addEventListener("click", function() {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?&units=metric&q=${inputValue.value}&appid=ba4146bd03d9855da2254b9e254e92ad`)
        .then(weather => weather.json())
        .then (data => {
            displayResults(data)
    })
        .catch(err => console.log(err)) 
    })
};
clickButton()

function displayResults (weather) {
    cityDiv.innerText = `${weather.city.name}, ${weather.city.country}`;
    dateDiv.innerText = setDate(current);
    currentTemperatureDiv.innerHTML = `${Math.round(weather.list[0].main.temp)}<span> ° C</span>`;
    descriptionDiv.innerText = `${weather.list[0].weather[0].description}`;
    averageDiv.innerText = `Feels like ` + Math.round(weather.list[0].main.feels_like) + ' °c';
    weatherIcon.innerHTML = document.querySelector('.weather-icon').src=(`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`)

    dateDayOne.innerText = `${weather.list[8].dt_txt}`;
    dayOneTemperatureDiv.innerHTML = `${Math.round(weather.list[8].main.temp)}<span> ° C</span>`;
    weatherDayOne.innerText = `${weather.list[8].weather[0].description}`;
    minMaxDayOne.innerText = `feels like ` + Math.round(weather.list[8].main.feels_like) + `°c`;
    weatherIconDayOne.innerHTML = document.querySelector('.weather-icon-one').src=(`https://openweathermap.org/img/wn/${weather.list[8].weather[0].icon}@2x.png`);

    dateDayTwo.innerText = `${weather.list[16].dt_txt}`;
    dayTwoTemperatureDiv.innerHTML = `${Math.round(weather.list[16].main.temp)}<span> ° C</span>`;
    weatherDayTwo.innerText = `${weather.list[16].weather[0].description}`;
    minMaxDayTwo.innerText = `feels like ` + Math.round(weather.list[16].main.feels_like) + `°c`;
    weatherIconDayTwo.innerHTML = document.querySelector('.weather-icon-two').src=(`https://openweathermap.org/img/wn/${weather.list[16].weather[0].icon}@2x.png`);

    dateDayThree.innerText = `${weather.list[24].dt_txt}`;
    dayThreeTemperatureDiv.innerHTML = `${Math.round(weather.list[24].main.temp)}<span> ° C</span>`;
    weatherDayThree.innerText = `${weather.list[24].weather[0].description}`;
    minMaxDayThree.innerText = `feels like ` + Math.round(weather.list[24].main.feels_like) + `°c`;
    weatherIconDayThree.innerHTML = document.querySelector('.weather-icon-three').src=(`https://openweathermap.org/img/wn/${weather.list[24].weather[0].icon}@2x.png`);

    dateDayFour.innerText = `${weather.list[32].dt_txt}`;
    dayFourTemperatureDiv.innerHTML = `${Math.round(weather.list[32].main.temp)}<span> ° C</span>`;
    weatherDayFour.innerText = `${weather.list[32].weather[0].description}`;
    minMaxDayFour.innerText = `feels like ` + Math.round(weather.list[32].main.feels_like) + `°c`;
    weatherIconDayFour.innerHTML = document.querySelector('.weather-icon-four').src=(`https://openweathermap.org/img/wn/${weather.list[32].weather[0].icon}@2x.png`);

    dateDayFive.innerText = `${weather.list[39].dt_txt}`;
    dayFiveTemperatureDiv.innerHTML = `${Math.round(weather.list[39].main.temp)}<span> ° C</span>`;
    weatherDayFive.innerText = `${weather.list[39].weather[0].description}`;
    minMaxDayFive.innerText = `feels like ` + Math.round(weather.list[39].main.feels_like) + `°c`;
    weatherIconDayFive.innerHTML = document.querySelector('.weather-icon-five').src=(`https://openweathermap.org/img/wn/${weather.list[39].weather[0].icon}@2x.png`);
}
//Clock & Date
setInterval(() => { 
    const time = new Date();
    const hour = time.getHours();
    const hoursin24HrFormat = hour > 13 ? hour: hour; 
    const minutes = time.getMinutes();
    const amPm = hour >=12 ? "PM" : "AM";

    timeEl.innerHTML = hoursin24HrFormat + ':' + minutes + '' + `<span id="am-pm">${amPm}</span>` 
}, 1000)

function setDate(d){
    for (let i = 0; i < 5; i++) {
        let months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        let weekDays = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'
        ];
        let day = weekDays[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];

        return `${day} ${date} ${month}`
    }
    console.log(months);
}
