import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Text } from '@rneui/base';
import CountComponent from '../components/CountComponent';

interface Props { 
    name: string;
}

export default function CountView(props: Props) {
  return (
    <>
      <CountComponent name='Sabuhi'/>    
    </>
  )
}


const styles = StyleSheet.create({
  
});