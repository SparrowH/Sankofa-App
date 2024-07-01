import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import QuestionHeaderLeft from '../../components/QuestionHeaderLeft'
import * as Progress from 'react-native-progress';
import colors from '../../assets/colors/colors';
import Choice from '../../components/Choice';
import { useState } from 'react';
import CloseOverlay from '../../components/CloseOverlay';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';


const question = () => {
    const [visible, setVisible] = useState(false)

    const HandleVisibility = () => {
        setVisible(!visible)
    }
  return (
    <View style={styles.questionContainer}>
        <Stack.Screen options={{
            headerRight: () => <View style={{marginRight: 15, marginTop: 20}}>
                <TouchableOpacity onPress={HandleVisibility}>
                <MaterialIcons name="close" size={27} color={colors.primary} />
                </TouchableOpacity>
            
        </View>
        }}
        />

        <View style={styles.questionProgressBarContainer}>
            <Progress.Bar 
            width={280} progress={0.3} color={colors.primary} height={25} animated={true} unfilledColor={colors.background} animationType={'spring'} borderWidth={4} borderColor='#FFE766' borderRadius={20} />
        </View>

        <View style={styles.questionCardContainer}>
            <Text 
            style={{fontFamily: 'Poppins', color: '#665600', fontSize: 14, lineHeight:21, marginBottom: 15 }}
            >Question 1/10</Text>
            <Text style={{fontFamily: 'Poppins', color: colors.primary, fontSize: 18, lineHeight: 27, textAlign: 'center'}}>
            What is the name of the traditional festival celebrated by the people of the Ga ethnic group? </Text>
        </View>

        <View style={styles.questionChoicesContainer} >
            <Choice choice='Hogbetsotso'/>
            <Choice choice='Odwira'/>
            <Choice choice='Bakatue'/>
            <Choice choice='Homowo'/>
        </View>

        <View style={styles.nextButtonContainer}>
            <Link href='/questions/finish' asChild>
                <TouchableOpacity 
                style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <Text 
                style={{fontFamily: 'Poppins', color: colors.lighttext, fontSize: 18, lineHeight: 27}}
                >Continue</Text>
                </TouchableOpacity>
            </Link>   
        </View>

        <CloseOverlay isVisible={visible} isNotVisible={() => setVisible(false)}/>

    </View>
  )
}

export default question

const styles = StyleSheet.create({
    questionContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF7CC',
        alignItems: 'center'
        
    },

    questionProgressBarContainer: {
        marginTop: 15
    },

    questionCardContainer: {
        width: 328,
        height: 199,
        borderRadius: 16,
        borderWidth: 1.5,
        borderColor: '#FFE766',
        marginTop: 25,
        backgroundColor: '#FFEF99',
        paddingVertical: 15,
        paddingHorizontal: 10,
        alignItems: 'center',
        marginBottom: 30   
    },

    questionChoicesContainer: {
        width: 328,
        height: 240,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },

    nextButtonContainer: {
        width: 200,
        height: 51,
        borderRadius: 26,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    }


})