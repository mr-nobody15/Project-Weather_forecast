   
const dayweatherApi ={

    baseUrl:  "https://api.openweathermap.org/data/2.5/forecast",
    key : "cc66856dc8f8bee7b60dc6af5083e432"
}

var eal1 = document.getElementById('input-box');
if(eal1){
  
eal.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {   //keyCode=13 denotes enter key
        console.log(eal1.value);
        GetInfo(eal1.value);
        document.querySelector('.end-container').style.display = "block";    //displaying searched value
    }

});
}


function GetInfo(city) {

    fetch(`${dayweatherApi.baseUrl}?q=${city}&appid=${dayweatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(displayWeatherforecast);


}


function displayWeatherforecast(weather)
{
    console.log(weather);

    for(i = 0; i<5; i++){
        document.getElementById(`day${i + 1}Max`).innerHTML = "Max: " + Math.round(weather.list[i].main.temp_max ) + "°C";
    }

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Math.round(weather.list[i].main.temp_min )+ "°C";
    }

    for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        weather.list[i].weather[0].icon
        +".png";
    }

}

//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }
