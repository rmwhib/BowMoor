import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { View, SafeAreaView, StyleSheet, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_API_KEY } from '@env'
import tw from 'tailwind-react-native-classnames'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectDestination,
  selectOrigin,
  selectTravelTimeInformation,
  setDestination,
  setOrigin,
  setTravelTimeInformation,
} from '../slices/navSlice'
import MapScreen from './MapScreen'
import { useNavigation } from '@react-navigation/native'

const Navigation = ({ props }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)

  //travelTime

  useEffect(() => {
    //if (!origin) return

    const getTime = async () => {
      const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.description}&destinations=${destination.description}units=imperial&key=${GOOGLE_MAPS_API_KEY}`
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
        })
    }

    getTime()
  }, [destination, GOOGLE_MAPS_API_KEY])

  const travelTime = useSelector(selectTravelTimeInformation)

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`m-5`}>
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: { fontSize: 18 },
          }}
          fetchDetails={true}
          onPress={(data, details) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              }),
            )
            dispatch(
              setDestination({
                location: 'Bowmoor Sailing Club',
                description: 'Bowmoor Sailing Club',
              }),
            )
          }}
          returnKeyType={'search'}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
      </View>
      <View style={tw`items-center`}>
        <Text>You are {travelTime?.distance.text}'s away</Text>
      </View>
      <View style={tw`m-1 flex-1`}>
        {origin?.location && <MapScreen></MapScreen>}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  autoComplete: {
    marginTop: 50,
    padding: 5,
  },
  GoButton: {
    padding: 5,
    height: '50%',
  },
  button: {
    margin: 50,
    alignItems: 'center',
    backgroundColor: '#1e81b0',
    padding: 10,
  },
})

export default Navigation
