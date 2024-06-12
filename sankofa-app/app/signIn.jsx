import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const signIn = () => {
    const sankofaImg = require('../assets/images/Icon(1).png')
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
            style={{fontFamily: 'PoppinsBold', fontSize: 17, lineHeight: 24, color: colors.primary, marginBottom: 10}}
            >Username</Text>
            <View 
            style={{width: 330, height: 58, backgroundColor: '#FFF7CC', borderRadius: 16, padding: 16, flexDirection: 'row', marginBottom: 25, elevation: 10}}>
                <MaterialCommunityIcons name="account-circle-outline" size={28} color='grey' />
                <TextInput
                style={{marginLeft: 15}}
                placeholder='Enter preffered username'
                
                />
            </View>

            <Text
            style={{fontFamily: 'PoppinsBold', fontSize: 17, lineHeight: 24, color: colors.primary, marginBottom: 10}}
            >Password</Text>
            <View 
            style={{width: 330, height: 58, backgroundColor: '#FFF7CC', borderRadius: 16, padding: 16, flexDirection: 'row', elevation: 10, marginBottom: 30}}
            >
                <MaterialIcons name="lock-outline" size={24} color="grey" />
                <TextInput
                style={{marginLeft: 15, fontSize: 14, fontFamily: 'Poppins', width: 250}}
                placeholder='at least 8 characters'/>
            </View>
            <View style={{alignItems: 'center', marginBottom: 50}}>
            <Text style={{fontFamily: 'PoppinsBold', fontSize: 18, lineHeight: 24, color: colors.primary}}>Forget Password</Text>
            </View>

            <View 
            style={{width: 300, height: 51, borderRadius: 26, backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center', marginLeft: 10}}
            >
                <Pressable >
                    <Text 
                    style={{color: '#FFF7CC', fontFamily: 'Poppins', fontSize: 18, lineHeight: 27}}
                    >Login</Text>
                </Pressable>
                
            </View>

            <View style={{marginTop: 20, flexDirection: 'row'}}>
                <Text style={{fontFamily: 'Poppins', fontSize: 16, lineHeight: 24, color: colors.primary}}>Don't have an account?</Text>
                <Text style={{fontFamily: 'PoppinsBold', textDecorationLine: 'underline', fontSize: 16, lineHeight: 24, color: colors.primary}}>Create Account</Text>
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
        backgroundColor: '#FFFBE5',
    },

    signInHeaderContainer: {
        marginTop: 64,
        alignItems: 'center'
    }
})