import { SafeAreaView } from 'react-native-safe-area-context'
import { ImageBackground, Text, StyleSheet, View } from 'react-native'
import { useEffect } from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export const Splash = (props) => {
    const navigation = props.nav

    const BGIMG = { uri: 'https://i.ibb.co/C1L3wSC/13186366-5125962.jpg' }

    useEffect(() => {
        setTimeout(() => {
            navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
        }, 250000)
    }, [navigation])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.welcome}>
              <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 10 }}>
                <FontAwesome5 name="plug" size={32} color="black" alignItems='center'/>
              </View>
                <Text style={styles.welcomeText}>Copyright ©2023 Plug All Rights Reserved</Text>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    welcome: {
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'center',
    },
    welcomeText: {
        fontSize: 12,
        fontWeight: '900',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black',
        marginBottom: 10,
    },
})