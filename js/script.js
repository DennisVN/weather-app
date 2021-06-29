const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
let button = document.querySelector('.button')
let inputValue = document.querySelector('.inputValue')
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');
//let dayToday = document.querySelector('.day-today');

// Update date and time
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
}, 1000)

clickButton = () => {
    
    document.getElementById("run").addEventListener("click", function() {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?&units=metric&q=${inputValue.value}&appid=ba4146bd03d9855da2254b9e254e92ad`)
        .then(response => response.json())
        .then (data => {
            nameValue = inputValue.value;

            
            console.log(inputValue.value);
            console.log(nameValue);
            console.log(data.list);
    })
   

        .catch(err => console.log(err)) 
    })
};
clickButton()


/* WORKS : http://api.openweathermap.org/data/2.5/weather?&units=metric&q=Antwerp&appid=ba4146bd03d9855da2254b9e254e92ad */

// FIXED LINK (DUMBASS) ... 
// REDO HTML