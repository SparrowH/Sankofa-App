import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
import Achievements from './Achievements'

const ProfileOverView = () => {

  const flame = require('../assets/images/fire.png')
  const favouriteCategory = require('../assets/images/Category(7).png')

  return (
    
      <ScrollView style={styles.profile_OverView_Container}>
        <View style={styles.profileStats_Streak}>
            <Image source={flame} style={{ width: 32, height: 42, marginRight: 18 }} resizeMode='contain' />
            <View style={styles.profileStat_StreakInfo}>
                <Text style={styles.profileStat_StreakText}>19 Days</Text>
                <Text style={styles.profileStat_StreakText1}>Streak</Text>
            </View>
        </View>

        <View>
            <Text 
            style={{fontFamily: 'Poppins', fontSize: 16, lineHeight: 24, marginTop: 20, color: colors.primary}}
            >Favourite Category</Text>
            <Image 
            source={favouriteCategory} 
            style={{width: 304, height: 104, borderRadius: 16, marginTop: 10}}/>
        </View>

        <View style={{height: 550}}>
            <Text
            style={{fontFamily: 'Poppins', fontSize: 16, 
            lineHeight: 24, marginTop: 20, color: colors.primary}}
            >
              Achievements
            </Text>
            
            <Achievements heading='Bolt' info='Completed quiz in less than 2 minutes.' />
            <Achievements heading='Genius' info='Completed 10 quizzes with perfect score.'/>
            <Achievements heading='Poised' info='Kept a streak going for 10 days.'  />
            <Achievements heading='Achiever' info='Kept a streak going for 15 days.'/>

        </View>
    </ScrollView>    
  )
}

export default ProfileOverView

const styles = StyleSheet.create({
  profile_OverView_Container: {
    width: 328,
    backgroundColor: colors.secondary,
    height: '100%',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 12,
    paddingRight: 10,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 10
},
  profileStats_Streak: {
    width: 304,
    height: 80,
    flexDirection: 'row',
    paddingLeft: 30,
    backgroundColor: '#FFFBE5',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#A8B9CA',
    marginTop: 15
},

profileStat_StreakInfo: {
    height: 51
},

profileStat_StreakText: {
    fontFamily: 'Poppins',
    fontSize: 20,
    lineHeight: 30,
    color: '#11686E'
},

profileStat_StreakText1: {
    fontFamily: 'Poppins',
    fontSize: 14,
    lineHeight: 21,
    color: '#11686E'
},
})