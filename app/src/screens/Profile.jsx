import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import useGlobal from '../core/global'
import { launchImageLibrary } from 'react-native-image-picker'

function PrfilePageLogout() {

  const logout = useGlobal((state) => state.logout)
  return (
    <TouchableOpacity
      onPress={logout}
      style={{
        flexDirection: 'row',
        height: 52,
        borderRadius: 26,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 26,
        backgroundColor: '#202020',
        marginTop: 40,
      }}>

      <FontAwesomeIcon icon='right-from-bracket' size={20} color='white' style={{ marginRight: 12 }} />
      <Text style={{ fontWeight: 'bold', color: '#d0d0d0' }}>
        Logout
      </Text>

    </TouchableOpacity>
  )
}


function ProfileImage() {
  return (<TouchableOpacity
    onPress={() => {
      launchImageLibrary({}, (res) => {
        console.log(res)
      })
    }}
  >

    <View
      style={{ width: 100, height: 100, backgroundColor: 'gray', borderRadius: 50 }}
    />
    <View style={{

      position: 'absolute',
      bottom: 0,
      right: 0,
      backgroundColor: '#202020',
      width: 40, height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      borderColor: 'white',
    }}
    >


      <FontAwesomeIcon icon={'pencil'} size={15} color='white' />
    </View>

  </TouchableOpacity>)
}

const Profile = () => {

  const user = useGlobal(state => state.user)
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      paddingTop: 100,
    }}
    >
      <ProfileImage />
      <Text
        style={{
          textAlign: 'center',
          color: '#303030',
          fontSize: 30,
          fontWeight: 'bold',
          marginTop: 6,
        }}
      >{user.username}</Text>
      <Text
        style={{
          textAlign: 'center',
          color: '#606060',
          fontSize: 14
        }}
      >@nick</Text>

      <PrfilePageLogout />


    </View>
  )
}

export default Profile