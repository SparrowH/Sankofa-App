import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Choice = ({choice}) => {
  return (
    <View style={styles.choiceContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={{fontFamily: 'Poppins', fontSize: 18, lineHeight: 27, color: '#665600'}}>{choice}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Choice

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
})