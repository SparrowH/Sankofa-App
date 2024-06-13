import { View, Text, StyleSheet, Pressable, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import colors from '../assets/colors/colors'
import AvatarOvalay from '../components/AvatarOverlay'
import AvatarList from '../components/AvatarList'
import AvatarImage from '../components/AvatarImage'
import {Link} from 'expo-router'
import login from './login'
import Profile from '../components/Profile'
import { color } from '@rneui/base'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

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
      <Text style={styles.newProfileHeading}>Create an account</Text>

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

      <View style={{marginTop: 10}}>
            <Text 
            style={{fontFamily: 'PoppinsSemiBold', fontSize: 16, lineHeight: 24, color: colors.primary, marginBottom: 10}}
            >Username</Text>
            <View 
            style={{width: 330, height: 58, backgroundColor: '#FFF7CC', borderRadius: 16, padding: 14, flexDirection: 'row', marginBottom: 15, elevation: 10, borderWidth: 1, borderColor: 'gray'}}>
                <MaterialCommunityIcons name="account-circle-outline" size={27} color='grey' />
                <TextInput
                style={{marginLeft: 15, fontSize: 16, justifyContent: 'flex-end'}}
                placeholder='Enter preffered username'
                placeholderTextColor='gray'
                />
          </View>

          <Text
            style={{fontFamily: 'PoppinsSemiBold', fontSize: 16, lineHeight: 24, color: colors.primary, marginBottom: 10}}
            >Email</Text>
            <View 
            style={{width: 330, height: 58, backgroundColor: '#FFF7CC', borderRadius: 16, padding: 14, flexDirection: 'row', elevation: 10, marginBottom: 15, borderWidth: 1, borderColor: 'gray'}}
            >
                <MaterialIcons name="mail-outline" size={27} color="gray" />                
                <TextInput
                style={{marginLeft: 15, fontSize: 16, fontFamily: 'Poppins', width: 250, justifyContent: 'flex-end' }}
                placeholder='example@email.com'
                placeholderTextColor='grey'
                />
            </View>


            <Text
            style={{fontFamily: 'PoppinsSemiBold', fontSize: 16, lineHeight: 24, color: colors.primary, marginBottom: 10}}
            >Password</Text>
            <View 
            style={{width: 330, height: 58, backgroundColor: '#FFF7CC', borderRadius: 16, padding: 14, flexDirection: 'row', elevation: 10, marginBottom: 15, borderWidth: 1, borderColor: 'gray'}}
            >
                <MaterialIcons name="lock-outline" size={27} color="grey" />
                <TextInput
                style={{marginLeft: 15, fontSize: 16, fontFamily: 'Poppins', width: 250, }}
                placeholder='at least 8 characters'
                placeholderTextColor='grey'
                />
            </View>
        
      </View>

     

      <View style={styles.createButtonContainer}>
        <Link replace href='login' asChild count={isPressed}>
          <TouchableOpacity onPress={saveProfileHandler} >
            <Text style={styles.createButton}>Create Account</Text>
          </TouchableOpacity>
        </Link>
        
      </View>

      <View style={{marginTop: 10, flexDirection: 'row'}}>
          <Text style={{fontFamily: 'Poppins', fontSize: 16, lineHeight: 24, color: colors.primary}}>Already have an account?</Text>
          <Link href='signIn'>
          <Text style={{fontFamily: 'PoppinsSemiBold', textDecorationLine: 'underline', fontSize: 16, lineHeight: 24, color: colors.primary}}>Log in</Text>
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
        backgroundColor: '#FFFBE5',
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
        marginBottom: 25
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
      fontFamily: 'PoppinsSemiBold',
      fontSize: 16,
      lineHeight: 24,
      color: colors.primary
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
      fontFamily: 'Poppins',
      fontSize: 18,
      lineHeight: 27,
      color: colors.lighttext
    },

    createButtonContainer: {
      backgroundColor: colors.primary,
      width: 300,
      height: 51,
      alignItems: 'center',
      borderRadius: 26,
      marginTop: 10,
      justifyContent: 'center'

    }
})