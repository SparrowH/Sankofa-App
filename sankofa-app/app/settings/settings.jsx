import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import colors from '../../assets/colors/colors'
import SettingsCard from '../../components/SettingsCard'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const settings = () => {
  return (
    <View style={styles.settingsContainer}>
        <Stack.Screen options={{
           headerTitle: 'Settings',
           headerStyle: {
            backgroundColor: '#FFFBE5',
            height: 100
            
           },
           headerTitleStyle: {
            color: colors.primary,
            fontSize: 25,
            fontFamily: 'HammerSmith',
           },

           headerTitleAlign: 'left',
           headerShadowVisible: false,  
        }}
        />

        <SettingsCard 
        icon = {<MaterialIcons name="account-circle" size={24} color={colors.primary}/>}
        cardInfo = 'Personal Info'
        />

        <SettingsCard 
        icon = {<MaterialCommunityIcons name="bell" size={24} color={colors.primary} />}
        cardInfo = 'Notification'
        />


        <SettingsCard 
        icon = {<MaterialIcons name="volume-up" size={24} color={colors.primary}/>}
        cardInfo = 'Personal Info'
        />


        <SettingsCard 
        icon = {<MaterialCommunityIcons name="help-circle" size={24} color={colors.primary} />}
        cardInfo = 'Help Center'
        />

        <SettingsCard 
        icon = {<MaterialCommunityIcons name="information" size={24} color={colors.primary} />}
        cardInfo = 'About Sankofa'
        />

        <SettingsCard 
        icon = {<MaterialIcons name="logout" size={24} color={colors.primary} />}
        cardInfo = 'Logout'
        />



    </View>
  )
}

export default settings

const styles = StyleSheet.create({
    settingsContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFBE5',
        paddingVertical: 25,
        paddingHorizontal: 15
    }
})