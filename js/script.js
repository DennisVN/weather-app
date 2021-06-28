// Declare variables
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');


fetch('http://api.openweathermap.org/data/2.5/weather?q=Antwerp&appid=ba4146bd03d9855da2254b9e254e92ad')
    .then(response => response.json())
    .then (data => console.log(data))

.catch(err => alert("Wrong")) 
/*WORKS : http://api.openweathermap.org/data/2.5/weather?q=Antwerp&appid=ba4146bd03d9855da2254b9e254e92ad*/