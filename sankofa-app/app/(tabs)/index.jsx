import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, Pressable} from 'react-native'
import React from 'react'
import Stack from 'expo-router/stack'
import HeaderLeft from '../../components/HeaderLeft'
import HeaderRight from '../../components/HeaderRight'
import colors from '../../assets/colors/colors'
import { Link } from 'expo-router'

const home = () => {

  const search = require('../../assets/images/mdi_magnify.png')
  const dailyQuiz = require('../../assets/images/dailyQuiz.png')
  const didYouKnow= require('../../assets/images/didYouKnow.png')
  const cheveron = require('../../assets/images/mdi_chevron-left.png')
  const category1 = require('../../assets/images/Category.png')
  const category2 = require('../../assets/images/Category2.png')
  const fire = require('../../assets/images/fire.png')
  const trophy = require('../../assets/images/mdi_trophy.png')

  return (
    <ScrollView style={styles.headerContainer} >
       <Stack.Screen options={{
       headerLeft: () => <HeaderLeft/>,
       headerRight: () => < HeaderRight/>,
       contentStyle: {
        alignItems: 'center'
       },
       headerStyle: {
        backgroundColor: '#FFEF99',
        height: 100
    },
    headerLeftContainerStyle: {
      marginTop: 33,
      height: 55
    },
       
       
     }} />

    <View style={styles.sectionOneContainer}>
      <View style={styles.searchContainer}>
        <View style={styles.img} ><Image source={search}/></View>
        <TextInput placeholder='Search' style={styles.searchInput}/>
      </View>

      <View style={styles.dailyQuiz}>
        <Link href='didYouKnow' asChild>
          <TouchableOpacity>
            <Image source={dailyQuiz} style={{width: 328, height: 120}}/>
        </TouchableOpacity>
        </Link>
        
      </View>
    </View> 

    <View style={styles.sectionTwoContainer}>
      <Link href='didYouKnow' asChild>
        <TouchableOpacity>
          <Image source={didYouKnow} style={{width: 328, height: 120}}/>
        </TouchableOpacity>
      </Link>
      
      <View style={styles.textheadingContainer}>
        <Text style={styles.textHeading}>Popular Categories</Text>
        <Link href='discover' asChild>
          <Pressable><Text style={styles.moreInfo}>See all<Image source={cheveron} /></Text></Pressable>
        </Link>
      </View>
      <View style={styles.categoryContainer}>
        <Image source={category1} style={styles.categoryImg} resizeMode='contain'/>
        <Image source={category2} style={styles.categoryImg}  resizeMode='contain'/>
      </View>

      <View style={styles.textheadingContainer}>
        <Text style={styles.textHeading}>Stats</Text>
        <Text style={styles.moreInfo}>See all<Image source={cheveron} /></Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.streakContainer}>
          <Image source={fire} style={{width: 33, height: 42}}/>
          <Text style={{fontFamily: 'Poppins', fontSize: 20, color: 'white'}}>19 Days</Text>
          <Text style={{fontFamily: 'Poppins', fontSize: 14, color: 'white'}}>Streak</Text>
        </View>

        <View style={styles.trophyContainer}>
          <Image source={trophy} style={{width: 47, height: 47}}/>
          <Text style={{fontFamily: 'Poppins', fontSize: 20, color: colors.primary }} > 7 Badges</Text>
          <Text style={{fontFamily: 'Poppins', fontSize: 14, color: colors.primary}}>Achievements</Text>
        </View>    
      </View>
       
    </View>
  </ScrollView>
    
  )
}

export default home

const styles = StyleSheet.create({
  headerContainer: {
   
    width: '100%',
    height: '40%',
    backgroundColor: '#FFEF99'

  },

  sectionOneContainer: {
    backgroundColor: '#FFEF99',
    paddingBottom: 20
  
  },

  searchContainer: {
    backgroundColor: colors.lighttext,
    width: '90%',
    height: 48,
    marginTop: 20,
    borderRadius: 24,
    flexDirection: 'row',
    elevation: 3,
    marginLeft: 15

  },

  img: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  searchInput: {
    fontFamily: 'Poppins',
    fontSize: 18,
    width: '100%',
    height: '100%',
    flex: 1/2
  },

  dailyQuiz: {
    marginTop: 20,
    marginLeft: 15
  },

  sectionTwoContainer: {
    flex: 1/2,
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32 ,
    paddingTop: 15,
    paddingLeft: 10

  },

  textHeading: {
    fontFamily: 'HammerSmith',
    fontSize: 24,
    color: colors.primary,
  },

  moreInfo: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: colors.primary
  },

  textheadingContainer: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    marginTop: 16,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 15
    
  },

  categoryImg: {
    width: 328,
    height: 128,
    marginBottom: 8
  },

  categoryContainer: {
    marginBottom: 7,
    
  },

  statsContainer: {
    marginTop: 15,
    flexDirection: 'row' ,
    marginBottom: 15
  },

  streakContainer: {
    backgroundColor: '#11686E',
    width: 160,
    height: 160,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },

  trophyContainer: {
    backgroundColor: '#D6FC92',
    width: 160,
    height: 160,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'

  },



 





})