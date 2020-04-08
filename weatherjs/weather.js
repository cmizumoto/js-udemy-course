class Weather {
    constructor (city, state) {
        this.apiKey = '8f41da422f5f371094217dcab0aa8314';
        this.city = city;
        this.state = state;
    }

    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}`);

        const responseData = await response.json();

        return responseData
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}