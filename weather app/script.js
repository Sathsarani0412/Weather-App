document.getElementById("getWeather").addEventListener("click", function () {
    const city = document.getElementById("city").value;
    const apiKey = 6b48dce1de32d9d0b2efd8954f43853f; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
            document.getElementById("weatherResult").innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML = `<p style="color: red;">${error.message}</p>`;
        });
});
