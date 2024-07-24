import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Choice = ({ choice, onPress, selectedOption, isCorrect, correctAnswer }) => {
    let backgroundColor = '#FFEF99';

    if (selectedOption) {
        if (selectedOption === choice) {
            backgroundColor = isCorrect ? '#6ACE13' : '#998100';
        }
        if (isCorrect === false && choice === correctAnswer) {
            backgroundColor = '#6ACE13';
        } else if (isCorrect === false && selectedOption === choice) {
            backgroundColor = '#EB5757';
        }
    }

    return (
        <View style={[styles.choiceContainer, { backgroundColor }]}>
            <TouchableOpacity style={styles.button} onPress={onPress} disabled={selectedOption !== null}>
                <Text style={{ fontFamily: 'Poppins', fontSize: 18, lineHeight: 27, color: '#665600' }}>{choice}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Choice;

const styles = StyleSheet.create({
    choiceContainer: {
        width: 328,
        height: 48,
        borderWidth: 2,
        borderColor: '#FFE766',
        borderRadius: 16,
        paddingLeft: 30
    },

    button: {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    }
});
