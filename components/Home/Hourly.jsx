import {View, Text, FlatList, Image} from 'react-native'
import {useSelector} from "react-redux";
import iconSelector from "../../utils/iconSelector";

const Hourly = () => {

  const weather = useSelector(state => state.weather)

  return (
    <View className="flex-1 p-4 pb-4">
      <Text className="text-lg font-semibold">Hourly forecast</Text>
      <FlatList
        className="my-2 bg-white rounded-2xl py-4 shadow shadow-slate-800"
        showsVerticalScrollIndicator={false}
        horizontal
        data={weather.hourlyForecast}
        renderItem={({item}) => {
          return (
            <View className="mx-4 flex items-center">
              <Text className="font-semibold">{item.temp}°</Text>
              <View className="mt-6 flex items-center">
                <Image className="w-8 h-8" source={iconSelector(item.weatherCode)}/>
                <Text className="text-xs text-gray-700">{item.time}</Text>
              </View>
            </View>
          )
        }}>
      </FlatList>
    </View>
  )
}

export default Hourly