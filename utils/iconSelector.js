const iconSelector = (weatherCode) => {
  switch (weatherCode) {
    case 'Thunderstorm':
      return require('../media/icons/thunderstorm.png')
    case 'Drizzle':
      return require('../media/icons/drizzle.png')
    case 'Rain':
      return require('../media/icons/rain.png')
    case 'Snow':
      return require('../media/icons/snow.png')
    case 'Atmosphere':
      return require('../media/icons/atmosphere.png')
    case 'Clear':
      return require('../media/icons/clear.png')
    case 'Clouds':
      return require('../media/icons/clouds.png')
    default:
      return require('../media/icons/clear.png')
  }
}

module.exports = iconSelector