import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Title from '../common/Title'
import Input from '../common/Input'
import Button from '../common/Button'
import api from '../core/api'
import utils from '../core/utils'
import useGlobal from '../core/global'

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [reTypePassword, setreTypePassword] = useState('')

  // errors states 

  const [usernameError, setUsernameError] = useState('')
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [reTypePasswordError, setreTypePasswordError] = useState('')
  const login = useGlobal((state) => state.login)



  function handleSubmit() {

    // check first name 
    const failUserName = !username || username.length < 5
    if (failUserName) {
      setUsernameError('Username must be >= 5 characters')
    }
    // check first name 
    const failFirstName = !firstName
    if (failFirstName) {
      setFirstNameError('First Name was not provided')
    }
    // check first name 
    const failLastName = !lastName
    if (failLastName) {
      setLastNameError('Last Name was not provided')
    }
    // check first name 
    const failPass = !password || password < 8
    if (failPass) {
      setPasswordError('Password is too short')
    }
    // check first name 
    const failPass2 = reTypePassword !== password
    if (failPass2) {
      setreTypePasswordError('Password don\t match')
    }

    if (failUserName ||
      failFirstName ||
      failLastName ||
      failPass ||
      failPass2) {
      return
    }

    api({
      method: "POST",
      url: '/chat/signup/',
      data: {
        username: username,
        first_name: firstName,
        last_name: lastName,
        password: password
      }
    }).then(res => {

      const creadentials = {
        username: username,
        password: password,
      }

      login(creadentials, res.data.user)
      utils.log('signUp ', res.data)

    }).catch(function (error) {
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
      <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 15 }}>
        <Text style={{
          textAlign: 'center', marginBottom: 24, fontSize: 36,
          color: 'black', fontWeight: 'bold'
        }}>Sign Up</Text>

        <Input
          text={'username'}
          value={username}
          setValue={setUsername}
          error={usernameError}
          setError={setUsernameError}
        />

        <Input
          text={'First Name'}
          value={firstName}
          setValue={setFirstName}
          error={firstNameError}
          setError={setFirstNameError}
        />

        <Input
          text={'Lat Name'}
          value={lastName}
          setValue={setLastName}
          error={lastNameError}
          setError={setLastNameError}
        />

        <Input
          text={'Password'}
          value={password}
          setValue={setPassword}
          error={passwordError}
          setError={setPasswordError}
        />

        <Input
          text={'Retype Password'}
          value={reTypePassword}
          setValue={setreTypePassword}
          error={reTypePasswordError}
          setError={setreTypePasswordError}
        />

        <Button title={'Sign In'} onPress={handleSubmit} />

        <Text
          style={{ textAlign: 'center', marginTop: 40, color: 'gray' }}>
          Already have account?
          <Text
            style={{ color: 'blue' }}
            onPress={() => navigation.navigate('SignIn')}
          >
            Sign In
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Signup