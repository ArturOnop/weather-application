const backgroundSelector = (weatherCode) => {
  switch (weatherCode) {
    case 'Thunderstorm':
      return 'bg-indigo-100'
    case 'Drizzle':
      return 'bg-zinc-200'
    case 'Rain':
      return 'bg-blue-100'
    case 'Snow':
      return 'bg-sky-50'
    case 'Atmosphere':
      return 'bg-violet-100'
    case 'Clear':
      return 'bg-yellow-50'
    case 'Clouds':
      return 'bg-stone-200'
    default:
      return ''
  }
}

module.exports = backgroundSelector