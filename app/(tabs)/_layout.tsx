import { Text, ImageBackground, Image, View } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const TabIcon = ({ icon, focused, title }: { icon: any; focused: boolean; title: string }) => {
  return (
    // Parent container centers the button in the tab slot
    <View className="flex-1 justify-center items-center w-full">
      {focused ? (
        <ImageBackground
          source={images.highlight}
          // resizeMode="contain"
          className="flex-row w-[113px] h-[56px] mt-4 justify-center items-center rounded-full overflow-hidden"
        >
          <Image 
            source={icon} 
            tintColor="#151312" 
            className="w-5 h-5" // Fixed size for icon
            resizeMode="contain"
          />
          {/* Text is small enough to fit inside the 90px width */}
          <Text className="text-[#151312] text-[13px] font-bold ml-1" numberOfLines={1}>
            {title}
          </Text>
        </ImageBackground>
      ) : (
        <View className="justify-center items-center w-full h-full mt-4">
          <Image 
            source={icon} 
            tintColor="#8AB5DB" 
            className="w-6 h-6" 
            resizeMode="contain"
          />
        </View>
      )}
    </View>
  )
}

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarItemStyle: {
           width: '100%',
           height: '100%',
           justifyContent: 'center',
           alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: "#0f0d23",
          height: 55, // Tall enough for the pill
          borderRadius: 50,
          marginHorizontal: 10, // Reduced margin to give tabs more width (CRITICAL)
          marginBottom: 36, 
          position: 'absolute', 
          overflow: 'hidden',
          borderTopWidth: 1,
          borderTopColor: '#0f0d23',
          paddingTop: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          )
        }}
      />
      
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          )
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Saved" />
          )
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          )
        }}
      />
    </Tabs>
  )
}

export default _layout