import {StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Text } from '@rneui/base';

interface Props {
    name: string;
}

export default function CountComponent(props: Props) {

    const [count, setCount] = useState(0);

    const Increment = () => 
        setCount(count => count + 1);

    const Decrement = () => 
        setCount(count => count - 1);

    const Reset = () => 
        setCount(count => count = 0);


  return (
    <View style={styles.container}>
      <Text h3>Счётчик</Text>
      <Text h4>Hello, {props.name}</Text>
      <Text h4>Счётчик: {count}</Text>
      <View style={styles.buttonBlock}>
        <Button 
            onPress={Increment} 
            loadingProps={{animating: true}}
            containerStyle={{margin: 5}}
            titleStyle={{marginHorizontal: 5, width: '20%'}}
            disabledStyle={{ borderWidth:2, borderColor:"#00F" }}
            style={styles.button}
            title='+'>
        </Button>
        <Button 
            onPress={Decrement} 
            loadingProps={{animating: true}}
            containerStyle={{margin: 5}}
            titleStyle={{marginHorizontal: 5, width: '20%'}}
            disabledStyle={{ borderWidth:2, borderColor:"#00F" }}
            style={styles.button}
            color="error"
            title='-'>
        </Button>
      </View>
        <Button 
            onPress={Reset} 
            loadingProps={{animating: true}}
            containerStyle={{margin: 5}}
            titleStyle={{marginHorizontal: 2,}}
            disabledStyle={{ borderWidth:2, borderColor:"#00F" }}
            style={styles.button}
            color="warning"
            title='Сбросить'>
        </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonBlock: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {

    }
  });