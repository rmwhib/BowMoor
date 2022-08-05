import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'

const data = [
  {
    id: '1',
    title: 'Sailing',
    image:
      'https://img.favpng.com/19/11/4/sailing-ship-boat-png-favpng-6yVUuUNRZzXiN08DcEJLBcteL_t.jpg',
    screen: 'SailScreen',
  },
  {
    id: '2',
    title: 'Training',
    image:
      'https://img.favpng.com/8/21/7/school-drawing-teacher-clip-art-png-favpng-hgCcha45ABBfh6V4BsydcfXC6_t.jpg',
    screen: 'LearningScreen',
  },
]

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            ></Image>
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    ></FlatList>
  )
}

export default NavOptions
