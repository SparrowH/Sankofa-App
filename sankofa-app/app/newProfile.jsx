import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import colors from '../assets/colors/colors'

const newProfile = () => {
    const unknown = require('../assets/images/unknown.png')
    const pencil = require('../assets/images/mdi_pencil.png')
    const account_unknown = require('../assets/images/mdi_account-circle.png')
    const [showAvatars, setShowAvatars] = useState(false)


  return (

    
    <View style={styles.newProfileContainer} >
      <Text style={styles.newProfileHeading}>Create a new Profile</Text>

      <View style={styles.profileContainer}>
        <View style={styles.unknown_profile_Container}>
            <Image style={styles.unknown_profile} source={unknown} resizeMode='contain'/>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable><Image source={pencil} /></Pressable>

        </View>
      </View>

      <View style={styles.userInput_Container}>
        <Text style={styles.userInput_Text} >Username</Text>
        <TextInput
         style={styles.userInputBox}
         placeholder={` Enter preferred username`}/>
      </View>

      <View style={styles.userInput_Container}>
        <Text style={styles.userInput_Text}>Password</Text>
        <TextInput
         style={styles.userInputBox}
         placeholder='Enter you password'/>
        </View> 
    </View>
  )
}

export default newProfile

const styles = StyleSheet.create({
    newProfileContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.background,
        alignItems: 'center'
    },

    newProfileHeading: {
        fontFamily: 'HammerSmith',
        fontSize: 32,
        lineHeight: 40,
        color: colors.primary
    },

    profileContainer: {
        marginBottom: 100
    },

    unknown_profile_Container: {
        marginTop: 60,
        backgroundColor: '#CFCFCE',
        width: 85,
        height: 85,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        borderColor: colors.primary,
        borderWidth: 2
        
    },

    unknown_profile: {
        width: '90%',
        height: '80%'
    },

    buttonContainer: {
        width: 40,
        height: 40,
        backgroundColor: colors.tetiary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20 ,
        position: 'absolute',
        bottom: -10,
        right: -10
    }, 

    userInput_Container: {
      width: '100%',
      alignItems: 'flex-start',
      marginLeft: 25,
      marginBottom: 50

    },

    userInput_Text: {
      fontFamily: 'Poppins',
      fontSize: 16,
      lineHeight: 24
    },

    userInputBox: {
      height: 48,
      width: 327,
      backgroundColor: '#FFFBE5',
      borderRadius: 8, 
      elevation: 20,
      shadowColor: '#25333A',
      paddingLeft: 5
      
    },

 
})