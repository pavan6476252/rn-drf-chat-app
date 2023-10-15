import { View, Text, TouchableOpacity, Image, } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from './Profile'
import Friends from './Friends'
import Requests from './Requests'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import '../other/fa_config'

const Tab = createBottomTabNavigator()
const Home = ({ navigation }) => {
 
  useLayoutEffect(() => {
    navigation.setOptions({
      hearShown: false
    })
    return () => {
    };
  }, [])


  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerLeft: () => <View style={{ marginLeft: 16 }}>
          <Image source={require('../../assets/profile-icon.png')} style={{ width: 28, height: 28, borderRadius: 14 }} />
        </View>,
        headerRight: () => (
          <TouchableOpacity>
            <FontAwesomeIcon
              style={
                { marginRight: 10 }} icon='magnifying-glass' size={22} color='#404040' />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ focused , color ,size}) => {
          const icons = {
            Requests: 'bell',
            Friends: 'inbox',
            Profile: 'user'
          }
          const icon = icons[route.name]

          return <FontAwesomeIcon icon={icon} size={28} color={color} />

        }
        , tabBarActiveTintColor: '',
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name='Requests' component={Requests} />
      <Tab.Screen name='Friends' component={Friends} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator >
  )
}

export default Home