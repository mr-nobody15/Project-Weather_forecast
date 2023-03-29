
const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

// Event Listener Function on keypress - here event calls are made

var eal = document.getElementById('input-box');
if(eal){
  
eal.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {   //keyCode=13 denotes enter key
        console.log(eal.value);
        Weatherdata(eal.value);
       // displayImage(eal.value);
        document.querySelector('.main-container').style.display = "block";    //displaying searched value
    }

});
}



function Weatherdata (city) {
        fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(displayWeather);

       
    }

    function displayWeather(weather) {

    console.log(weather);


    displayImage(weather);

    


    

    


    let place = document.getElementById('location');
    place.innerText = `${weather.name}`,  `${weather.sys.country}`;


    let date = document.getElementById('day_date');
    let todayDate = new Date();         //new Date() - Thu Oct 28 2021 20:35:24 GMT+0530 (India Standard Time) {}

    date.innerText = dateManage(todayDate); 

    //icon pending

    let temperature = document.getElementById('current_temperature');          //getElementById denotes fetching values from assigned id's in html file
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let description = document.getElementById('weather_description');
    description.innerHTML =`${weather.weather[0].description}`;

    let maxtemp = document.getElementById('weather_high_value');
    maxtemp.innerHTML =`${Math.floor(weather.main.temp_max)}&deg;`;

    let mintemp = document.getElementById('weather_low_value');
    mintemp.innerHTML =`${Math.ceil(weather.main.temp_min)}&deg;`;

    let wind_measure = document.getElementById('wind_value');
    wind_measure.innerHTML = `${Math.ceil(weather.wind.speed)}mph`;

    let sunrise_time = document.getElementById('sunrise_value');

     var sunval = weather.sys.sunrise;
     var timestamp1 = moment.unix(sunval);
    

     sunrise_time.innerHTML = timestamp1.format("HH:mm");


    var sunset_time = document.getElementById('sunset_value');

    var sunsetval = weather.sys.sunset;
    var timestamp2 = moment.unix(sunsetval);
 

    sunrise_time.innerHTML = timestamp2.format("HH:mm");

    function dateManage(dateAg) {

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                                               
                                                //return value
        let day = days[dateAg.getDay()];        //some day
        let date = dateAg.getDate();            //some date
        let month = months[dateAg.getMonth()];  //October
  
        return `${day} ,${date} ${month} `;
    }
  }   


  function displayImage(weather)
  {
      var tryimage = weather.weather[0].description;

      if(tryimage=="Haze")
      {
        var img = document.createElement('img'); 

        img.src = 

'C:/Users/Akhil/Desktop/3-2 internship/maincontainer images/haze.png'; 

        //document.getElementById('icon').appendChild(img); 

       // document.getElementById("imageid").src="C:/Users/Akhil/Desktop/3-2 internship/maincontainer images/haze.png";
      // document.getElementById('imageid').appendChild(img);

      


      }
  }



