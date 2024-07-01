import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack screenOptions={
      {
        headerStyle: {
          height: 100
        }
      }
    }/>
  )
}

export default _layout