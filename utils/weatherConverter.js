const windDirection = require("./windDirection");
const {unixTimeToTime, unixTimeToDateAndDay} = require("./timeConverter");

const weatherConverter = data => {
  const currentTemp = Math.round(data.current.temp).toString()
  const currentFeelsLike = Math.round(data.current.feels_like).toString()
  const currentWeatherCode = data.current.weather[0].main
  const currentWindDirection = windDirection(data.current.wind_deg).toString()
  const currentWindSpeed = Math.round(data.current.wind_speed * 3.6).toString()
  const currentUvIndex = Math.round(data.current.uvi).toString()
  const currentDewPoint = Math.round(data.current.dew_point).toString()
  const currentHumidity = Math.round(data.current.humidity).toString()
  const currentPressure = Math.round(data.current.pressure).toString()

  const hourlyForecast = data.hourly.slice(0, 24).map(hour => {
    return {
      time: unixTimeToTime(hour.dt, data.timezone_offset),
      temp: Math.round(hour.temp).toString(),
      weatherCode: hour.weather[0].main,
      windDirection: windDirection(hour.wind_deg),
      windSpeed: Math.round(hour.wind_speed * 3.6).toString(),
      uvIndex: Math.round(hour.uvi).toString(),
      dewPoint: Math.round(hour.dew_point).toString(),
      humidity: Math.round(hour.humidity).toString(),
      pressure: Math.round(hour.pressure).toString(),
      precipitation: hour.rain ? hour.rain['1h'].toString() : hour.snow ? hour.snow['1h'].toString() : '0'
    }
  })

  const dailyForecast = data.daily.slice(0, 7).map(day => {
    const dateAndDay = unixTimeToDateAndDay(day.dt, data.timezone_offset)
    return {
      date: dateAndDay.date,
      day: dateAndDay.day,
      sunrise: unixTimeToTime(day.sunrise, data.timezone_offset),
      sunset: unixTimeToTime(day.sunset, data.timezone_offset),
      tempMin: Math.round(day.temp.min).toString(),
      tempMax: Math.round(day.temp.max).toString(),
      weatherCode: day.weather[0].main,
      windDirection: windDirection(day.wind_deg).toString(),
      windSpeed: Math.round(day.wind_speed * 3.6).toString(),
      uvIndex: Math.round(day.uvi).toString(),
      dewPoint: Math.round(day.dew_point).toString(),
      humidity: Math.round(day.humidity).toString(),
      pressure: Math.round(day.pressure).toString(),
      precipitation: day.rain && day.snow ? (day.rain + day.snow).toString()
        : day.rain ? day.rain.toString() : day.snow ? day.snow.toString() : '0'
    }
  })

  return {
    currentTemp,
    currentFeelsLike,
    currentWeatherCode,
    currentWindDirection,
    currentWindSpeed,
    currentUvIndex,
    currentDewPoint,
    currentHumidity,
    currentPressure,
    hourlyForecast,
    dailyForecast
  }
}

module.exports = weatherConverter
