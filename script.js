const apiKey = "YOUR_API_KEY";

// 1️⃣ Get Location + Weather
function getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("temperature").innerText = Math.round(data.main.temp) + "°C";
            document.getElementById("description").innerText = data.weather[0].description;
            document.getElementById("location").innerText = "📍 " + data.name;

            const icon = data.weather[0].icon;
            document.getElementById("weatherIcon").src =
                `https://openweathermap.org/img/wn/${icon}@2x.png`;
        });
    });
}

// 2️⃣ Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
