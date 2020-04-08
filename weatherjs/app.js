// Init weacther object
const weather = new Weather('miami', "us");
// Init ui
const ui = new UI();


// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('são paulo', "br");

function getWeather(){
    weather.getWeather()
        .then(results => {
            ui.paint(results)
        })
        .catch(err => console.log(err))
}

