import {View, SafeAreaView, ScrollView, RefreshControl} from 'react-native'
import Home from './Home/Home'
import {Stack, useRouter} from "expo-router";
import SearchBar from "../components/SearchBar";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {fetchWeather} from "../redux/weatherSlice";
import backgroundSelector from "../utils/backgroundSelector";

const App = () => {
  const router = useRouter()

  const [refreshing, setRefreshing] = useState(false);
  const weather = useSelector(state => state.weather)
  const dispatch = useDispatch()

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(fetchWeather())
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    dispatch(fetchWeather())
  }, [])

  return (
    <SafeAreaView className={`flex-1 ${backgroundSelector(weather.currentWeatherCode)}`}>
      <Stack.Screen
        options={{headerShown: false}}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
        <View className="flex-1">
          <SearchBar/>
          <Home/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
