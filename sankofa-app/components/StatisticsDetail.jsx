import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CircularProgress from 'react-native-circular-progress-indicator';
import colors from '../assets/colors/colors';

const StatisticsDetail = () => {
  return (
    <View style={styles.statsDetailContainer}>
        <Text style={styles.statsDetailText} >
        You have played a total
        26 quizzes this month! 🎉
        </Text>

        <CircularProgress
        value={26}
        progressValueColor={'#235C04'}
        radius={80}
        title={'quizes taken'}
        titleColor={'#449C0A'}
        titleStyle={{fontWeight: 'bold', fontSize: 12, }}
        activeStrokeColor={'#449C0A'}
        inActiveStrokeColor={'#D6FC92'}
        clockwise={true}
        activeStrokeWidth={20}
        inActiveStrokeWidth={20}
        progressValueStyle={{fontWeight: 'bold'}}
      />


    </View>
  )
}

export default StatisticsDetail

const styles = StyleSheet.create({
    statsDetailContainer: {
        width: 270,
        alignItems: 'center',
    },

    statsDetailText: {
      fontFamily: 'Poppins',
      fontSize: 16,
      lineHeight: 24,
      color: colors.primary,
      marginBottom: 15
    }


})