import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import DiscoverHeader from '../../components/DiscoverHeader'
import colors from '../../assets/colors/colors'
import CategoryList from '../../components/CategoryList'


const discover = () => {
  return (
    <View style={styles.discoverContainer} >
      <Stack.Screen options={{
        headerLeft: () => <DiscoverHeader/>,
        headerStyle: {
          backgroundColor: colors.secondary,
          height: 75
        },  
      }}/>

      <CategoryList/>
    </View>
  )
}

export default discover

const styles = StyleSheet.create({
  discoverContainer: {
    backgroundColor:colors.background,
    width: '100%',
    height: '100%',
    
  }
})