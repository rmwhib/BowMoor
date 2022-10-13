// ./navigation/StackNavigator.js

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import About from '../screens/About'
import Contact from '../screens/Contact'
import HomeScreen from '../screens/HomeScreen'
import Navigation from '../screens/Navigation'
import MapScreen from '../screens/MapScreen'
import Sailing from '../screens/Sailing'

const Stack = createStackNavigator()

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Navigation"
        component={Navigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sailing"
        component={Sailing}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  )
}

export { MainStackNavigator, ContactStackNavigator }
