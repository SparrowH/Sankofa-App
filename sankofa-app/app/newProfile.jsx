import { View, Text, StyleSheet, Pressable, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import colors from '../assets/colors/colors'
import AvatarOvalay from '../components/AvatarOverlay'
import AvatarList from '../components/AvatarList'
import AvatarImage from '../components/AvatarImage'
import {Link, router} from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import app from '../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, updateProfile, updateCurrentUser } from "firebase/auth";



const newProfile = () => {
    const unknown = require('../assets/images/unknown.png')
    const pencil = require('../assets/images/mdi_pencil.png')
    const [visible, setVisible] = useState(false)
    const [pickerAvatar, setPickerAvatar] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const auth = getAuth(app)
    const user = auth.currentUser

    const toggleOverlay = () => {
      setVisible(!visible);
    };

    const  saveProfileHandler = () => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User successfully created
      const user = userCredential.user;
      return updateProfile(user, { displayName: username }); // Update profile here
    })
    .then(() => {
      // Profile updated successfully
      const updatedUser = auth.currentUser;
      console.log('Profile updated!', updatedUser.displayName);
      router.replace('(tabs)');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error (${errorCode}): ${errorMessage}`);
      // Handle errors here, e.g., show a message to the user
    });
}
  

    
  return (
 
    <ScrollView style={styles.newProfileContainer} contentContainerStyle={{flexGrow: 1 , alignItems:'center'}}>
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
            style={{width: 330, height: 58, backgroundColor: colors.lighttext, borderRadius: 16, padding: 14, flexDirection: 'row', marginBottom: 15, elevation: 10, borderWidth: 1, borderColor: 'gray'}}>
                <MaterialCommunityIcons name="account-circle-outline" size={27} color='grey' />
                <TextInput
                style={{marginLeft: 15, fontSize: 16, justifyContent: 'flex-end'}}
                placeholder='Enter preffered username'
                placeholderTextColor='gray'
                value={username}
                onChangeText={(text) => setUsername(text)}
                />
          </View>

          <Text
            style={{fontFamily: 'PoppinsSemiBold', fontSize: 16, lineHeight: 24, color: colors.primary, marginBottom: 10}}
            >Email</Text>
            <View 
            style={{width: 330, height: 58, backgroundColor: colors.lighttext, borderRadius: 16, padding: 14, flexDirection: 'row', elevation: 10, marginBottom: 15, borderWidth: 1, borderColor: 'gray'}}
            >
                <MaterialIcons name="mail-outline" size={27} color="gray" />                
                <TextInput
                style={{marginLeft: 15, fontSize: 16, fontFamily: 'Poppins', width: 250, justifyContent: 'flex-end' }}
                placeholder='example@email.com'
                placeholderTextColor='grey'
                value={email}
                onChangeText={(text) => setEmail(text)}
                />
            </View>


            <Text
            style={{fontFamily: 'PoppinsSemiBold', fontSize: 16, lineHeight: 24, color: colors.primary, marginBottom: 10}}
            >Password</Text>
            <View 
            style={{width: 330, height: 58, backgroundColor: colors.lighttext, borderRadius: 16, padding: 14, flexDirection: 'row', elevation: 10, marginBottom: 15, borderWidth: 1, borderColor: 'gray'}}
            >
                <MaterialIcons name="lock-outline" size={27} color="grey" />
                <TextInput
                style={{marginLeft: 15, fontSize: 16, fontFamily: 'Poppins', width: 250, }}
                placeholder='at least 8 characters'
                placeholderTextColor='grey'
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
                />
            </View>
        
      </View>

     

      <View style={styles.createButtonContainer}>
          <TouchableOpacity onPress={saveProfileHandler} >
            <Text style={styles.createButton}>Create Account</Text>
          </TouchableOpacity>
        
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

     
    </ScrollView>

    
  )
}

export default newProfile

const styles = StyleSheet.create({
    newProfileContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.background,
        paddingTop: 40
    },

    newProfileHeading: {
        fontFamily: 'HammerSmith',
        fontSize: 32,
        lineHeight: 40,
        color: colors.primary
    },

    profileContainer: {
        marginBottom: 20
    },

    unknown_profile_Container: {
        marginTop: 40,
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
      marginTop: 40,
      justifyContent: 'center'

    }
})