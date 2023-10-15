import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Title from '../common/Title'


function Input({ text, value, setValue, error, setError }) {
    return (
        <View>
            <Text style={{ color: error ? '#ff5555' : '#70747a', marginVertical: 6, paddingLeft: 16 }} >{error ? error : text}</Text>
            <TextInput
                value={value}
                onChangeText={text => {
                    if (error) {
                        setError('')
                    }
                    setValue(text)
                }}
                
                style={{
                    backgroundColor:
                        '#e1e2e4',
                    borderRadius: 26, paddingHorizontal: 16, fontSize: 16
                }}


            />
        </View>
    )
}


export default Input;