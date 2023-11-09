import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button, Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { useState } from 'react';
import axios from 'axios';
import { linkURL } from '../config'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const [username, setUsername] = useState('')
  const [firstname, setFirstname] = useState('')

  const onLogout = () =>{
    navigation.navigate('Login')
  }
  AsyncStorage.getItem("username")
  .then(data => setUsername(data))

  axios.post(linkURL+'/api/profile',{
    username:username
  })
  .then(response => {
    // สำเร็จ
    setFirstname(response.data.oo[0].firstname +" " + response.data.oo[0].lastname)
  })
  .catch(error => {
    console.log(error)
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatar}>{firstname[0]}</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{firstname}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Username:</Text>
          <Text style={styles.infoText}>{username}</Text>
        </View>
        <Button
          title="Log Out"
          onPress={onLogout}
        >
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  body: {
    marginTop:120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#0099FF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.16,
  },
  avatar: {
    fontSize: 72,
    fontWeight: '700',
  },
  nameContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color:'white'
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginRight: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#0099FF',
  },
});

export default Profile;