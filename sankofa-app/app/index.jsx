import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
import { StatusBar } from 'react-native'
import { Link } from 'expo-router'

const index = () => {
  const ghEmoji = require('../assets/images/emojione-v1_flag-for-ghana.png')
  const akwaabaImage = require('../assets/images/AkwaabaImage.png')
  return (
    <View style={styles.welcomeContainer}>

      <View style={styles.welcome}>
        <Text style={styles.welcomeHeading}>Akwaaba!</Text>
        <Text style={styles.welcomeInfo}>Test your knowledge on all things Ghana! 
        <Image source={ghEmoji} style={styles.ghanaflag}/></Text>
      </View>

      <View style={styles.welcomeFooterContainer}>
        <View style={styles.akwaabaImageContainer}>
          <Image source={akwaabaImage} resizeMode='contain' style={styles.akwaabaImg}/>
        </View>

        <View style={{width: 250}}><Text style={styles.footerInfo} >Dive in and quiz your way through time! ✨</Text></View>

      </View>
      
        <View style={styles.buttonContainer}>
          <Link href='/login' asChild>
            <Pressable style={styles.pressable}><Text style={styles.buttonText}>Get started</Text></Pressable>
          </Link>
        </View>

        <View style={styles.logInContainer}>
            <Text style={styles.logInText1}>Already have an account?</Text>
            <Link href='signIn'>
            <Text style={styles.logInText2}>Log in</Text>
            </Link>
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
    paddingBottom: 60,
    paddingTop: 60
  },

  welcome: {
    paddingHorizontal: 20,

  },

  ghanaflag: {
    width: 24,
    height: 24
  },

  welcomeHeading: {
    fontFamily: 'HammerSmith',
    fontSize: 44,
    lineHeight: 60,
    color: colors.primary 
  },

  welcomeInfo: {
    fontFamily: 'Poppins',
    fontSize: 20,
    color: colors.primary
  },

  welcomeFooterContainer: {
    alignItems: 'center',
    position: 'absolute'
  },

  akwaabaImageContainer: {
    marginBottom: 0,
    position: 'relative',
    top: 260,
    left: -25
    
  },

  akwaabaImg: {
    /* silhouette-skyline-panorama-of-city-accraghana-vector-43735377-removebg-preview 1 */

  width: 408,
  height: 275,



  },

  footerInfo: {

    marginBottom: 10,
    fontFamily: 'Poppins',
    lineHeight: 24,
    fontSize: 16,
    marginHorizontal: 20,
    color: colors.primary,
    position: 'relative',
    top: 210,
    justifyContent: 'center',
    left: -25,
    textAlign: 'center'
    

    
  }, 

  buttonContainer: {
    position: 'relative',
    width: 315,
    height: 52,
    backgroundColor: colors.primary,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 22,
    top: 180

    
    
  },

  pressable: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: colors.lighttext
  },

  logInContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  logInText1: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: colors.primary,
    marginRight: 5
  },

  logInText2: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 24,
    color: colors.primary,
    textDecorationLine: 'underline'
    
   }


})