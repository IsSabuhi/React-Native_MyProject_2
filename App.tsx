import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabRouter from './src/routers/TabRouter';
import DrawerRouter from './src/routers/DrawerRouter';

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <TabRouter/> */}
        <DrawerRouter/>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});
