clickButton = () => {
    console.log(document.getElementById("run"))
    document.getElementById("run").addEventListener("click", function() {
    })
};
clickButton()


/*fetch('http://api.openweathermap.org/data/2.5/weather?q=Antwerp&appid=ba4146bd03d9855da2254b9e254e92ad')
    .then(response => response.json())
    .then (data => {
        var nameValue = data['name'];
        var tempValue = data ['main']['temp'];
        var descValue = data ['weather'][0]['description'];

        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })

.catch(err => alert("Wrong")) */
/* WORKS : http://api.openweathermap.org/data/2.5/weather?q=Antwerp&appid=ba4146bd03d9855da2254b9e254e92ad */