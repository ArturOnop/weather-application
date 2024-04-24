import {View, Text, Image} from 'react-native'
import {useSelector} from "react-redux";
import iconSelector from "../../utils/iconSelector";

const Now = () => {

  const weather = useSelector(state => state.weather)

  return (
    <View className="flex-1 px-4 pb-4">
      <Text className="text-lg font-semibold">Now</Text>
      <View className="flex-1 flex-row justify-between mt-2">
        <View className="flex-1">
          <View className="flex-1 flex-row gap-5">
            <Text className="text-6xl font-semibold">{weather.currentTemp}°</Text>
            <Image className="w-14 h-14" source={iconSelector(weather.currentWeatherCode)}
            />
          </View>
          <View className="flex-1 flex-row gap-2">
            <Text>High: {weather.dailyForecast[0].tempMax}°</Text>
            <Text>Low: {weather.dailyForecast[0].tempMin}°</Text>
          </View>
        </View>
        <View>
          <Text className="text-lg font-semibold">{weather.currentWeatherCode}</Text>
          <Text className="font-semibold">Feels like {weather.currentFeelsLike}°</Text>
        </View>
      </View>
    </View>
  )
}

export default Now