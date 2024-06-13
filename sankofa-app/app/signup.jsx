import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import {React, useState} from 'react'
import colors from '../assets/colors/colors'
import AvatarOvalay from '../components/AvatarOverlay'
import AvatarList from '../components/AvatarList'
import Profile from '../components/Profile'


const signup = () => {
    const unknown = require('../assets/images/unknown.png')
    const pencil = require('../assets/images/mdi_pencil.png')
    const [visible, setVisible] = useState(false)
    const [pickerAvatar, setPickerAvatar] = useState(null)


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
    <View style={styles.signupContainer}>
        <View style={{width: '100%', height: '100%', alignItems:'center'}}>
            <Text style={styles.signupHeader}>Create an account</Text>
        </View>

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

      <AvatarOvalay isVisible={visible} notVisible={() => setVisible(false)}>
        <AvatarList onSelect={setPickerAvatar}/>
      </AvatarOvalay>
    </View>
  )
}

export default signup

const styles = StyleSheet.create({
    signupContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFBE5'
    },

    signupHeader: {
        marginTop: 50,
        marginBottom: 30,
        color: colors.primary,
        fontFamily: 'HammerSmith',
        fontSize: 32
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
})