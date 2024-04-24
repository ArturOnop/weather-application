import {useSelector} from "react-redux";
import {Text, View} from "react-native";

const SunriseSunset = () => {

  const weather = useSelector(state => state.weather)

  const dayPercentage = () => {
    const sunrise = weather.dailyForecast[0].sunrise
    const sunset = weather.dailyForecast[0].sunset
    const time = weather.hourlyForecast[0].time
    const res = ((Number(time.slice(0, 2)) - Number(sunrise.slice(0, 2))) / (Number(sunset.slice(0, 2)) - Number(sunrise.slice(0, 2)))).toFixed(2) * 100
    return res < 0 ? '0' : res > 100 ? '100' : res.toString()
  }


  return (
    <View className="flex-1 p-4">
      <Text className="text-lg font-semibold">Sunrise & sunset</Text>
      <View
        className="my-2 flex flex-row justify-between bg-white rounded-2xl py-4 px-4 shadow shadow-slate-800 items-center">
        <View className="flex items-center gap-2">
          <Text>Sunrise</Text>
          <Text className="font-semibold text-xl">{weather.dailyForecast[0].sunrise}</Text>
        </View>
        <View className="border w-1/2 rounded-xl p-1 h-6">
          <View className="flex items-center justify-center">
            <Text className={`absolute top-0 bottom-0 left-0 rounded-lg w-[${dayPercentage()}%] bg-slate-900`}></Text>
            <Text></Text>
          </View>
        </View>
        <View className="flex items-center gap-2">
          <Text>Sunset</Text>
          <Text className="font-semibold text-xl">{weather.dailyForecast[0].sunset}</Text>
        </View>
      </View>
    </View>
  )
}

export default SunriseSunset