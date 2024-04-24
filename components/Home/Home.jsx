import {Image, View} from 'react-native'
import Now from "./Now";
import Hourly from "./Hourly";
import Daily from "./Daily";
import Conditions from "./Conditions";
import HourlyDetails from "./HourlyDetails";
import SunriseSunset from "./SunriseSunset";

const Home = () => {
  return (
    <View className="w-full">
      <Now/>
      <Hourly/>
      <Daily/>
      <Conditions/>
      <SunriseSunset/>
      <HourlyDetails/>
    </View>
  )
}

export default Home