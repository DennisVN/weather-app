const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const cityDiv = document.querySelector('.location .city'); //Assigned
const dateDiv = document.querySelector('.location .date');
const currentTemperatureDiv = document.querySelector('.current .temperature');
const descriptionDiv = document.querySelector('.current .weather');
const averageDiv = document.querySelector('.min-max');
let current = new Date();
const button = document.querySelector('.button')
const inputValue = document.querySelector('.inputValue')
// Const And Var for Forecast 
const dateDayOne = document.querySelector('.location-one .date-one');
const dayOneTemperatureDiv = document.querySelector('.current-one .temperature-one')
const weatherDayOne = document.querySelector('.current-one .weather-one');
const minMaxDayOne = document.querySelector('.min-max-one');

const dateDayTwo = document.querySelector('.location-two .date-two');
const dayTwoTemperatureDiv = document.querySelector('.current-two .temperature-two')
const weatherDayTwo = document.querySelector('.current-two .weather-two');
const minMaxDayTwo = document.querySelector('.min-max-two');

const dateDayThree = document.querySelector('.location-three .date-three');
const dayThreeTemperatureDiv = document.querySelector('.current-three .temperature-three')
const weatherDayThree = document.querySelector('.current-three .weather-three');
const minMaxDayThree = document.querySelector('.min-max-three');


clickButton = () => {
    
    document.getElementById("run").addEventListener("click", function() {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?&units=metric&q=${inputValue.value}&appid=ba4146bd03d9855da2254b9e254e92ad`)
        .then(weather => weather.json())
        .then (data => {
            displayResults(data)
            let cityDiv = inputValue.value;
            

            
            console.log(inputValue.value);
            console.log(cityDiv);
            console.log(data.list);
    })
   

        .catch(err => console.log(err)) 
    })
};
clickButton()
//Add date 
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
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }
    console.log(months);
}
// Change HTML elements after fetching
function displayResults (weather) {
    cityDiv.innerText = `${weather.city.name}, ${weather.city.country}`;
    dateDiv.innerText = setDate(current);
    currentTemperatureDiv.innerHTML = `${Math.round(weather.list[0].main.temp)}<span> ° C</span>`;
    descriptionDiv.innerText = `${weather.list[0].weather[0].description}`;
    averageDiv.innerText = `Feels like ` + Math.round(weather.list[0].main.feels_like) + ' °c';

    dateDayOne.innerText = `${weather.list[8].dt_txt}`;
    dayOneTemperatureDiv.innerHTML = `${Math.round(weather.list[8].main.temp)}<span> ° C</span>`;
    weatherDayOne.innerText = `${weather.list[8].weather[0].description}`;
    minMaxDayOne.innerText = `feels like ` + Math.round(weather.list[8].main.feels_like) + `°c`;

    dateDayTwo.innerText = `${weather.list[16].dt_txt}`;
    dayTwoTemperatureDiv.innerHTML = `${Math.round(weather.list[8].main.temp)}<span> ° C</span>`;
    weatherDayTwo.innerText = `${weather.list[16].weather[0].description}`;
    minMaxDayTwo.innerText = `feels like ` + Math.round(weather.list[16].main.feels_like) + `°c`;

    dateDayThree.innerText = `${weather.list[24].dt_txt}`;
    dayThreeTemperatureDiv.innerHTML = `${Math.round(weather.list[8].main.temp)}<span> ° C</span>`;
    weatherDayThree.innerText = `${weather.list[24].weather[0].description}`;
    minMaxDayThree.innerText = `feels like ` + Math.round(weather.list[24].main.feels_like) + `°c`;
}











/* WORKS : http://api.openweathermap.org/data/2.5/weather?&units=metric&q=Antwerp&appid=ba4146bd03d9855da2254b9e254e92ad */

// USE LATER 
/*
// Update date and time WORKING CLOCK
setInterval(() => { //clock & date (put in README)
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursin12HrFormat = hour > 13 ? hour %12: hour; 
    const minutes = time.getMinutes();
    const amPm = hour >=12 ? "PM" : "AM";

    timeEl.innerHTML = hoursin12HrFormat + ':' + minutes + '' + `<span id="am-pm">${amPm}</span>` 
}, 1000)*/
/* BUTTON WORKS, ADD LATER, STOP WASTING YOUR TIME BRUH -_-" 

clickButton = () => {
    document.getElementById("run").addEventListener("click", function() {
        console.log("click")
    })
};
clickButton()*/
