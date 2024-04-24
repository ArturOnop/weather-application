const windSelector = (windSpeed) => {
  if (windSpeed < 10) {
    return 'Light';
  } else if (windSpeed < 30) {
    return 'Moderate';
  } else if (windSpeed < 90) {
    return 'Strong';
  } else if (windSpeed >= 90) {
    return 'Storm';
  } else {
    return 'Unknown';
  }
}

module.exports = windSelector