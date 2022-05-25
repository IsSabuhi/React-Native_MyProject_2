import { View, StyleSheet } from 'react-native'
import React from 'react'
import SignInView from './SignInView'

export default function HomeView() {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <SignInView/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
      margin: 16,
      width: '100%'
  },
});