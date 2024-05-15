import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'

const HeaderLeft = () => {
  return (
    <View style={styles.headerLeftContainer}>
      <Text style={styles.textHeading}>Hello Georgiette</Text>
      <Text style={styles.textInfo}>Let’s start your quiz now</Text>
    </View>
  )
}

export default HeaderLeft

const styles = StyleSheet.create({
    textHeading: {
        color: colors.primary,
        fontFamily: 'HammerSmith',
        fontSize: 24, 
    },

    textInfo: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: colors.primary
    }, 

    headerLeftContainer: {
      marginLeft: 15,
    }
})
