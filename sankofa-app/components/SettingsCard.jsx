import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../assets/colors/colors';

const SettingsCard = ({ icon, cardInfo, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.settingsCard}>
      <View style={styles.settingsCard_Info}>
        <View>{icon}</View>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontSize: 18,
            lineHeight: 27,
            color: colors.primary,
          }}
        >
          {cardInfo}
        </Text>
      </View>
      <MaterialIcons name="chevron-right" size={24} color={colors.primary} />
    </TouchableOpacity>
  );
};

export default SettingsCard;

const styles = StyleSheet.create({
  settingsCard: {
    width: 328,
    height: 51,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderWidth: 1,
    backgroundColor: '#FFF7CC',
    borderColor: '#FFEF99',
    marginBottom: 18,
    paddingRight: 16,
  },
  settingsCard_Info: {
    width: 174,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
