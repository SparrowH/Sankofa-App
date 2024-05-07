import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
import { StatusBar } from 'react-native'

const index = () => {
  const ghEmoji = require('../assets/images/flagImoji.png')
  const akwaabaImage = require('../assets/images/AkwaabaImage.png')
  return (
    <View style={styles.welcomeContainer}>

      <View style={styles.welcome}>
        <Text style={styles.welcomeHeading}>Akwaaba!</Text>
        <Text style={styles.welcomeInfo}>Test your knowledge on all things Ghana! 
        <Image source={ghEmoji} /></Text>
      </View>

      <View style={styles.welcomeFooterContainer}>
        <View style={styles.akwaabaImageContainer}>
          <Image source={akwaabaImage} resizeMode='contain' style={styles.akwaabaImg}/>
        </View>
        <Text style={styles.footerInfo} >Dive in and quiz your way through time! ✨</Text>

        <View style={styles.buttonContainer}>
          <Pressable><Text style={styles.buttonText}>Get started</Text></Pressable>
        </View>
      </View>

    </View>
  )
}

export default index

const styles = StyleSheet.create({
  welcomeContainer: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    paddingBottom: 80
  },

  welcome: {
    paddingHorizontal: 20,

  },

  welcomeHeading: {
    fontFamily: 'HammerSmith',
    fontSize: 44,
    lineHeight: 60,
    color: colors.primary 
  },

  welcomeInfo: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: colors.primary
  },

  welcomeFooterContainer: {
    alignItems: 'center',
  },

  akwaabaImageContainer: {
    marginBottom: 0
  },

  akwaabaImg: {
    /* silhouette-skyline-panorama-of-city-accraghana-vector-43735377-removebg-preview 1 */

  width: 408,
  height: 275,



  },

  footerInfo: {
    marginBottom: 10,
    fontFamily: 'PoppinsRegular',
    lineHeight: 24,
    fontSize: 16,
    marginHorizontal: 20,
    color: colors.primary
    
  }, 

  buttonContainer: {
    width: 315,
    height: 52,
    backgroundColor: colors.primary,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center'
    
  },

  buttonText: {
    color: colors.lighttext
  }


})