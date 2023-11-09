import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNav } from './screen/Navigate/StackNav'
import { ForgotPass } from './screen/ForgotPass'
import { Login } from './screen/Login'
import { Splash } from './screen/Splash'
import Home from './screen/Home'
import { Register } from './screen/Register'
import History from './screen/History'
import Profile from './screen/Profile'

const Stack = createStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="StackNav"
            component={StackNav}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

