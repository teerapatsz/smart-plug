import { View, TextInput } from 'react-native'
import comStyles from './styles'

const AuthInput = (props) => {
  const{ secureTextEntry, value, onChangeText } = props

  return (
    <View style = {{ flex: 1}}>
      {secureTextEntry
      ?(<TextInput
      secureTextEntry = {true}
      style = {comStyles.inputbox}
      placeholder= {props.placeholder}
      placeholderTextColor= "gray"
      value= {value}
      onChangeText= {(text) => onChangeText(text)}
      ></TextInput>)
      : (<TextInput
      style = {comStyles.inputbox}
      placeholder= {props.placeholder}
      placeholderTextColor= "gray"
      value= {value}
      onChangeText= {(text) => onChangeText(text)}    
      ></TextInput>)
      }
    </View>
  )
}

export default AuthInput 