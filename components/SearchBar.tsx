import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface Props {
  placeholder: string;
  onPress?: () => void;
  value: string;
  onChangeText: (text: string) => void;
}


const SearchBar = ( {placeholder, onPress, value, onChangeText}: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 px-5 py-4 rounded-full">
      <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bbf"/>
      <TextInput onPress={onPress}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#a5a5a5"
      className="flex-1 ml-2 text-white"/>
    </View>
  )
}

export default SearchBar