# Weather-app
Well hello there, i've missed you !<br> <br>
We're going up that hill like Kate Bush, this time fetching the @openweathermap API,<br> creating my very first weather app.<br>
I fetched the 5 day forecast, returned it to JSON, and manipulated it with JS. <br>
The user can input a city in the input field, click ENTER, and the forecast displays accordingly.

Give It A Try Here : https://dennisvn.github.io/weather-app/ 

#UI Screenshot

![Screenshot](https://github.com/DennisVN/weather-app/blob/master/images/screenshotUIWeatherApi.png)

## How it works
- Fill in the city of your source
- Run the button
- After the click you see your results:
    - Main Screen : Current day forecast appears
    - Below : the forecast of the 5 coming days appears
    
## How the code works 
### HTML Features : 
- Divided in 3 containers:
    - header-container (contains clock & calendar, input field and button) 
    - zero-container (contains large sz forecast of the current day, AKA day zero) 
    - forecast-container (contains medium sz forecast of coming 5 days) 
- Structure of the day div
    -   Every div here gets called later by QuerySl (*) throught the class. Hence the names ; 
        - city  (location)
        - date (date)
        - temperature (°C)
        - weather (description)
        - weather-icon (icon) 
        - min-max (feels like) 
    -   Repeat this layour for every day after (dayOne, dayTwo, dayThree, ...);  
<br>
### CSS Features  
- Partially responsive, WIP ! 
- background picture : taken from www.unsplash.com, credit to Yuriy Kovalev. 

### JS Features :
1) Declare const and assign the class of corresp. div with QS ( or ID via GEBI) (*) (**)
2) Repeat for each day & corresp. element.
3) Setinterval() creates an infinite loop per second that refreshes time and date.
  - am and pm function assigned through innerHTML of corresponding span. 
  - broken : needs update for hours or minutes < 10. Example: 12:1 instead of 12:01
4) Eventlistener to make the button listen to click. 
5) button fetches API, returns weather.JSON(), runs it through displaysResult(data) function. Called below. 
6) setDate function (static, not 100% IRL-time):
  - created for loop that sets i to the amount of days. 
  - created two arrays for Months & Weekdays.
  - return day date and month.
7) function displayResults(weather) :
![Screenshot](https://github.com/DennisVN/weather-app/blob/master/images/screenshotDisplayResult.png)
  - display fetched info through the corresponding div's innerHTML/Text.
  - NOTE : You'll notice here that setDate(current). This is why the time isn't the live API's time.<br>
  instead, current is assigned to setDate(); which fetches a new time every time page get's reloaded.
  - CHALLENGING : The icons took a lot of research and efforts. Approach in this project : <br>
  set the demo picture url (see Sources below) from the site, linked via the class of the image.<br>
  change img source with JS, use link but change icon code in url with (`${weather.list[0].weather[0].icon};`).<br>
  The catch here is you'll need to manually change the list numbers depending what object you want to display.
  
  # WIP 
  
  - Hide everything before click, let appear after click WIP. (code is commented out to hide, if you have the solution to let it re-appear you'll earn a pastei de natas !
  - Make fully responive WIP
  - Update basic CSS
  - Call my mother and make her proud with this amazing puzzlework. 

# Sources used to create this project : 
- Visual Studio code : (https://code.visualstudio.com/) Free
- GitHub : (https://github.com/) Free
- API from Open Weather : (https://openweathermap.org/api) ! dont forget to create an account for your key ! Free
- Icon source from Open Weather :(https://openweathermap.org/img/wn/10d@2x.png) Free 
- Image taken from Unsplash : (https://images.unsplash.com) Free

## Thanks again for peepin, can't wait to see you for our next @becodeorg Project ! 

