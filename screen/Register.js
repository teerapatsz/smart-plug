import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import regStyles from './styleSheet/screenStyle'
import AuthInput from '../components/AuthInput'
import {useNavigation} from '@react-navigation/native'
import axios from 'axios';
import { linkURL } from '../config'

export const Register = ({navigation}) => {


  const [profile,setProfile] = useState({'firstname':'','lastname':'','studentID':'','username':'','password':''})

  const setFirstname = (text) => {
    setProfile(oldValue => ({
      ...oldValue,
      firstname:text
    }))
  }

  const setLastname = (text) => {
    setProfile(oldValue => ({
      ...oldValue,
      lastname:text
    }))
  }

  const setUsername = (text) => {
    setProfile(oldValue => ({
      ...oldValue,
      username:text
    }))
  }

  const setPassword = (text) => {
    setProfile(oldValue => ({
      ...oldValue,
      password:text
    }))
  }

  const SignUp = () =>{
    if(profile.username && profile.password && profile.firstname  && profile.lastname){
      axios.post(linkURL+'/api/register',{
        username:profile.username, password:profile.password, firstname:profile.firstname, lastname:profile.lastname
      })
    .then(response => {
      // สำเร็จ
      Alert.alert("success")
      console.log(response.data.u)
      navigation.navigate('Login')
    })
    .catch(error => {
      // เกิดข้อผิดพลาด
      console.error('เกิดข้อผิดพลาด:', error);
    });
    }else{
      Alert.alert("กรอกข้อมูลให้ครบ")
    }
  }
  // const unsuccess = (msg) => {
  //   console.log(msg)
  //   Alert.alert(msg)
  // }np

  // const allSuccess = (doc) => {
  //   Alert.alert(`${doc.firstname} has been added to system`)
  //   dispatch(addProfile(profile))
  //   navigation.goBack()
  // }

  const onRegisterPress = () => {
    console.log(`profile ${profile.firstname}`)
    signUpEmailPass(profile,allSuccess,unsuccess)
  }

  const onCancelPress = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
    <Text style={{fontSize:40, paddingBottom:10,fontWeight:'bold', color:'white'}}>Registation</Text>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-glyphs/512/user-male-circle.png' }}
        />
        <AuthInput placeholder='Firstname' secureTextEntry={false} value={profile.firstname} onChangeText={(text) => setFirstname(text)} />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-filled/50/badge.png' }}
        />
        <AuthInput placeholder='Lastname' secureTextEntry={false} value={profile.lastname} onChangeText={(text) => setLastname(text)} />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-filled/50/username.png' }}
        />
        <AuthInput placeholder='Username' secureTextEntry={false} value={profile.username} onChangeText={(text) => setUsername(text)} />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-glyphs/512/key.png' }}
        />
        <AuthInput placeholder='Password' secureTextEntry={true} value={profile.password} onChangeText={(text) => setPassword(text)} />
      </View>
      <TouchableOpacity
        style={[styles.buttonContainer, styles.signupButton]}
        onPress={() => SignUp()}>
        <Text style={styles.signUpText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  signupButton: {
    backgroundColor: '#FF4DFF',
  },
  signUpText: {
    color: 'white',
  },
})