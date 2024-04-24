import {View, Text, FlatList, Image} from 'react-native'
import {useSelector} from "react-redux";
import iconSelector from "../../utils/iconSelector";

const Daily = () => {

  const weather = useSelector(state => state.weather)

  return (
    <View className="flex-1 p-4 pb-4">
      <Text className="text-lg font-semibold">7-day forecast</Text>
      <FlatList
        className="my-2"
        showsHorizontalScrollIndicator={false}
        data={weather.dailyForecast}
        renderItem={({item}) => {
          return (
            <View
              className="px-5 py-3 mx-[1px] my-[3px] flex flex-row justify-between bg-white rounded-xl items-center shadow-sm shadow-slate-800">
              <Text className="font-semibold">{item.day}</Text>
              <View className="flex flex-row w-28 justify-between items-center">
                <Image className="w-8 h-8" source={iconSelector(item.weatherCode)}/>
                <View className="flex flex-row gap-[1px]">
                  <Text className="font-semibold">{item.tempMax}°</Text>
                  <Text className="font-semibold">/</Text>
                  <Text className="font-semibold">{item.tempMin}°</Text>
                </View>
              </View>
            </View>
          )
        }}>
      </FlatList>
    </View>
  )
}

export default Daily