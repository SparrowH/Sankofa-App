import { View, Text } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'
import colors from '../assets/colors/colors'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { StatusBar } from 'react-native';

const RootLayout = () => {

    const [fontsLoaded, fontError] = useFonts({
        'Poppins': require('../assets/fonts/Poppins-Regular.ttf'),
        'PoppinsBold': require('../assets/fonts/Poppins-Bold.ttf'),
        'HammerSmith': require('../assets/fonts/HammersmithOne-Regular.ttf')

      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }

  return (
    <Stack
     onLayout={onLayoutRootView}
     screenOptions={{
        headerTitle: '',
        headerShadowVisible: false,
        headerShown: false,
        headerStyle: {
            backgroundColor: '#FFEF99', 

        },
        statusBarColor: colors.primary,
        headerBackVisible: false,      
    
    }}/>
  )
}

export default RootLayout