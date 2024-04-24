const unixTimeToTime = (unixTime, timeOffset) => {
  return new Date((unixTime + timeOffset) * 1000).toUTCString().slice(17, 22)
}

const unixTimeToDateAndDay = (unixTime, timeOffset) => {
  return {
    date: new Date((unixTime + timeOffset) * 1000).toUTCString().slice(5, 11),
    day: new Date((unixTime + timeOffset) * 1000).toUTCString().slice(0, 3)
  }
}

module.exports = {
  unixTimeToTime,
  unixTimeToDateAndDay
}