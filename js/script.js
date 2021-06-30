const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const cityDiv = document.querySelector('.location .city'); //Assigned
const dateDiv = document.querySelector('.location .date');
const currentTemperatureDiv = document.querySelector('.current .temperature');
const descriptionDiv = document.querySelector('.current .weather');
const averageDiv = document.querySelector('.min-max');
const inputField = document.querySelector('.input-field');
let current = new Date();
const button = document.querySelector('.button')
const inputValue = document.querySelector('.inputValue')


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
// Change HTML elements after fetching
function displayResults (weather) {
    cityDiv.innerText = `${weather.city.name}, ${weather.city.country}`;
    currentTemperatureDiv.innerHTML = `${Math.round(weather.list[0].main.temp)}<span> ° C</span>`;
    descriptionDiv.innerText = `${weather.list[0].weather[0].description}`;
    averageDiv.innerText = `Feels like ` + Math.round(weather.list[0].main.feels_like) + ' °c';
}
//let dayToday = document.querySelector('.day-today');










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
/* Add date function
function setDate(d){
    for (let i = 0; i < 5; i++) {
        let months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        let weekdays = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'
        ];
        let day = weekDays[d.getDay()];
        let date = d.getDate();
        let month = months [d.getMonth];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }
}*/