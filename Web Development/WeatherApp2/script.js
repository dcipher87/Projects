let weather = {
  apiKey: "6cc5375aace9f5f479ad524027b4dd92",
  fetchWeather: function(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
    + city
    + "&units=metric&appid="
    + this.apiKey
  )
      .then((response) => response.json())
      // .then((data) => console.log(data));
      .then((data) => this.displayWeather(data))
  },
  displayWeather: function(data) {
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector("#currentCity").innerText = "Weather in " + name;
    document.querySelector("#weatherIcon").src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"; //@2x is size, removing it will make the weather icon smaller, or set to @4x to make it bigger
    document.querySelector("#description").innerText = description;
    document.querySelector("#temperature").innerText = temp + "°C";
    document.querySelector("#humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector("#windSpeed").innerText = "Windspeed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function() {
    this.fetchWeather(document.querySelector("#searchBar").value);
  },
  };

document.querySelector("#searchButton").addEventListener("click", function() {
  weather.search();
});

document.querySelector("#searchBar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
});

weather.fetchWeather("Denver");

// API Call - City parameter
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// JHB Weather
// https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&units=metric&appid=6cc5375aace9f5f479ad524027b4dd92
