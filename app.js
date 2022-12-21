const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=ad2b0774f75f75888587ffbf3192ec19&query=37.826,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//   console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out.  It feels like ${response.body.current.feelslike} degrees out`)
// })

// Geocoding
// Address -> Lat/Long -> Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Olympia.json?access_token=pk.eyJ1IjoibWljaGFlbC1nYWNldHRhIiwiYSI6ImNsYndxeTVxcTA5ZzczdnBqM2M2c2ZpZm4ifQ.Vv7tT2Eiivx1cmNz3aMPdg&limit=1'

request({ url: geocodeURL, json: true}, (error, response) => {
  const location = response.body.features[0]
  console.log(`Your location is ${location.center[0]}, ${location.center[1]}`)
})