import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import colors from '../../assets/colors/colors'
import ProfileHeaderRight from '../../components/ProfileHeaderRight'
import { useState } from 'react'
import ProfileStatistics from '../../components/ProfileStatistics'
import ProfileOverView from '../../components/ProfileOverView'

const profile = () => {
  const image = require('../../assets/images/avatar5.png')
  const [isOverViewPressed, setIsOverViewPressed ] = useState(false)
  const [isStatsPressed, setIsStatsPressed] = useState(true)

  const HandlePressed = () => {
    setIsOverViewPressed(!isOverViewPressed)
    setIsStatsPressed(!isStatsPressed)
  }




  const ButtonStyles = StyleSheet.create({
    OverViewButton: {
      backgroundColor: isOverViewPressed ? '#015055' : '#FFF7CC',
      width: '50%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8
    },

    StatsViewButton: {
      backgroundColor: isStatsPressed ? '#015055' : '#FFF7CC',
      width: 123,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8
    },

    statsButtonText: {
      color: isStatsPressed ? '#D6FC92' : '#015055',
      fontFamily: 'Poppins',
      fontSize: 16,
    },

    overviewButtonText: {
      color: isOverViewPressed ? '#D6FC92' : '#015055',
      fontFamily: 'Poppins',
      fontSize: 16,
    }

  })


  return (
    <View style={styles.profileContainer}>
      <Stack.Screen
      options={{
        headerStyle: {
          backgroundColor: colors.secondary,
          height: 76,

        },
        headerTitle: 'Profile',
        headerTitleAlign: 'left',
        headerTitleStyle: {
          color: colors.primary,
          fontSize: 24,
          fontFamily: 'HammerSmith',
        },
        headerRight: () => <ProfileHeaderRight/>  
      }}
      />
      <View style={{backgroundColor: colors.secondary, width: '100%', height: 30, position: 'absolute'}}/>
      <View style={styles.profileContainer}>
        <Image source={image} resizeMode='contain' style={styles.profileImg} />
        <Text style={styles.profileName}>Georgiette Ansaah</Text>
        <View style={styles.editProfileButton}>
          <TouchableOpacity>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileTabContainer}>
          <Pressable style={ButtonStyles.OverViewButton} onPress={HandlePressed}>
            <Text style={ButtonStyles.overviewButtonText}>Overview</Text>
          </Pressable>
          <Pressable style={ButtonStyles.StatsViewButton} onPress={HandlePressed}>
            <Text style={ButtonStyles.statsButtonText}>My Statistics</Text>
          </Pressable>
        </View>

        {isStatsPressed ? <ProfileStatistics/> : <ProfileOverView/>}
        


      </View>


    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  profileContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFBE5',
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    alignItems: 'center',
  

  },

  profileImg: {
    marginTop: 24,
    width: 64,
    height: 64 
  },

  profileName: {
    fontFamily: 'HammerSmith',
    fontSize: 20,
    lineHeight: 25,
    color: colors.primary,
    marginTop: 20
  },

  editProfileButton: {
    marginTop: 15,
    width: 104,
    height: 37,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },

  editProfileText: {
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: 14
  },

  profileTabContainer: {
    width: 281,
    height: 48,
    borderRadius: 12,
    padding: 4,
    flexDirection: 'row',
    backgroundColor: '#FFF7CC',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8
  },

  overviewButton: {
    width: '48%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#015055',
    borderRadius: 8
    
  },

  statsButton: { 
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },


  overviewButtonText: {
   
    color: '#D6FC92'
  } 
})