import { View, TouchableOpacity , StyleSheet} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../assets/colors/colors';


const ProfileHeaderRight = () => {
  return (
    <View style={styles.profileContainer}>
        <TouchableOpacity>
            <MaterialCommunityIcons name="cog-outline" size={33} color={colors.primary} />
        </TouchableOpacity>
    </View>
  )
}

export default ProfileHeaderRight

const styles = StyleSheet.create({
    profileContainer: {
        marginRight: 13,
        marginBottom: 12
    }
})