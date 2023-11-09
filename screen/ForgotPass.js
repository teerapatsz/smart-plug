import { StyleSheet, View, Text, Alert,TouchableOpacity} from 'react-native'
import AuthInput from '../components/AuthInput'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const ForgotPass = (props) => {
  const navigation = props.nav
  
  const[email, setEmail] = useState('')

  const onSend = () => {
    setEmail()
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={[{ flex: 3},styles.inputContainer]}>
        <View style = {{ flex: 3, padding: 0, borderWidth: 0, alignItems:'center'}}>
          <MaterialCommunityIcons name="email-check" size={24} color="black" />
        </View>
        <AuthInput placeholder= 'Email' hidePass= {false} value= {email} onChangeText= {(text) => setEmail(text)} />
        <View style= {{ flex: 2, justifyContent: 'center', flexDirection: 'column', borderWidth: 0}}>
        <View style={{  flex: 2, flexDirection: 'row', padding: 5, borderWidth: 0, justifyContent: 'center' }}>
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-end', paddingRight: 10 }}>
        </View>
        </View>
        </View>
          <TouchableOpacity
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue',marginTop: 20, borderRadius: 40 }}
            onPress={onSend}>
            <Text style= { styles.boldText }>Login</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  inputContainer: {
    flex: 4,
    backgroundColor: 'white'
  },
  boldText: {
    fontWeight: '800',
    fontSize: 22,
    color: 'white'
  },
});