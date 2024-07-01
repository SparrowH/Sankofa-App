import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
const _layout = () => {
  return (
    <Stack screenOptions={
        {
            headerStyle: {
                backgroundColor: '#FFF7CC',
            },
            headerTitle: '',
            headerBackVisible: false,
            headerShadowVisible: false
        }
    } />
  )
}

export default _layout