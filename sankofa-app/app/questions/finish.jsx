import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const finish = () => {
    const laurel = require('../../assets/images/Group 1.png')
  return (
    <View style={styles.finishQuizContainer}>
        <Image source={laurel} style={{width: 224, height: 264, marginBottom: 25}} resizeMode='contain'/>
        <View style={{alignItems: 'center', marginBottom: 25}}>
            <Text 
            style={{fontFamily: 'PoppinsSemiBold', fontSize: 36, lineHeight: 54, color: '#998100'}}
            >Well Done!
            </Text>

            <Text 
            style={{fontFamily: 'PoppinsSemiBold', fontSize: 14, color: '#665600', lineHeight: 21}}
            >Questions you got right</Text>
            <Text 
            style={{fontFamily: 'PoppinsBold', fontSize: 40, lineHeight: 60, color: '#665600', }}
            >8 of 10</Text>
        </View>

        <View 
        style={{width: 300, height:  52, borderRadius: 26, borderWidth: 2, borderColor: '#4C4000', marginBottom: 7}}>
            <TouchableOpacity 
            style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontFamily: 'PoppinsSemiBold', color: '#4C4000', fontSize: 18, lineHeight: 20}}>Replay</Text>
            </TouchableOpacity>
        </View>

        <View 
        style={{width: 300, height:  52, borderRadius: 26, borderWidth: 2, borderColor: '#4C4000', marginBottom: 7}}>
            <TouchableOpacity 
            style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontFamily: 'PoppinsSemiBold', color: '#4C4000', fontSize: 18, lineHeight: 20}}>Review</Text>
            </TouchableOpacity>
        </View>

        <View 
        style={{width: 300, height:  52, borderRadius: 26, backgroundColor: '#4C4000', marginBottom: 5}}>
            <TouchableOpacity 
            style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontFamily: 'PoppinsSemiBold', color:'#FFFBE5', fontSize: 18, lineHeight: 20}}>Continue</Text>
            </TouchableOpacity>
        </View>

        
           
    </View>
  )
}

export default finish

const styles = StyleSheet.create({
    finishQuizContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF7CC',
        alignItems: 'center',
        marginBottom: 60
        
    
    }
})