import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Title from '../common/Title'


export default function Button({ title,onPress }) {
    return (<TouchableOpacity 
        onPress={onPress}
        style={{
            backgroundColor: '#202020',
            height: 52, borderRadius: 26, alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20
        }}
    >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{title}</Text>
    </TouchableOpacity>)
}