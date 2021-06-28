var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
let name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

clickButton = () => {
    console.log(document.getElementById("run"))
    document.getElementById("run").addEventListener("click", function() {
        fetch('http://api.openweathermap.org/data/2.5/weather?&units=metric&q=Antwerp&appid=ba4146bd03d9855da2254b9e254e92ad')
        .then(response => response.json())
        .then (data => {
        var nameValue = data ['name'];
        var tempValue = data ['main']['temp'];
        var descValue = data ['weather'][0]['description'];

        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })

.catch(err => alert("Wrong City")) 
    })
};
clickButton()

/* WORKS : http://api.openweathermap.org/data/2.5/weather?q=Antwerp&appid=ba4146bd03d9855da2254b9e254e92ad */