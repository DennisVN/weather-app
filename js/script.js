let button = document.querySelector('.button')
let inputValue = document.querySelector('.inputValue')
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');

clickButton = () => {
    console.log(document.getElementById("run"))
    document.getElementById("run").addEventListener("click", function() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?&units=metric&q=${inputValue.value}&appid=ba4146bd03d9855da2254b9e254e92ad`)
        .then(response => response.json())
        .then (data => {
        let nameValue = data ['name'];
        let tempValue = data ['main']['temp'];
        let  descValue = data ['weather'][0]['description'];

        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })
   

.catch(err => alert("Wrong City")) 
    })
};
clickButton()

/* WORKS : http://api.openweathermap.org/data/2.5/weather?&units=metric&q=Antwerp&appid=ba4146bd03d9855da2254b9e254e92ad */