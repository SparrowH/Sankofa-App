import React from 'react';
import { Tabs } from 'expo-router';
import colors from '../../assets/colors/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
    tabBarActiveTintColor: colors.secondary,
    tabBarActiveBackgroundColor: colors.primary,
    tabBarLabelStyle: {
        fontFamily: 'Poppins',
        fontSize: 12
    } ,
    tabBarItemStyle: {maxWidth: 76, height:'100%', justifyContent: 'center',
     borderRadius: 8, marginLeft: 20, marginRight: 20,},
    tabBarStyle: {
        height: 60, alignItems: 'flex-start',
        backgroundColor: '#FFF7CC', 
    },

    headerTitle:'',
    
    
    headerRightContainerStyle: {
      marginTop: 20
    },

    
  
    }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home-outline" size={32} color={color} />,
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="compass-outline" size={32} color={color}  />,
        }}
      />

        <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) =><MaterialCommunityIcons name="account-circle-outline" size={32} color={color} />,
          
        }}
      />
    </Tabs>
  );
}
