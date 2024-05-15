import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const HeaderRight = () => {
    const image = require('../assets/images/avatar5.png')
  return (
    <View style={styles.headerRightContainer}>
        <Image source={image}  style={styles.img}/>
    </View>
  )
}

export default HeaderRight

const styles = StyleSheet.create({
    img: {
        width: 56,
        height: 56,
        borderRadius: 12
    },

    headerRightContainer: {
      marginRight: 15,
    }
})