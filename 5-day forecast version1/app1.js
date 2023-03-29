

const weatherApi = {
    key: "63bd404490e5c57b24d5f941e58d500d",
    baseUrl: "https://api.openweathermap.org/data/2.5/forecast", 
}

const searchInputBox = document.getElementById('inputContainer');

// Event Listener Function on keypress - here event calls are made

searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {   //keyCode=13 denotes enter key
        console.log(weather-display.value);
        getWeatherReport(weather-display.value);
        document.querySelector('.iconsContainer').style.display = "block";    //displaying searched value
    }

});

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)  //units=metric for displaying temperature's metric value in console
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`; //sys.country for displaying country of searched city name

    let temperature = document.getElementById('temp');          //getElementById denotes fetching values from assigned id's in html file
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.ceil(weather.main.temp_min)}&deg;C (max)/ ${Math.floor(weather.main.temp_max)}&deg;C (min) `;

    let weatherType = document.getElementById('weather');       //&deg denotes showing temp.value in degrees
    weatherType.innerText = `${weather.weather[0].main}`;  //calling main property at weather in console

    let date = document.getElementById('date');
    let todayDate = new Date();         //new Date() - Thu Oct 28 2021 20:35:24 GMT+0530 (India Standard Time) {}

    date.innerText = dateManage(todayDate);     //we are fetching only Thu Oct 28 2021

    //making background images dynamic based on weather types

    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('C:/Users/Akhil/Desktop/Web Dev bootcamp/Weather info/images/clouds.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('C:/Users/Akhil/Desktop/Web Dev bootcamp/Weather info/images/clouds.jpg')";
       
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('C:/Users/Akhil/Desktop/Web Dev bootcamp/Weather info/images/Hazes.jpg')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('C:/Users/Akhil/Desktop/Web Dev bootcamp/Weather info/images/Rains.jpg')";       
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('C:/Users/Akhil/Desktop/Web Dev bootcamp/Weather info/images/Snow.jpeg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('C:/Users/Akhil/Desktop/Web Dev bootcamp/Weather info/images/Thunderstorm.jpeg')";
        
    } 
    else if(weatherType.textContent == 'Mist'){

        document.body.style.backgroundImage = "url('C:/Users/Akhil/Desktop/Web Dev bootcamp/Weather info/images/Mist.jpeg')";
    }

    else if(weatherType.textContent == 'Smoke'){

        document.body.style.backgroundImage = "url('C:/Users/Akhil/Desktop/Web Dev bootcamp/Weather info/images/smoke1.jpg')";
    }

    else if(weatherType.textContent == 'Dust'){

        document.body.style.backgroundImage = "url('C:/Users/Akhil/Desktop/Web Dev bootcamp/Weather info/images/Dust.jpg')";
    }
}

// Date manage - Date(Thu Oct 28 2021 20:35:24 GMT+0530 (India Standard Time))
function dateManage(dateAg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                                           
                                            //return value
    let year = dateAg.getFullYear();        //2021
    let month = months[dateAg.getMonth()];  //October
    let date = dateAg.getDate();            //some date
    let day = days[dateAg.getDay()];        //some day

    return `${date} ${month} (${day}), ${year}`;
}