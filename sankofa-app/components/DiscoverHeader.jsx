import { View, Text, Image , StyleSheet, Pressable} from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
import {Link} from 'expo-router'

const DiscoverHeader = () => {
    const backButton = require('../assets/images/backButton.png')
  return (
    <View style={styles.headingContainer}>
        <Link href='/(tabs)' asChild><Pressable ><Image source={backButton}/></Pressable></Link>
        <Text style={styles.textHeading}>Categories</Text>
    </View>
  )
}

export default DiscoverHeader

const styles = StyleSheet.create({
    textHeading: {
        fontFamily: 'HammerSmith',
        fontSize: 24,
        color: colors.primary,
        marginLeft: 25
    },
    
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        marginTop: 25

    }
})