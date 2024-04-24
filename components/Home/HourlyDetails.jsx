import {View, Text, TouchableOpacity} from 'react-native'
import {useState} from "react";
import HourlyDetailsView from "./HourlyDetailsView";

const HourlyDetails = () => {

  const [tab, setTab] = useState('precipitation');

  return (
    <View className="flex-1 p-4 pb-4">
      <Text className="text-lg font-semibold">Hourly details</Text>
      <View className="my-2">
        <View className="flex flex-row gap-2">
          <TouchableOpacity onPress={() => setTab('precipitation')} className="bg-slate-900 rounded-xl p-3">
            <Text className="text-white">Precipitation</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTab('wind')} className="bg-slate-900 rounded-xl p-3">
            <Text className="text-white">Wind</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTab('humidity')} className="bg-slate-900 rounded-xl p-3">
            <Text className="text-white">Humidity</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTab('uv')} className="bg-slate-900 rounded-xl p-3">
            <Text className="text-white">UVI</Text>
          </TouchableOpacity>
        </View>
        <HourlyDetailsView tab={tab}/>
      </View>
    </View>
  )
}

export default HourlyDetails