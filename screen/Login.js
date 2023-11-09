import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Image, TouchableOpacity, Text, Alert } from 'react-native'
import regStyles from './styleSheet/screenStyle'
import { useState } from 'react'
import AuthInput from '../components/AuthInput'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import axios from 'axios';
import { linkURL } from '../config'
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Login = () => {

  const PlugLogo = { uri: 'https://i.ibb.co/HCvqLBx/plug.png'}
  const [visible, setVisible] = useState(false)
  const [show, setShow] = useState(false)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()

  const onLogin =  () =>{
    if(username && password ){
    axios.post(linkURL+'/api/login',{
      username:username, 
      password:password
    })
    .then(response => {
      if (response.status === 401){
        Alert.alert(response.data.error)
      }
      Alert.alert('สำเร็จ')
      AsyncStorage.setItem("username",response.data.oo[0].username)
      console.log(response.data.oo[0])
      navigation.navigate('BottomNav')
    })
    .catch(error => {
      // เกิดข้อผิดพลาด
      Alert.alert("login ไม่สำเร็จ")
    });
  }else{
    Alert.alert("Login failed")
  }
}

//   axios.post(linkURL+'/api/login',{
//     username:credential.username, 
//     password:credential.password
//   })
// .then(response => {
//   // สำเร็จ
//   Alert.alert(response.data.username)
//   console.log(response.data.username)
// })
// .catch(error => {
//   // เกิดข้อผิดพลาด
//   console.error('เกิดข้อผิดพลาด:', error);
// });


  const onLoginPress = () => {
    signInEmailPass(username, password, success, unsuccess)
  }

  const onShow = () =>{
    setShow(!show)
    setVisible(!visible)
  }

  const onSignUpPress = () => {
    navigation('Register')
  }
  const onForgotPress = () => {
    navigation('ForgotPass')
  }

  const handleForgotPass = () =>{
    navigation.navigate('ForgotPass')
  }

  const handleRegister = () =>{
    navigation.navigate('Register')
  }

  const handleBottom = () =>{
    navigation.navigate('BottomNav')
  }

  return (
    <SafeAreaView style={regStyles.container}>
      <View style = {{ flex: 5, alignItems:'center'}}>
          <Image source = {PlugLogo} style = {{ flex:1, alignItems: 'center', width: '100%',height:'100%'}}/>
        </View>
        <View style={{flex:2, justifyContent: 'flex-end', marginTop:10,marginBottom:10}}>
          <AuthInput placeholder= 'UserName' secureTextEntry= {false} value= {username} onChangeText= {(text) => setUsername(text)} />
        <View style={regStyles.separator} />
        <View style={{flex:1, justifyContent: 'flex-end', marginTop:10,marginBottom:10}}>
        <AuthInput placeholder= 'Password' secureTextEntry= {show} value= {password} onChangeText= {(text) => setPassword(text)} />
        <TouchableOpacity style ={{position:'absolute',right:10, top:10, }}>
          <MaterialCommunityIcons
          name={visible?'eye-outline':'eye-off'}
          size={25}
          color= 'grey'
          onPress={onShow}
          />
        </TouchableOpacity>
        </View>
        <View style={regStyles.separator} />
        <View style= {{ flex: 2, justifyContent: 'center', flexDirection: 'column', borderWidth: 0}}>
        <View style={{  flex: 2, flexDirection: 'row', padding: 5, borderWidth: 0, justifyContent: 'center' }}>
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 10, paddingRight: 10 }}>
          <TouchableOpacity
            onPress={handleRegister}
          >
            <Text style={{ fontSize: 15, color: '#0099FF', textDecorationColor: 'blue' }}>สร้างบัญชี</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-end', paddingRight: 10 }}>
          <TouchableOpacity
            onPress={handleForgotPass}
          >
            <Text style={{ fontSize: 15, color: '#0099FF', textDecorationColor: 'blue' }}>ลืมรหัสผ่าน</Text>
          </TouchableOpacity>
        </View>
        </View>
        </View>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#0099FF',marginTop: 20, borderRadius: 40, height:30 }}
            onPress={onLogin}>
            <Text style= { regStyles.boldText }>Login</Text>
          </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, color: 'white', justifyContent: 'center', alignItems: 'center', fontWeight: '800' }}>Create by Smart Plug</Text>
      </View>
    </SafeAreaView>
  )
}