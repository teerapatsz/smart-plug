import {StyleSheet} from 'react-native'

const regStyles = StyleSheet.create({

  container : {
    flex : 2,
    backgroundColor: 'black',
  },
  inputContainer : {
    flex:4,
    // borderTopLeftRadius:40,
    // borderBottomRightRadius:40,
    backgroundColor:'black',
    paddingVertical:0,
    borderRadius:30,
    // paddingHorizontal:20,
    marginHorizontal: 30,
    marginVertical: '50%',
  },
  boldText: {
    fontWeight: '800',
    fontSize: 22,
    color: 'white'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    height: 1,
    borderWidth: 2,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})

export default regStyles