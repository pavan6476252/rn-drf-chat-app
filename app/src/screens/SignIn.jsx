import { View, Text, SafeAreaView, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Title from '../common/Title'
import Input from '../common/Input'
import Button from '../common/Button'
import api from '../core/api'
import utils from '../core/utils'


const SignIn = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      hearShown: false
    })
    return () => {
    };
  }, [])


  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [userNameError, setUserNameError] = useState('')
  const [passError, setPassError] = useState('')

  function handleSignIn() {
    const failUsername = !userName

    if (failUsername) {
      setUserNameError('Username not provided')
    }
    const failPassword = !password

    if (failPassword) {
      setPassError('Password not provided')

    }
    if (failUsername || failPassword) {
      return
    }

    api({
      method: "POST",
      url: '/chat/signin/',
      data: {
        username: userName,
        password: password
      }
    }).then(res => utils.log('signin ' , res.data)).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 15 }}>
          <Text>dsfsf</Text>
          <Title text={'RealtimeChat'} color={'#202020'} />
          <Input text={'Username'} value={userName} setValue={setUserName} error={userNameError} setError={setUserNameError} />
          <Input text={'Password'} value={password} setValue={setPassword} error={passError} setError={setPassError} />
          <Button title={'Sign In'} onPress={handleSignIn} />
          <Text style={{ textAlign: 'center', marginTop: 40, color: 'gray' }}>
            Don't have account?
            <Text style={{ color: 'blue' }}
              onPress={() => navigation.navigate('SignUp')}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>

    </SafeAreaView>
  )
}

export default SignIn