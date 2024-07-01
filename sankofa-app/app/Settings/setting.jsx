import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Stack, router } from 'expo-router';
import colors from '../../assets/colors/colors';
import SettingsCard from '../../components/SettingsCard';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebaseConfig'; // Ensure this path is correct

const setting = () => {
  const auth = getAuth(app);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out!');
      // Navigate to the sign-in screen or any other appropriate screen
      router.navigate('signIn'); // Ensure you have configured this route
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View style={styles.settingsContainer}>
      <Stack.Screen
        options={{
          headerTitle: 'Settings',
          headerStyle: {
            backgroundColor: '#FFFBE5',
            height: 100,
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
        icon={<MaterialIcons name="account-circle" size={24} color={colors.primary} />}
        cardInfo="Personal Info"
      />

      <SettingsCard
        icon={<MaterialCommunityIcons name="bell" size={24} color={colors.primary} />}
        cardInfo="Notification"
      />

      <SettingsCard
        icon={<MaterialIcons name="volume-up" size={24} color={colors.primary} />}
        cardInfo="Sound"
      />

      <SettingsCard
        icon={<MaterialCommunityIcons name="help-circle" size={24} color={colors.primary} />}
        cardInfo="Help Center"
      />

      <SettingsCard
        icon={<MaterialCommunityIcons name="information" size={24} color={colors.primary} />}
        cardInfo="About Sankofa"
      />

      <SettingsCard
        icon={<MaterialIcons name="logout" size={24} color={colors.primary} />}
        cardInfo="Logout"
        onPress={() => handleSignOut}
      />
    </View>
  );
}; 

export default setting;

const styles = StyleSheet.create({
  settingsContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFBE5',
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
});
