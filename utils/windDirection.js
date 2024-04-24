const windDirection = (degrees) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(degrees / (360.0 / directions.length)) % directions.length;
  return directions[index];
}

module.exports = windDirection
