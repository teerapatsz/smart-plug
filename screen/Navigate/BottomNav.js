import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import History from '../History'
import Home from '../Home'
import Profile from '../Profile'
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator()

export const BottomNav = () =>{
  return(
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'#8338ec' ,
        tabBarInactiveTintColor: 'white' ,
        tabBarStyle:{
          backgroundColor:'#0099FF'
        },
        }
      }
    >
      <BottomTab.Screen name="Home" component={Home} 
      options={{
        tabBarIcon: ({color, size }) => {
            return (
              <Ionicons
                name={'home'}
                color={color}
                size={size}
              />
            );
          }}} 
      />
      <BottomTab.Screen name="History" component={History} 
      options={{
        tabBarIcon: ({color, size }) => {
            return (
              <FontAwesome name="history" 
              size={size} 
              color={color} 
              />
            );
          }}} 
      />
      <BottomTab.Screen name="Profile" component={Profile} 
      options={{
        tabBarIcon: ({color, size }) => {
            return (
              <FontAwesome name="user" 
              size={size} 
              color={color}
              />
            );
          }}} 
      />
    </BottomTab.Navigator>
  )
}