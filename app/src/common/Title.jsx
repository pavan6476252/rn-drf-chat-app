import { View, Text } from 'react-native'
import React from 'react'

const Title = ({ text, color }) => {
  return (
    <View >
      <Text style={{
        textAlign: 'center',
        marginBottom: 30,
        color: color, fontSize:
          48
      }}>{text}</Text>
    </View>
  )
}

export default Title