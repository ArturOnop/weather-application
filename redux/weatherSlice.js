import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import weatherConverter from "../utils/weatherConverter";

export const fetchWeather = createAsyncThunk("fetchWeather", async (_, {getState}) => {
  const {location} = getState().location;
  const latlon = (await axios.request({
    method: 'GET',
    url: `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=34b5d1906d79ca9b6045112776d6dcd5`,
    headers: {accept: 'application/json'}
  })).data[0]
  return (await axios.request({
    method: 'GET',
    url: `https://api.openweathermap.org/data/3.0/onecall?lat=${latlon.lat}&lon=${latlon.lon}&exclude=minutely,alerts&units=metric&appid=34b5d1906d79ca9b6045112776d6dcd5`,
    headers: {accept: 'application/json'}
  })).data
})

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    currentTemp: '8',
    currentFeelsLike: '7',
    currentWeatherCode: 'Clouds',
    currentWindDirection: 'N',
    currentWindSpeed: '7',
    currentUvIndex: '2',
    currentDewPoint: '2',
    currentHumidity: '63',
    currentPressure: '999',
    hourlyForecast: [
      {
        time: '12:00',
        temp: '8',
        weatherCode: 'Clear',
        windDirection: 'N',
        windSpeed: '7',
        uvIndex: '2',
        dewPoint: '2',
        humidity: '63',
        pressure: '999',
        precipitation: '0.0' // rain or snow
      }
    ], // 24 hours
    dailyForecast: [
      {
        date: 'April 22',
        day: 'Monday',
        sunrise: '10:00',
        sunset: '20:00',
        tempMax: '12',
        tempMin: '8',
        weatherCode: 'Cloudy',
        windDirection: 'N',
        windSpeed: '7',
        uvIndex: '2',
        dewPoint: '2',
        humidity: '63',
        pressure: '999',
        precipitation: '0.0'
      }
    ] // 10 days
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      const weather = weatherConverter(action.payload)
      state.currentTemp = weather.currentTemp
      state.currentFeelsLike = weather.currentFeelsLike
      state.currentWeatherCode = weather.currentWeatherCode
      state.currentWindDirection = weather.currentWindDirection
      state.currentWindSpeed = weather.currentWindSpeed
      state.currentUvIndex = weather.currentUvIndex
      state.currentDewPoint = weather.currentDewPoint
      state.currentHumidity = weather.currentHumidity
      state.currentPressure = weather.currentPressure
      state.hourlyForecast = weather.hourlyForecast
      state.dailyForecast = weather.dailyForecast
    })
    builder.addCase(fetchWeather.rejected, (state, action) => {
      console.log('error')
    })
  }
})

export const {} = weatherSlice.actions

export default weatherSlice.reducer