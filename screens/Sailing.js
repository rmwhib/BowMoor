import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './HomeScreen'
import { NavigationContainer } from '@react-navigation/native'

//const HomeScreen = ({navigation}) => {
const Drawer = createDrawerNavigator()

const Sailing = () => {
  const Stack = createStackNavigator()
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <View>
        <Text>Sailing</Text>
      </View>
    </Drawer.Navigator>
  )
}

export default Sailing

const styles = StyleSheet.create({})
