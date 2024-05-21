import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'

const CategoryList = () => {
    const [category] = useState([
        require('../assets/images/Category(2).png'),
        require('../assets/images/Category(4).png'),
        require('../assets/images/Category(6).png'),
        require('../assets/images/Category(7).png'),
        require('../assets/images/Category.png'),
        require('../assets/images/Category1-1.png'),
        require('../assets/images/Category2.png'),
        require('../assets/images/Category8.png'),
        
    ]
        
    )
  return (
    <FlatList
      horizontal={false}
      data={category}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
      renderItem={({item, key}) => (
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => {onSelect(item)}}
           >
            <Image source={item} key={key} style={styles.image} resizeMode='contain'/>
          </TouchableOpacity>
        </View> 
      ) }
      />
  )
}

export default CategoryList

const styles = StyleSheet.create({
    listContainer: {
        marginTop: 10,
    },

    imageContainer: {
        marginBottom: 5
    },

    image: {
        maxWidth: 356,
        height: 128, 
        borderRadius: 16
    }
})