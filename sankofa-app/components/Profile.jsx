import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
import { Link } from 'expo-router'

const Profile = () => {
  const avatar5 = require('../assets/images/avatar5.png')
  return (
    <View style={styles.profileContainer}>
      
        <View style={styles.profileImg_Container}>
          <Link href='/(tabs)' asChild>
          <TouchableOpacity>
            <Image source={avatar5} resizeMode='contain' style={styles.image}/>
          </TouchableOpacity>
          </Link>
        </View>
     
      <Text style={styles.profileText}>Georgiette</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    profileContainer: {
        width: 200,
        height: 135,
        justifyContent: 'space-between',
        alignItems: 'center'  
    },

    profileImg_Container: {
        width: 90,
        height: 90,
        borderWidth: 3,
        borderColor: colors.primary,
        borderRadius: 20,
        padding: 2

        
    },

    image: {
      width: '100%',
      height: '100%',
      borderRadius: 18

    },

    profileText: {
      fontFamily: 'HammerSmith',
      fontSize: 24
    }

})