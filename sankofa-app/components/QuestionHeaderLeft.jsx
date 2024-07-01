import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors';

const QuestionHeaderLeft = () => {
    const [visible, setVisible] = useState(false)

    const HandleVisibility = () => {

    }
  return (
    <View style={{marginRight: 15, marginTop: 20}}>
        <TouchableOpacity onPress={HandleVisibility}>
            <MaterialIcons name="close" size={27} color={colors.primary} />
        </TouchableOpacity>
    </View>
  )
}

export default QuestionHeaderLeft