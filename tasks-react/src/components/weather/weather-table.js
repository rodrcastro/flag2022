function WeatherTable({forecast}) {
  console.log(forecast);
  return (
  <table>
    <thead>
      <tr>
        <th>Day</th>
        <th>Temperature</th>
        <th>Wind</th>
      </tr>
    </thead>
    <tbody>
      {forecast?.map(item => (
        <tr>
          <td style={{textAlign: 'center'}}>{item.day}</td>
          <td style={{textAlign: 'center'}}>{item.temperature}</td>
          <td style={{textAlign: 'center'}}>{item.wind}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default WeatherTable