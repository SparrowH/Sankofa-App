import { View, Text, Pressable, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
import { Link } from 'expo-router'
import Profile from '../components/Profile'


const login = () => {
  const plus = require('../assets/images/Vector.png')
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginHeading}>Choose a Profile</Text>
      <View style={styles.loginProfileContainer}>
        <Profile/> 
      </View>

      <View style={styles.buttonContainer}>
        <Link replace href='newProfile' asChild>
          <TouchableOpacity><Image source={plus} resizeMode='contain'/></TouchableOpacity>
        </Link>
        </View>
        <Text style={styles.buttonInfo}>Add new profile</Text>
    </View>
  )
}

export default login

const styles = StyleSheet.create({
  loginContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
    alignItems: 'center',
    paddingTop: 60
  },

  loginHeading: {
    fontFamily: 'HammerSmith',
    fontSize: 32,
    lineHeight: 42,
    color: colors.primary,
    marginBottom: 70
  },

  loginProfileContainer: {
    marginBottom: 150
  },

  profileInfo: {
    fontFamily: 'HammerSmith',
    fontSize: 24,
    lineHeight: 30,
    color: colors.primary,
    width: 175,
    height: 225
  },

  buttonContainer: {
    width: 90,
    height: 90,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
    
  },

  buttonInfo: {
    fontFamily: 'HammerSmith',
    fontSize: 24,
    lineHeight: 30,
    color: colors.primary
  },

})