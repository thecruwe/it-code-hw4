let input = document.querySelector('.entry-city');
let searchBtn = document.querySelector('.search-btn');
let image = document.querySelector('.weather-pic');


function getWeather() {
    let city = input.value;
    city.value = "";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=167c9e024671289a3a03692c7b9a2135&lang=ru`)
    .then (function(resp) { return resp.json() })
    .then (function (data) {
        console.log(image);
        let picUrl = "https://openweathermap.org/img/wn/"+ data.weather[0]['icon'] +"@2x.png"; // иконка погоды
        console.log(data); // можем вывести любую информацию, которую получаем по запросу. в консоли видно, что мы получаем
        document.querySelector('.city-name').innerHTML = data.name; // название города
        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + "&deg;"; // температура
        document.querySelector('.clouds').innerHTML = data.weather[0].description; // облачность
        document.querySelector('.wind').innerHTML = data.wind.speed + ' м/c'; // ветер
        document.querySelector('.humidity').innerHTML = data.main.humidity + ' %'; // влажность
        image.src = picUrl;
    })

    // function getGeo() {
    //     navigator.geolocation.getCurrentPosition((position)=> {
    //         const p=position.coords;
    //     })
    // } чтобы брать местоположение пользователя.
}


searchBtn.addEventListener("click", getWeather);