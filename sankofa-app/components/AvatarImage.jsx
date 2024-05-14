import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'

const AvatarImage = ({profileSource}) => {
  return (
    <View style={styles.imageContainer}>  
        <Image source={profileSource} resizeMode='contain' style={styles.image}/>
    </View>
  )
}

export default AvatarImage

const styles = StyleSheet.create({
  
    image: {
        width: 96,
        height: 96,
        borderRadius: 16,
        
    }
})