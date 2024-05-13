import { View, Text, FlatList, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'
import colors from '../assets/colors/colors'
const AvatarList = ({onSelect}) => {
    const [avatar] = useState(
      require('../assets/images/avatar1.png'),
      require('../assets/images/avatar2.png'),
      require('../assets/images/avatar3.png'),
      require('../assets/images/avatar4.png'),
      require('../assets/images/avatar5.png'),
      require('../assets/images/avatar6.png'),
      require('../assets/images/avatar7.png'),    
    )

  return (
    <FlatList
      horizontal
      data={avatar}
      contentContainerStyle={styles.listContainer}
      renderItem={({item, index}) => (
        <View style={styles.imageContainer}>
          <Pressable 
            onPress={onSelect(item)}>
            <Image source={item} key={index} style={styles.image}/>
          </Pressable>
        </View>
        
      ) }
      />
  )
}

export default AvatarList

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    margin: 15,
    backgroundColor: '#FFEF99',
    flexWrap: 'wrap'
  },

  imageContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    border: 1,
    color: colors.primary
  },

  image: {
    width: '100%',
    height: '100%'
  }

})