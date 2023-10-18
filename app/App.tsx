import { View, Text, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Message from './src/screens/Message';
import Search from './src/screens/Search';
import SignIn from './src/screens/SignIn';
import Signup from './src/screens/Signup';
import useGlobal from './src/core/global';

const stack = createNativeStackNavigator();


const lightTheme: Theme = {
  colors: { ...DefaultTheme.colors, text: 'black' },
  dark: false,

}

const App = () => {


  const initialized = useGlobal((state) => state.initialized)
  const authenticated = useGlobal((state) => state.authenticated)
  const init = useGlobal(state => state.init)
  useEffect(() => {
    init()
  }, [])
  return (
    <NavigationContainer theme={lightTheme}>
      <StatusBar barStyle='dark-content' />

      <stack.Navigator
        screenOptions={{ headerShown: false }}
      >

        {
          !initialized ? (
            <stack.Screen name='splash' component={Splash} />

          ) : !authenticated ? (
            <>
              <stack.Screen name='SignIn' component={SignIn} />
              <stack.Screen name='SignUp' component={Signup} />
            </>
          ) : (
            <>
              <stack.Screen name='Home' component={Home} />
              <stack.Screen name='Search' component={Search} />
              <stack.Screen name='Message' component={Message} />
            </>
          )
        }
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App