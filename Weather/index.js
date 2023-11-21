var city = document.querySelector(".city");
var temperature = document.querySelector(".temp");
var country = document.querySelector(".country")
var humidity = document.querySelector(".humidity");
var windSpeed = document.querySelector(".wind");
var searchInput = document.querySelector(".search input");
var searchBtn = document.querySelector(".search button");
var weatherImg = document.querySelector(".weather-icon");

const apiKey = "9ddede4bed718aa220e21d0e57d210a9";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;
// whenever you use the async method it is a must you use the await with. The async means reloading. it
// is used when you want to run many function together, such that you want many things to load 
// whenever youre passing values in a higher order use the backtick (``)
async function checkWeather (cityName) {
    const response 
    = await fetch(apiUrl  + cityName + `&appid=${apiKey}`);
    var data = await response.json(); 
    console.log(data);

    if (data.cod == 404){
        document.querySelector(".error").style.display= "block"
    } else {
        city.innerHTML = data.name; 
    temperature.innerHTML = Math.round (data.main.temp) + "°C"
    humidity.innerHTML = data.main.humidity + "%"
    windSpeed.innerHTML = data.wind.speed + "Km/hr"
    country.innerHTML = data.sys.country



    if(data.weather[0].main === "Clouds") {
        weatherImg.setAttribute("src", "./images/clouds.png");
    }else if (data.weather[0].main === "Clear") {
        weatherImg.setAttribute("src", "./images/clear.png");
    }else if (data.weather[0].main === "Rain") {
        weatherImg.setAttribute("src", "./images/rain.png");
    }  else if (data.weather[0].main === "Drizzle") {
        weatherImg.setAttribute("src", "./images/drizzle.png");
    } else if (data.weather[0].main === "Mist") {
        weatherImg.setAttribute("src", "./images/mist.png");
    } else if (data.weather[0].main === "Snow") {
        weatherImg.setAttribute("src", "./images/snow.png");
    } else if (data.weather[0].main === "Wind") {
        weatherImg.setAttribute("src", "./images/wind.png");
    } 
   
    document.querySelector(".weather").style.display ="block";
    }

    
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchInput.value);
})

