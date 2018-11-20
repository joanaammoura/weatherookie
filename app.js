let todaysIcon = document.querySelector('.weather-today__icon--img');
let todaysTemp = document.querySelector('.weather-today__temperature--value');
let yourCity = document.querySelector('.weather-location');
let precipitation = document.querySelector('.weather-precipitation--probality');
let humidity = document.querySelector('.weather-humidity--percentage');
let wind = document.querySelector('.weather-wind--speed');
let days = document.querySelectorAll('.day__block');

let root = 'https://api.openweathermap.org/';
let weatherApiKey = 'a2bab3379d78253d88dc8ee2a172e92b';
let forecastApiKey = 'a2bab3379d78253d88dc8ee2a172e92b';
let weatherPath = 'data/2.5/weather';
let forecastPath = 'data/2.5/forecast/daily';
let city = 'Lisbon';

axios.get(root + '/' + weatherPath + '?q=' + city + '&APPID=' + weatherApiKey + '&units=metric')
.then(function (response) {
    let iconPath = 'http://openweathermap.org/img/w/' + response.data.weather[0].icon + '.png'
    todaysIcon.setAttribute = ('src', iconPath);
    todaysTemp.innerHTML = Math.round(response.data.main.temp); 
    yourCity.innerHTML = response.data.name;
    humidity.innerHTML = response.data.main.humidity; 
    wind.innerHTML = response.data.wind.speed;
});

days.forEach(function(day, index) {
day.axios.get(root + '/' + forecastPath + '?q=' + city + '&APPID=' + forecastApiKey + '&units=metric')
.then(function (response) {
    let daysIcon = document.querySelector('.day__block-image');
    let iconPath = 'http://openweathermap.org/img/w/' + response.data.list[index].weather[0].icon + '.png'
    daysIcon.setAttribute = ('src', iconPath);
    let daysMax = document.querySelector('day__block-temp--max');
    daysMax.innerHTML = Math.round(response.data.list[index].main.temp_max);
    let daysMax = document.querySelector('day__block-temp--min');
    daysMax.innerHTML = Math.round(response.data.list[index].main.temp_min);
})};