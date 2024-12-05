load();
const API_URL = "http://api.openweathermap.org/geo/1.0/direct";
const API_KEY = "3bd30b42dbce1f32d597d94dd8482394";

async function getCityData(cityName) {
  try {
    const url = `${API_URL}?q=${cityName}&limit=5&appid=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log("City Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching city data:", error);
  }
}
getCityData(document.getElementById(searchBar));


































function load() {
    const locations = [
        { id: "newYork", name: "New York" },
        { id: "london", name: "London" },
        { id: "tokyo", name: "Tokyo" },
        { id: "paris", name: "Paris" },
        { id: "beijing", name: "Beijing" },
        { id: "dubai", name: "Dubai" },
        { id: "sydney", name: "Sydney" },
        { id: "mumbai", name: "Mumbai" },
        { id: "rome", name: "Rome" },
        { id: "saoPaulo", name: "Sao Paulo" }
    ];

    

    locations.forEach(location => {
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location.name}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                document.getElementById(`${location.id}TempC`).innerHTML = 
                    "Temp: " + data.current.temp_c + "°C";
                document.getElementById(`${location.id}Wind`).innerHTML = 
                    "Wind: " + data.current.wind_kph + " kmph";
            })
            .catch(err => {
                console.error("Failed to fetch weather data for " + location.name, err);
                document.getElementById(`${location.id}TempC`).innerHTML = "Error loading data";
                document.getElementById(`${location.id}Wind`).innerHTML = "Hello";
            });
    });
}


