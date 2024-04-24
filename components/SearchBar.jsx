import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {setLocation} from "../redux/locationSlice";
import {fetchWeather} from "../redux/weatherSlice";
import {useEffect} from "react";

const SearchBar = () => {
  const location = useSelector(state => state.location)
  const weather = useSelector(state => state.weather)
  const dispatch = useDispatch()

  const handleSearch = () => {
    dispatch(fetchWeather())
  };

  return (
    <View className="flex flex-row items-center justify-around mt-8 px-4 h-20">
      <TextInput
        className="rounded-3xl p-3 flex-1 text-xl font-semibold bg-white shadow shadow-slate-800"
        value={location.location}
        onChangeText={text => dispatch(setLocation(text))}
        placeholder="Location"
        onSubmitEditing={handleSearch}
        textAlign="center"
      />
    </View>
  );
};

export default SearchBar