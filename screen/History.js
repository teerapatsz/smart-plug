import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View, Alert, FlatList, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import axios from 'axios';
import { linkURL } from '../config'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default History = () => {
  const [data, setData] = useState({id:'', voltage:'', current:'', energy:'', frequency:'', pf:'',  power:'',temperture:''})

  const setId = (text) => {
    setData(oldValue => ({
      ...oldValue,
      id:text
    }))
  }

  const setVoltage = (text) => {
    setData(oldValue => ({
      ...oldValue,
      voltage:text
    }))
  }

  const setCurrent = (text) => {
    setData(oldValue => ({
      ...oldValue,
      current:text
    }))
  }
  const setEnergy = (text) => {
    setData(oldValue => ({
      ...oldValue,
      energy:text
    }))
  }
  const setFreq = (text) => {
    setData(oldValue => ({
      ...oldValue,
      frequency:text
    }))
  }

  const setPf = (text) => {
    setData(oldValue => ({
      ...oldValue,
      pf:text
    }))
  }

  const setPower = (text) => {
    setData(oldValue => ({
      ...oldValue,
      power:text
    }))
  }

  const setTemperture = (text) => {
    setData(oldValue => ({
      ...oldValue,
      temperture:text
    }))
  }

  // useEffect(() => {
  //   // Set a timeout to execute code after 2 seconds (2000 milliseconds)
  //   const timeoutId = setTimeout(() => {
  //     axios.get(linkURL+'/api/history')
  //     .then(response => {
  //   // AsyncStorage.setItem("username",response.data.oo[0].username)
  //   console.log(response.data.oo)
  //   console.log(response.data.oo[0].voltage)
  //   setVoltage(response.data.oo[0].voltage)
  //   setCurrent(response.data.oo[0].current)
  //   setId(response.data.oo[0].id)
  //   setEnergy(response.data.oo[0].energy)
  //   setFreq(response.data.oo[0].frequency)
  //   setPf(response.data.oo[0].pf)
  //   setPower(response.data.oo[0].power)
  //   setTemperture(response.data.oo[0].temperture)
  //     })
  //     .catch(error => {
  //   // เกิดข้อผิดพลาด
  //     Alert.alert("ไม่สำเร็จ")
  //     });
  //   }, 2000);

  //   // Clean up the timeout when the component unmounts
  //   return () => clearTimeout(timeoutId);
  // }, [setData]);

  useEffect(() => {
    // Set a timeout to execute code after 2 seconds (2000 milliseconds)
    const fetchApiData = () => {
      axios
        .get(linkURL + '/api/history')
        .then((response) => {
          // Handle the API response here
          const responseData = response.data.oo[0];
          console.log(responseData);
          setVoltage(responseData.voltage);
          setCurrent(responseData.current);
          setId(responseData.id);
          setEnergy(responseData.energy);
          setFreq(responseData.frequency);
          setPf(responseData.pf);
          setPower(responseData.power);
          setTemperture(responseData.temperture);
        })
        .catch((error) => {
          // Handle errors
          console.error('API request failed:', error);
        });
    };
  
    const intervalId = setInterval(fetchApiData, 4000);
  
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  


  return (
    <View style={styles.container}>
      
            <TouchableOpacity >
              <View style={styles.eventBox}>
                <View style={styles.eventDate}>
                  <Text style={styles.eventDay}>{data.id}</Text>
                  <Text style={styles.eventMonth}></Text>
                </View>
                <View style={styles.eventContent}>
                  <Text style={styles.eventTime}>Show info</Text>
                  <Text style={styles.description}>
                    Voltage: {data.voltage}
                  </Text>
                  <Text style={styles.description}>
                    Temperature: {data.temperture}
                  </Text>
                  <Text style={styles.description}>
                    current: {data.current}
                  </Text>
                  <Text style={styles.description}>
                    frequency: {data.frequency}
                  </Text>
                  <Text style={styles.description}>
                    pf: {data.pf}
                  </Text>
                  <Text style={styles.description}>
                    Power: {data.power}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
       
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DCDCDC',
  },
  eventList: {
    marginTop: 20,
  },
  eventBox: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
  },
  eventDate: {
    flexDirection: 'column',
  },
  eventDay: {
    fontSize: 50,
    color: '#0099FF',
    fontWeight: '600',
  },
  eventMonth: {
    fontSize: 16,
    color: '#0099FF',
    fontWeight: '600',
  },
  eventContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
  },
  description: {
    fontSize: 15,
    color: '#646464',
  },
  eventTime: {
    fontSize: 18,
    color: '#151515',
  },
  userName: {
    fontSize: 16,
    color: '#151515',
  },
})