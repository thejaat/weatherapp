const apiKey = "0449795addd8abb51b7ae86df66e89b3";
const apirURL = "https://api.openweathermap.org/data/2.5/weather?";

let weatherApp = document.querySelector('.weatherapp')
let searchBox = document.querySelector(".input");
let searchBtn = document.querySelector(".inputbtn");
let alertbox = document.getElementById('alertBox')
let weatherImg = document.getElementById('weatherimg');



async function checkweatherdat(city) {
              
//   var response = await fetch(apirURL + `q=` + city + ` &appid=` + apiKey +  `&units=metric`) ;
  var response = await fetch(`${apirURL}q=${city}&appid=${apiKey}&units=metric`) ;
  var data = await response.json();
 

  if(data.cod != 200){
setTimeout(()=>{    alertbox.style.display = 'block'},1)
setTimeout(()=>{    alertbox.style.display = 'none'},1000)
searchBox.value = "";

  }else{
    document.querySelector(".temp").innerHTML  = Math.trunc(data.main.temp)+ `°c`;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".airSpeed").innerHTML = data.wind.speed + ` Km/h`
    document.querySelector(".humidityper").innerHTML = data.main.humidity + ` %`;

    if(data.weather[0].main == 'Clouds'){
    weatherImg.src = "./img/clouds.png";
    weatherApp.style.background = "linear-gradient(145deg, rgba(38, 40, 39, 0.5),rgba(0, 0, 0, 0.234))"
}
   else if(data.weather[0].main == 'Clear'){
    weatherImg.src = "./img/clear.png";
    weatherApp.style.background = "linear-gradient(145deg, rgba(72, 186, 232, 0.686),rgba(23, 181, 238, 0.572))"

    }
    else if(data.weather[0].main == 'Rain'){
    weatherImg.src = "./img/rain.png";
    weatherApp.style.background = "linear-gradient(145deg, rgb(36, 36, 36),rgba(23, 181, 238, 0.572))"

    }
    else if(data.weather[0].main == 'Drizzle'){
    weatherImg.src = "./img/drizzle.png";
    weatherApp.style.background = "linear-gradient(145deg, rgba(72, 186, 232, 0.686),rgba(23, 181, 238, 0.572))"

    }
    else if(data.weather[0].main == 'Mist'){
    weatherImg.src = "./img/mist.png";
    weatherApp.style.background = "linear-gradient(145deg, rgba(142, 196, 218, 0.686),rgba(23, 181, 238, 0.572))"

    }
    else{
console.log('error')

    }
    searchBox.value = "";

  }
}

searchBtn.addEventListener('click',(event)=>{
    event.preventDefault()
    checkweatherdat(searchBox.value.toUpperCase());
})
// searchBox.addEventListener('keydown',(event)=>{
// event.preventDefault()
//     if (event.code != "Enter") {  
//         checkweatherdat(searchBox.value.toUpperCase());  
//     }
//     else{
//         console.log('error')
//     }
// })



