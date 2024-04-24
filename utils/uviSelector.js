const uviSelector = (uvi) => {
  if (uvi < 3) {
    return 'Low';
  } else if (uvi < 6) {
    return 'Moderate';
  } else if (uvi < 8) {
    return 'High';
  } else if (uvi < 11) {
    return 'Very high';
  } else if (uvi === 11) {
    return 'Extreme';
  } else {
    return 'Unknown';
  }
}

module.exports = uviSelector