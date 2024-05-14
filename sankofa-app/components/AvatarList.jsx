import { View, Text, FlatList, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'
import colors from '../assets/colors/colors'
const AvatarList = ({onSelect}) => {
    const [avatars] = useState([ 
    require('../assets/images/avatar1.png'),
    require('../assets/images/avatar2.png'),
    require('../assets/images/avatar3.png'),
    require('../assets/images/avatar4.png'),
    require('../assets/images/avatar5.png'),
    require('../assets/images/avatar6.png'),
    require('../assets/images/avatar7.png'),
    require('../assets/images/addAvatar.png')
   ]
   
    )

  return (
    <FlatList
      horizontal={false}
      data={avatars}
      numColumns={4}
      contentContainerStyle={styles.listContainer}
      renderItem={({item, key}) => (
        <View style={styles.imageContainer}>
          <Pressable onPress={() => {onSelect(item)}}
           >
            <Image source={item} key={key} style={styles.image} resizeMode='contain'/>
          </Pressable>
        </View> 
      ) }
      />
  )
}

export default AvatarList

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#FFEF99',
    
  },

  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
    border: 1,
    color: colors.primary,
    marginRight: 10,
    marginBottom: 10
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8
  },



})