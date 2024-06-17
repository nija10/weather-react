import React, { useState } from "react";
import axios from "axios";
// import { Circles } from "react-loader-spinner";
import "./App.css";

// export default function Weather(props) {
//   function handleResponse(response) {
//     alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
//   }

//   let apiKey = "3a94f3778290bfeee61278505dbbe51d";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

//   axios.get(apiUrl).then(handleResponse);
//   return (
//     <Circles
//       height="80"
//       width="80"
//       color="#4fa94d"
//       ariaLabel="circles-loading"
//       wrapperStyle={{}}
//       wrapperClass=""
//       visible={true}
//     />
//   );
// }

export default function Weather() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");
  const [loaded, setLoaded] = useState(false);

  function cityUpdated(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function formSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(showWeather);
  }

  function showWeather(response) {
    setLoaded(true);
    let temp = Math.round(response.data.main.temp);
    let img = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    setMessage(
      <ul>
        <h2>{response.data.name}</h2>
        <li>Temperature: {temp}°C</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {response.data.wind.speed}km/h</li>
        <li>
          <img src={img} />
        </li>
      </ul>
    );
    console.log(response);
  }

  let form = (
    <form class="form">
      <input type="text" placeholder="enter a city.." onChange={cityUpdated} />
      <button type="submit" onClick={formSubmit}>
        Search
      </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h4>{message}</h4>
      </div>
    );
  } else {
    return form;
  }
}
