document.getElementById('get-weather-btn').addEventListener('click', () => {
    const cityInput = document.getElementById('city-input');
    const cityName = cityInput.value.trim();

    if (cityName) {
        const apiKey = 'your_openweathermap_api_key';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const weatherData = `
                    <strong>${data.name}, ${data.sys.country}</strong>
                    <br>Temperature: ${data.main.temp}°C
                    <br>Feels like: ${data.main.feels_like}°C
                    <br>Humidity: ${data.main.humidity}%
                    <br>Wind speed: ${data.wind.speed} m/s
                `;
                document.getElementById('weather-data').innerHTML = weatherData;
            })
            .catch(error => {
                document.getElementById('weather-data').innerHTML = 'Error fetching weather data.';
            });
    } else {
        document.getElementById('weather-data').innerHTML = 'Please enter a city name.';
    }
});