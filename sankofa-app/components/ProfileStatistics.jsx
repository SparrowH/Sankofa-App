import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
import DropdownMenu from './DropdownMenu'
import StatisticsDetail from './StatisticsDetail'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Achievements from './Achievements'


const ProfileStatistics = () => {
    
  return (
    <ScrollView style={styles.profile_Statistics_Container}>

        <View style={styles.profileStats_Details}>
            <DropdownMenu/>
            <StatisticsDetail/>
            <View style={styles.profileStats_Records}>
                <View style={styles.profileStats_Records_Scores}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialIcons name="sports-score" size={24} color="black" />
                        <Text style={{fontFamily: 'Poppins', fontSize: 20, lineHeight: 30, marginLeft: 8}}>14</Text>
                    </View>
                    <Text 
                    style={{fontFamily: 'Poppins', fontSize: 14, lineHeight: 21, color: colors.primary}}
                    >Perfect Scores
                    </Text>
                </View>
                <View style={styles.profileStats_Records_records}>
                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="timer-outline" size={24} color={colors.background} />
                        <Text 
                        style={{fontFamily: 'Poppins', fontSize: 20, 
                        lineHeight: 30, marginLeft: 8, color: colors.background}}
                        >01:30</Text>
                    </View>
                    <Text
                    style={{fontFamily: 'Poppins', fontSize: 14, lineHeight: 21, color: colors.background}}

                    >Fastest Record</Text>
                </View>
            </View>
        </View>

        
    </ScrollView>
  )
}

export default ProfileStatistics

const styles = StyleSheet.create({
    profile_Statistics_Container: {
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
        paddingBottom: 30
    },


    

    profileStats_Details: {
        width: 304,
        height: 440,
        backgroundColor: '#FFFBE5',
        marginTop: 15,
        borderRadius: 16,
        paddingTop: 20,
        paddingHorizontal: 10
    },

    profileStats_Records: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 40,
        maxWidth: 264,
        height: 71 , 
        marginLeft: 10
    },

    profileStats_Records_Scores: {
        width: 128,
        backgroundColor: '#FFEF99',
        borderRadius: 8,
        padding: 8,
        height: '100%'
    },

    profileStats_Records_records: {
        backgroundColor: colors.primary,
        width: 128,
        borderRadius: 8,
        padding: 8,
        height: '100%'
    }

})