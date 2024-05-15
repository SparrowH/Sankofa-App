import { View, Text, StyleSheet, TouchableOpacity, Image , ScrollView} from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
import { Link } from 'expo-router'

const didYouKnow = () => {
    const  rightCheveron = require('../assets/images/rightCheveron.png')
    const bookmark = require('../assets/images/Bookmark button.png')
    const share = require('../assets/images/Share button.png')
    const history = require('../assets/images/history.png')
    const whiteCheveron = require('../assets/images/whiteCheveron.png')
  return (
    <ScrollView style= {styles.Container}>
        <View style={styles.headerContainer}>
            <Link href='/(tabs)' asChild>
                <TouchableOpacity>
                    <Image source={rightCheveron}/>
                </TouchableOpacity>
            </Link>
            

            <Text 
            style={{fontFamily: 'HammerSmith', fontSize: 24, color: colors.primary}}
            >Did You Know?</Text>

            <Image source={bookmark}/>
            <Image source={share}/>
        </View>
        <View style={styles.bodyContainer}>
            <Image source={history} style={{width: 328, height: 208, borderRadius: 12, marginBottom: 20}}/>
            <Text 
            style={{fontFamily: 'HammerSmith', fontSize: 24, color: colors.primary, marginBottom: 10}}>Gold Coast</Text>
            <Text style={{fontFamily: 'Poppins', fontSize: 15, color: colors.primary, lineHeight: 24, letterSpacing: 0.4}}>
            In 1482, Ghana was known as the Gold Coast. This name was given to the region by European explorers due to the abundance of gold that could be found there.
            {"\n"}
            {"\n"}

            The Gold Coast became an important trading hub for gold and other commodities, attracting various European powers who sought to exploit its resources.{"\n"}
            {"\n"} 

            The name "Gold Coast" remained in use until Ghana gained independence from British colonial rule in 1957 and adopted its current name.
            {"\n"}
            
            </Text>
            <View style={styles.moreInfo}>
                <TouchableOpacity><Text style={{fontFamily: 'Poppins', fontSize: 16, color: 'white'}}>LEARN MORE <Image source={whiteCheveron}/></Text></TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  )
}

export default didYouKnow

const styles = StyleSheet.create({

    Container: {
        backgroundColor: '#FFE766'
    }, 
    headerContainer: {
        backgroundColor: '#FFE766',
        width: 360,
        height: 110, 
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    bodyContainer: {
        width: 360,
        height: 792,
        borderTopLeftRadius: 27,
        borderTopRightRadius: 27,
        backgroundColor: colors.background,
        paddingLeft: 15,
        paddingRight: 20,
        paddingTop: 20
    },

    moreInfo: {
        marginTop: 40,
        backgroundColor: colors.primary,
        width: 166,
        height: 44,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})