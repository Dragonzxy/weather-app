var city;
const apiKey ="0105298f2f73df0cebd0626041020f0f"
const button =document.getElementById("btn")
const searchBox =document.getElementById("searchbox")
const temp =document.getElementById("temp")
const clouds =document.getElementById("clouds")
const humidity =document.getElementById("humidity")
const pressure =document.getElementById("pressure")
const cityName = document.getElementById("cityname");

const icon =document.getElementById("icon");

button.addEventListener("click", async()=>{
     event.preventDefault();
    city = await document.getElementById("searchbox").value.trim();
getWeather(city);
})

async function getWeather(city) 
{
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try{
    const request = await fetch(url);

    const response = await request.json()

console.log(response)
    

const iconCode = response.weather[0].icon;
cityName.innerText =response.name +"," +  response.sys.country;
temp.innerText=response.main.temp + "° C";
humidity.innerText=response.main.humidity +"%";
pressure.innerText=response.main.pressure + "Pa";
clouds.innerText=response.weather[0].description;


const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

document.getElementById("icon").src =iconUrl;



  }catch(error){
    console.error(error);
  }
}