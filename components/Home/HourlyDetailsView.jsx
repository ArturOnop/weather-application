import {FlatList, Text, View} from "react-native";
import {useSelector} from "react-redux";
import uviSelector from "../../utils/uviSelector";

const HourlyDetailsView = ({tab}) => {

  const weather = useSelector(state => state.weather)

  const renderContent = () => {
    switch (tab) {
      case 'precipitation':
        return (
          <View className="my-2 bg-white rounded-2xl py-4 flex shadow shadow-slate-800">
            <View className="ml-4">
              <Text>Today's amount</Text>
              <Text className="text-2xl font-semibold">{weather.dailyForecast[0].precipitation}mm</Text>
            </View>
            <FlatList
              className="mt-8"
              showsVerticalScrollIndicator={false}
              horizontal
              data={weather.hourlyForecast}
              renderItem={({item}) => {
                return (
                  <View className="mx-4 gap-y-2">
                    <Text className="text-center font-semibold">{item.precipitation}</Text>
                    <View className="mt-5 flex items-center gap-y-2">
                      <Text
                        className={`w-8 border border-gray-500 rounded mb-[-2px]
                        ${+item.precipitation > 1 ? 'bg-blue-400'
                          : +item.precipitation > 0 ? 'bg-blue-200'
                            : 'bg-transparent'}`}> </Text>
                      <Text>{item.time}</Text>
                    </View>
                  </View>
                )
              }}>
            </FlatList>
          </View>
        );
      case 'wind':
        return (
          <View className="my-2 bg-white rounded-2xl py-4 flex shadow shadow-slate-800">
            <View className="ml-4">
              <Text>Today's high</Text>
              <Text className="text-2xl font-semibold">{weather.dailyForecast[0].windSpeed}km/h</Text>
            </View>
            <FlatList
              className="mt-8"
              showsVerticalScrollIndicator={false}
              horizontal
              data={weather.hourlyForecast}
              renderItem={({item}) => {
                return (
                  <View className="mx-4 gap-y-2">
                    <Text className="text-center font-semibold">{item.windDirection}</Text>
                    <View className="mt-5 flex items-center gap-y-2">
                      <Text>{item.windSpeed}</Text>
                      <Text>{item.time}</Text>
                    </View>
                  </View>
                )
              }}>
            </FlatList>
          </View>
        );
      case 'uv':
        return (
          <View className="my-2 bg-white rounded-2xl py-4 flex shadow shadow-slate-800">
            <View className="ml-4">
              <Text>Today's high</Text>
              <Text className="text-2xl font-semibold">{weather.dailyForecast[0].uvIndex}</Text>
            </View>
            <FlatList
              className="mt-8"
              showsVerticalScrollIndicator={false}
              horizontal
              data={weather.hourlyForecast}
              renderItem={({item}) => {
                return (
                  <View className="mx-4 gap-y-2">
                    <Text className="text-center font-semibold">{item.uvIndex}</Text>
                    <View className="mt-5 flex items-center gap-y-2">
                      <Text>{uviSelector(+item.uvIndex)}</Text>
                      <Text>{item.time}</Text>
                    </View>
                  </View>
                )
              }}>
            </FlatList>
          </View>
        );
      case 'humidity':
        return (
          <View className="my-2 bg-white rounded-2xl py-4 flex shadow shadow-slate-800">
            <View className="ml-4">
              <Text>Today's average</Text>
              <Text className="text-2xl font-semibold">{weather.dailyForecast[0].humidity}%</Text>
            </View>
            <FlatList
              className="mt-8"
              showsVerticalScrollIndicator={false}
              horizontal
              data={weather.hourlyForecast}
              renderItem={({item}) => {
                return (
                  <View className="mx-4 gap-y-2">
                    <Text className="text-center font-semibold">{item.humidity}%</Text>
                    <View className="mt-5 flex items-center gap-y-2">
                      <Text> </Text>
                      <Text>{item.time}</Text>
                    </View>
                  </View>
                )
              }}>
            </FlatList>
          </View>
        );
      default:
        return null;
    }
  };

  return renderContent();
}
export default HourlyDetailsView
