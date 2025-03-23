const key = '88de58a94dded5c4a937e34b6cdadea9';

function putData(data) {
  console.log(data);
  document.querySelector('.city').innerHTML = 'Weather in ' + data.name;
  document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + '°C';
  document.querySelector('.text-temp').innerHTML = data.weather[0].description;
  document.querySelector('.humidity').innerHTML =
    'humidity ' + data.main.humidity + '%';
}

async function findCity(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`,
  ).then((response) => response.json());
  putData(data);
}

function clickOnButton() {
  const city = document.querySelector('.input-city').value;
  findCity(city);
}
