import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeView from '../views/HomeView';
import AboutView from '../views/AboutView';
import CountView from '../views/CountView';

const Drawer = createDrawerNavigator();

export default function DrawerRouter() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Home" component={HomeView} />
      <Drawer.Screen name="About" component={AboutView} />
      <Drawer.Screen name="Count" component={CountView} />
    </Drawer.Navigator>
  )
}