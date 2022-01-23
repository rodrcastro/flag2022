import { useState, useEffect, useContext } from "react";

import { WeatherContext } from "../../contexts/weather-context";

import WeatherCities from "./weather-cities";
import WeatherTable from "./weather-table";

function Weather() {
  const [city, setCity] = useState('Porto');
  const [weatherInfo, setWeatherInfo] = useState({});
  const cities = ['Porto', 'Lisboa', 'Madrid', 'Barcelona', 'Glasgow', 'Paris', 'Berlim'];
  const [isLoading, setIsLoading] = useState(false);

  const {setWeather} = useContext(WeatherContext);

  useEffect(() => {
    /* O que está dentro do effect pode ser async, não o useEffect em si */
    async function fetchWeather()  {
      setIsLoading(true);

      const response = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
      const result = await response.json();
      setWeatherInfo(result);
      setWeather(result);

      setIsLoading(false);
    };

    fetchWeather();
  }, [city, setIsLoading, setWeather]);

  return (
    <div>
      <h2>Weather for {city}</h2>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <p><strong>Description</strong></p>
            {weatherInfo.description}
          <p><strong>Temperature</strong></p>
            {weatherInfo.temperature}
          <p><strong>Wind</strong></p>
            {weatherInfo.wind}
        <WeatherTable forecast={weatherInfo.forecast}/>
        </div>
      )}
      <WeatherCities cities={cities} setCity={setCity} />
    </div>
  )
};

export default Weather;