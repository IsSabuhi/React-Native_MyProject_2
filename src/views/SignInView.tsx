import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native'
import { Input, Text } from '@rneui/themed';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


export default function SignInView() {
  return (
    <>
    <ImageBackground
        source={require('../img/img1.jpg')}
        resizeMode="cover"
        style={styles.image}
    >
    <View style={styles.root}>
        <View style={styles.container}> 
            <Text h2 style={{marginBottom: 10, textAlign: 'center'}}>Авторизация</Text>
            <Input
                placeholder='Логин введи'
                leftIcon={{ type: 'font-awesome', name: 'user' }}
            />
            <Input
                placeholder='Пароль'
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                secureTextEntry
            />
        </View>
    </View>
    </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 20,
        margin: 15,
        marginTop: '80%',
        paddingHorizontal: 25,
    },
    image: {
        height: screenHeight,
        width: screenWidth,
    }
});