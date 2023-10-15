import { Animated, SafeAreaView, StatusBar, Text, View } from 'react-native'
import React, { Component, useEffect, useLayoutEffect } from 'react'
import Title from '../common/Title'

function Splash({ navigation }) {

  const translateY = new Animated.Value(0)
  const duration = 5000

  useLayoutEffect(() => {
    navigation.setOptions({
      hearShown: false
    })
    return () => {
    };
  }, [])

  useEffect(() => {
    Animated.loop(
      Animated.sequence([

        Animated.timing(translateY, {
          toValue: 20,
          duration: duration,
          useNativeDriver: true
        })
        , Animated.timing(translateY, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true
        })
      ]))
  }, [])

  return (
    <SafeAreaView>
      <StatusBar barStyle='light-content' />
      <View>
        <Title text='RealtimeChat' color='white' />
      </View>
    </SafeAreaView>
  )

}

export default Splash