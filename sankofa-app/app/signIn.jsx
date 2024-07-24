import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Link, router } from 'expo-router'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';



const signIn = () => {
    const sankofaImg = require('../assets/images/Icon(1).png')
    const auth = getAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const HandleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('(tabs)')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
    
  return (
    <View style={styles.signInContainer}>
        <View style={styles.signInHeaderContainer}>
            <Image source={sankofaImg} style={{width: 82, height: 82, marginBottom: 20}} resizeMode='contain'/>
            <Text 
            style={{fontFamily: 'HammerSmith', fontSize: 32, lineHeight:40, color: colors.primary}}
            >Login</Text>
        </View>

        <View style={{marginTop: 60, marginLeft: 20}}>
            <Text 
            style={{fontFamily: 'PoppinsSemiBold', fontSize: 16, lineHeight: 24, color: colors.primary, marginBottom: 10}}
            >Email</Text>
            <View 
            style={{width: 330, height: 58, backgroundColor: colors.lighttext, borderRadius: 16, padding: 16, flexDirection: 'row', marginBottom: 25, elevation: 10, borderWidth: 1, borderColor: colors.primary}}>
                <MaterialCommunityIcons name="account-circle-outline" size={27} color='grey' />
                <TextInput
                style={{marginLeft: 15, fontSize: 16, justifyContent: 'flex-end'}}
                placeholder='Enter preffered username'
                placeholderTextColor='gray'
                value={email}
                onChangeText={(text)=> setEmail(text)}
                />
            </View>

            <Text
            style={{fontFamily: 'PoppinsSemiBold', fontSize: 16, lineHeight: 24, color: colors.primary, marginBottom: 10}}
            >Password</Text>
            <View 
            style={{width: 330, height: 58, backgroundColor: colors.lighttext, borderRadius: 16, padding: 16, flexDirection: 'row', elevation: 10, marginBottom: 30, borderWidth: 1, borderColor: 'gray'}}
            >
                <MaterialIcons name="lock-outline" size={24} color="grey" />
                <TextInput
                style={{marginLeft: 15, fontSize: 16, fontFamily: 'Poppins', width: 250, }}
                placeholder='at least 8 characters'
                placeholderTextColor='grey'
                value={password}
                onChangeText={(text)=> setPassword(text)}
                />
            </View>
            <View style={{alignItems: 'center', marginBottom: 50}}>
            <Text style={{fontFamily: 'PoppinsSemiBold', fontSize: 18, lineHeight: 24, color: colors.primary}}>Forget Password</Text>
            </View>

            <View 
            style={{width: 300, height: 51, borderRadius: 26, backgroundColor: colors.primary, marginLeft: 10}}
            >
                <TouchableOpacity 
                style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                onPress={HandleLogin} >
                    <Text 
                    style={{color: '#FFF7CC', fontFamily: 'Poppins', fontSize: 18, lineHeight: 27}}
                    >Login</Text>
                </TouchableOpacity>
                
            </View>

            <View style={{marginTop: 20, flexDirection: 'row'}}>
                <Text style={{fontFamily: 'Poppins', fontSize: 16, lineHeight: 24, color: colors.primary}}>Don't have an account?</Text>
                <Link href='newProfile'>
                <Text style={{fontFamily: 'PoppinsSemiBold', textDecorationLine: 'underline', fontSize: 16, lineHeight: 24, color: colors.primary}}>Create Account</Text>
                </Link>
            </View>
            
        </View>
    </View>
  )
}

export default signIn

const styles = StyleSheet.create({
    signInContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF7CC',
    },

    signInHeaderContainer: {
        marginTop: 64,
        alignItems: 'center'
    }
})