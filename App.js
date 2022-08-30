import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen'
import { store } from './store'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './screens/Navigation'
import { createStackNavigator } from '@react-navigation/stack'
import MapScreen from './screens/MapScreen'

export default function App() {
  const Stack = createStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator initialRouteName="Home">
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
          </Stack.Navigator>

          {/* <HomeScreen></HomeScreen> */}
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
