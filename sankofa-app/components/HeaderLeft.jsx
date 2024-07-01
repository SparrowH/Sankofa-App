import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebaseConfig';
import { useEffect } from 'react';
import { useState } from 'react';


const HeaderLeft = () => {

const auth = getAuth(app);
const [displayName, setDisplayName] = useState(null)

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
       setDisplayName(user.displayName);
       console.log(user.displayName)
      console.log('User logged in:', displayName);
      // Update UI or handle logic based on displayName
    }
  });

  return unsubscribe;
}, []);



  return (
    <View style={styles.headerLeftContainer}>
      <Text style={styles.textHeading}>Hello {displayName}</Text>
      <Text style={styles.textInfo}>Let’s start your quiz now</Text>
    </View>
  )
}

export default HeaderLeft

const styles = StyleSheet.create({
    textHeading: {
        color: colors.primary,
        fontFamily: 'HammerSmith',
        fontSize: 24, 
    },

    textInfo: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: colors.primary
    }, 

    headerLeftContainer: {
      marginLeft: 15,
    }
})
