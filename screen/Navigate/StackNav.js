import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Login} from '../Login'
import {ForgotPass} from '../ForgotPass'
import {Register} from '../Register'
import {BottomNav} from './BottomNav'

const Stack = createNativeStackNavigator()


export const StackNav = () => {
  return (
    <Stack.Navigator screenOptions= {{ headerShown: false}}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="ForgotPass" component={ForgotPass} options={{ headerShown: true }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: true }} />
      <Stack.Screen name="BottomNav" component={BottomNav}/>
    </Stack.Navigator>
  )
} 