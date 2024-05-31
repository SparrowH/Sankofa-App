import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'

const Achievements = ({heading, info}) => {
    const badge = require('../assets/images/Vector (copy 1).png')
  return (
    <View style={styles.achievement_Container}>
        <Image source={badge} style={{width: 40, height: 40, marginRight: 20}}/>
        <View>
            <Text 
            style={{fontFamily: 'Poppins', fontSize: 20, lineHeight: 30, color: colors.primary}}
            >{heading}
            </Text>

            <Text style={{fontFamily: 'Poppins', fontSize: 14, lineHeight: 21, color: colors.primary}}
            >{info}
            </Text>
        </View>
    </View>
  )
}

export default Achievements

const styles = StyleSheet.create({
    achievement_Container: {
        width: 304,
        height: 104,
        backgroundColor: '#D6FC92',
        borderColor: 16,
        paddingVertical: 16,
        paddingHorizontal: 24,
        flexDirection: 'row',
        borderRadius: 16,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'

    }
})