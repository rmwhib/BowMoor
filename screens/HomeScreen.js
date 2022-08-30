import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'

//const HomeScreen = ({navigation}) => {

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`flex items-center`}>
        <View style={tw`mb-2`}>
          <Image
            style={{
              width: 330,
              height: 100,
            }}
            source={{
              uri:
                'https://bowmoor.com/wp-content/uploads/2019/06/BSC_LogoInLine.png',
            }}
          />
        </View>
        <NavOptions></NavOptions>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text: {
    color: 'purple',
  },
})
