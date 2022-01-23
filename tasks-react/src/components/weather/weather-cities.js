function WeatherCities({cities, setCity}) {
  return (
    <div>
    {cities.map(option => (
      <button style={{margin: 10}} className="button" key={option} onClick={() => {
        setCity(option);
      }}>{option}</button>
    ))}
  </div>
  )
}

export default WeatherCities;