import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import colors from '../assets/colors/colors';



const data = [
    { label: 'Monthly', value: '1' },
    { label: 'Weekly', value: '2' },
]

const DropdownMenu = () => {
    const [value, setValue] = useState('1');
  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        iconStyle={styles.iconStyle}
        data={data}
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        labelField="label"
        valueField="value"
        placeholder='value'
        placeholderStyle={{color: colors.primary}}
      
      />
    </View>
  )
}

export default DropdownMenu

const styles = StyleSheet.create({
    dropdown: {
        width: 110,
        height: 40,
        paddingHorizontal: 12,
        backgroundColor: '#FFEF99',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 20,
        marginLeft: 10
    
    },

    iconStyle: {
        width: 24,
        height: 24
    },

    placeholder_Style: {
        color: colors.primary,
        fontSize: 40,
        height: 60
    }
})