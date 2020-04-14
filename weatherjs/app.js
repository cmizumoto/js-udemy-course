// init storage
const storage = new Storage();
// Get store location data
const weatherLocation = storage.getLocationData();

// Init weacther object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init ui
const ui = new UI();



// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // change location
    weather.changeLocation(city, state);

    // Set Location in Local storage
    storage.setLocationData(city, state)

    // get and display weather
    getWeather();

    // close modal
    $('#locModal').modal('hide');
})

// weather.changeLocation('são paulo', "br");

function getWeather(){
    weather.getWeather()
        .then(results => {
            ui.paint(results)
        })
        .catch(err => console.log(err))
}

