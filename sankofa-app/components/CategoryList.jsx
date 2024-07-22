import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';

const CategoryList = () => {
    const [categories] = useState([
        { name: 'colonial', image: require('../assets/images/Category(2).png') },
        { name: 'postIndependence', image: require('../assets/images/Category(4).png') },
        { name: 'traditionAndCulture', image: require('../assets/images/Category(6).png') },
        { name: 'geographyAndEnvironment', image: require('../assets/images/Category(7).png') },
        { name: 'importantFigures', image: require('../assets/images/Category.png') },
        { name: 'PreConial', image: require('../assets/images/Category1-1.png') },
        { name: 'fightForInpendence', image: require('../assets/images/Category2.png') },
        { name: 'tourism', image: require('../assets/images/Category8.png') },
    ]);

    const handleOnPress = (categoryName) => {
        router.push({ pathname: '/questions/question', params: { category: categoryName } });
    };

    return (
        <FlatList
            horizontal={false}
            data={categories}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <View style={styles.imageContainer} key={index}>
                    <TouchableOpacity onPress={() => handleOnPress(item.name)}>
                        <Image source={item.image} style={styles.image} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
            )}
        />
    );
};

export default CategoryList;

const styles = StyleSheet.create({
    listContainer: {
        marginTop: 10,
    },
    imageContainer: {
        marginBottom: 5,
    },
    image: {
        maxWidth: 356,
        height: 128,
        borderRadius: 16,
    },
});
