import { View, Text, StyleSheet, Pressable, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import colors from '../assets/colors/colors'
import AvatarOvalay from '../components/AvatarOverlay'
import AvatarList from '../components/AvatarList'
import AvatarImage from '../components/AvatarImage'
import {Link} from 'expo-router'
import login from './login'
import Profile from '../components/Profile'

const newProfile = () => {
    const unknown = require('../assets/images/unknown.png')
    const pencil = require('../assets/images/mdi_pencil.png')
    const [visible, setVisible] = useState(false)
    const [pickerAvatar, setPickerAvatar] = useState(null)
    const [username, setUsername] = useState('')
    const [isPressed, setIsPressed] = useState(false)


    const toggleOverlay = () => {
      setVisible(!visible);
    };

    const  saveProfileHandler = () => {
      setIsPressed(!isPressed)
      return(
        <Profile selectedAvatar={pickerAvatar} username={username}/>
      )
    }

  return (
 
    <View style={styles.newProfileContainer} >
      <Text style={styles.newProfileHeading}>Create a new Profile</Text>

      <View style={styles.profileContainer}>
        <View style={styles.unknown_profile_Container}>
           {pickerAvatar ? <AvatarImage profileSource={pickerAvatar}/> : <Image style={styles.unknown_profile} source={unknown} resizeMode='contain'/>} 
        </View>

        <View style={styles.buttonContainer}>
          <Pressable onPress={toggleOverlay}>
            <Image source={pencil} style={styles.pencil}  resizeMode='contain'/>
          </Pressable>

        </View>
      </View>

      <View style={styles.userInput_Container}>
        <Text style={styles.userInput_Text} >Username</Text>
        <TextInput
         style={styles.userInputBox}
         placeholder={` Enter preferred username`}
         value={username}
         onChangeText={setUsername}
         />
      </View>

      <View style={styles.userInput_Container}>
        <Text style={styles.userInput_Text}>Password</Text>
        <TextInput
         style={styles.userInputBox}
         placeholder='Enter you password'/>
      </View> 

      <View style={styles.createButtonContainer}>
        <Link replace href='login' asChild count={isPressed}>
          <TouchableOpacity onPress={saveProfileHandler} >
            <Text style={styles.createButton}>Create</Text>
          </TouchableOpacity>
        </Link>
        
      </View>

      <AvatarOvalay isVisible={visible} notVisible={() => setVisible(false)}>
        <AvatarList onSelect={setPickerAvatar}/>
      </AvatarOvalay>

     
    </View>

    
  )
}

export default newProfile

const styles = StyleSheet.create({
    newProfileContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.background,
        alignItems: 'center',
        paddingTop: 60
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

    pencil: {
      width: 24,
      height: 24
    },

    unknown_profile: {
        width: '80%',
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
        bottom: -15,
        right: -15
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

    createButton: {
      fontFamily: 'HammerSmith',
      fontSize: 17,
      lineHeight: 40,
      color: colors.lighttext
    },

    createButtonContainer: {
      backgroundColor: colors.primary,
      width: 100,
      alignItems: 'center',
      borderRadius: 15,
      marginRight: 235,
      marginTop: 20
    }
})