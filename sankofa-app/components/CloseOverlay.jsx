import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Overlay } from '@rneui/themed';
import { router } from 'expo-router';


const CloseOverlay = ({isVisible, isNotVisible}) => {
    const QuitQuizHandler = () => {
        router.replace('discover')
    }
  return (
    <View>
        <Overlay 
        isVisible={isVisible} 
        onBackdropPress={isNotVisible} 
        overlayStyle={styles.overlayContainer}>
        
        <Text 
        style={{fontFamily: 'PoppinsSemiBold', fontSize: 20, lineHeight: 30, textAlign: 'center',
        marginBottom: 10}}
        >Are you sure you want to quit the quiz?</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View 
            style={{width: 150, height: 45, backgroundColor: '#4C4000', borderRadius: 24, marginBottom: 15}} >
                <TouchableOpacity 
                style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <Text 
                style={{fontFamily: 'Poppins', fontSize: 18, lineHeight: 27, color: '#FFF7CC'}}
                >Cancel</Text>
                </TouchableOpacity>
            </View>

            <View style={{width: 150, height: 45,borderRadius: 24, borderWidth: 2, borderColor: '#DD214F'}} >
                <TouchableOpacity onPress={QuitQuizHandler}
                style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}
                >
                    <Text
                    style={{fontFamily: 'Poppins', fontSize: 18, lineHeight: 27, color: '#DD214F'}}

                    >Quit</Text>
                </TouchableOpacity>
            </View>
        </View>
        </Overlay>
    </View>
   
  )
} 

export default CloseOverlay

const styles = StyleSheet.create({
    overlayContainer: {
        width: 270,
        height: 220,
        borderRadius: 16,
        backgroundColor: '#FFF7CC',
        paddingVertical: 20,
        paddingHorizontal: 25
    }
})