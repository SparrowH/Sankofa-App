import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Overlay } from '@rneui/themed';
import { useState } from 'react';

const AvatarOverlay = ({children, isVisible, notVisible}) => {

  return (
    <View>
      <Overlay 
      isVisible={isVisible} 
      onBackdropPress={notVisible} 
      overlayStyle={styles.overlayContainer}>
        <Text style={styles.overlayText}>Choose an avatar</Text>
        <View>{children}</View>
          
      </Overlay>
    </View>
  )
}

export default AvatarOverlay

const styles = StyleSheet.create({
  overlayContainer: {
    backgroundColor: '#FFEF99',
    padding: 20,
    width: 310,
    height: 188,
    alignItems: 'center',
    borderRadius: 8,
  },

  overlayText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 24,
  }
})