import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { linkURL } from '../config'

export default HomeMenuView = () => {
  const [check,setCheck] = useState(0)
  const [msg,setMsg] = useState('Power off')

  axios.post(linkURL+'/api/setmode',{
    mode:check,
  })
  .then(response => {
    Alert.alert('สำเร็จ')
    console.log(response.data)
  })
  .catch(error => {
    // เกิดข้อผิดพลาด
    Alert.alert("ไม่สำเร็จ")
  });

  const onPress =()=>{
    setCheck(check===0? 1:0)
    if(check){
      setMsg('Power On')
    }else{
      setMsg('Power Off')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',color:'white'}}>Smart Plug</Text>
        <View style={{flex:1,alignItems:'center'}}>
          <TouchableOpacity style={styles.menuBox} onPress={onPress}>
            <FontAwesome name="power-off" size={100} color={check?"red":"green"} />
          </TouchableOpacity>
        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',color:'white'}}>{msg}</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 140,
    backgroundColor: 'black',
    justifyContent:'center',
    alignItems:'center'
  },
  menuBox: {
    backgroundColor: '#0099FF',
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    borderRadius:100
    
  },
})