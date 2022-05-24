import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeView from '../views/HomeView';
import AboutView from '../views/AboutView';
import CountView from '../views/CountView';

const Tab = createBottomTabNavigator();

export default function AppRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Главная" 
        component={HomeView} 
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
      />
      <Tab.Screen 
        name="About" 
        component={AboutView} 
        options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="text-account" color={color} size={size} />
            ),
          }}
      />
      <Tab.Screen 
        name="Счётчик" 
        component={CountView} 
        options={{
            tabBarLabel: 'Count',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="counter" color={color} size={size} />
            ),
          }}
      />
    </Tab.Navigator>
  );
}