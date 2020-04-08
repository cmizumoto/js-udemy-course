// Init weacther object
const weather = new Weather('são paulo', "br");

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('são paulo', "br");

function getWeather(){
    weather.getWeather()
        .then(results => {
            console.log(results);
        })
        .catch(err => console.log(err))
}

