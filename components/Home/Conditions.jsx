import {View, Text} from 'react-native'
import {useSelector} from "react-redux";
import windSelector from "../../utils/windSelector";
import uviSelector from "../../utils/uviSelector";

const Conditions = () => {

  const weather = useSelector(state => state.weather)

  return (
    <View className="flex-1 p-4">
      <Text className="text-lg font-semibold">Current conditions</Text>
      <View className="flex-1 flex-row justify-between h-80 my-2">
        <View className="flex justify-between basis-1/2 gap-2">
          <View className="bg-white rounded-xl flex-1 p-4 mb-3 justify-between shadow shadow-slate-800">
            <Text className="font-semibold">Wind</Text>
            <View className="flex flex-row gap-1 items-baseline">
              <Text className="font-semibold text-3xl">{weather.currentWindSpeed}</Text>
              <Text className="font-semibold">km/h</Text>
            </View>
            <Text className="text-xs">{weather.currentWindDirection} • {windSelector(weather.currentWindSpeed)}</Text>
          </View>
          <View className="bg-white rounded-xl flex-1 p-4 justify-between shadow shadow-slate-800">
            <Text className="font-semibold">Humidity</Text>
            <View className="flex flex-row gap-1 items-baseline">
              <Text className="font-semibold text-3xl">{weather.currentHumidity}</Text>
              <Text className="font-semibold text-lg">%</Text>
            </View>
            <Text className="text-xs">Dew point {weather.currentDewPoint}°</Text>
          </View>
        </View>
        <View className="flex justify-between basis-1/2 gap-2">
          <View className="bg-white rounded-xl flex-1 p-4 mb-3 justify-between shadow shadow-slate-800">
            <Text className="font-semibold">UV Index</Text>
            <Text className="font-semibold text-3xl">{weather.currentUvIndex}</Text>
            <Text className="text-xs">{uviSelector(weather.currentUvIndex)}</Text>
          </View>
          <View className="bg-white rounded-xl flex-1 p-4 justify-between shadow shadow-slate-800">
            <Text className="font-semibold">Pressure</Text>
            <Text className="font-semibold text-3xl">{weather.currentPressure}</Text>
            <Text className="text-xs">mBar</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Conditions