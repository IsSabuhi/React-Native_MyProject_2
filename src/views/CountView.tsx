import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CountView() {
  return (
    <View style={styles.container}>
      <Text>CountView</Text>
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
  });