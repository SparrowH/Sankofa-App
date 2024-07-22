import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import * as Progress from 'react-native-progress';
import colors from '../../assets/colors/colors';
import Choice from '../../components/Choice';
import CloseOverlay from '../../components/CloseOverlay';
import { MaterialIcons } from '@expo/vector-icons';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};


const Question = () => {
    const { category } = useLocalSearchParams();
    const [visible, setVisible] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, category));
                const questionsData = querySnapshot.docs.map(doc => doc.data());
                const shuffledQuestions = shuffleArray(questionsData).slice(0, 10);
                setQuestions(shuffledQuestions);
            } catch (error) {
                console.error('Error fetching questions: ', error);
            }
        };

        fetchQuestions();
    }, [category]);

    const handleVisibility = () => {
        setVisible(!visible);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < 9) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            router.push('/questions/finish'); // Navigate to finish screen
        }
    };

    if (questions.length === 0) {
        return (
            <View style={styles.questionContainer}>
                <Text>Loading...</Text>
            </View>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <View style={styles.questionContainer}>
            <Stack.Screen
                options={{
                    headerRight: () => (
                        <View style={{ marginRight: 15, marginTop: 20 }}>
                            <TouchableOpacity onPress={handleVisibility}>
                                <MaterialIcons name="close" size={27} color={colors.primary} />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
            <View style={styles.questionProgressBarContainer}>
                <Progress.Bar
                    width={280}
                    progress={(currentQuestionIndex + 1) / 10}
                    color={colors.primary}
                    height={25}
                    animated={true}
                    unfilledColor={colors.background}
                    animationType={'spring'}
                    borderWidth={4}
                    borderColor='#FFE766'
                    borderRadius={20}
                />
            </View>
            <View style={styles.questionCardContainer}>
                <Text style={{ fontFamily: 'Poppins', color: '#665600', fontSize: 14, lineHeight: 21, marginBottom: 10 }}>
                    Question {currentQuestionIndex + 1}/10
                </Text>
                <Text style={{ fontFamily: 'Poppins', color: colors.primary, fontSize: 18, lineHeight: 27, textAlign: 'center', marginBottom: 10 }}>
                    {currentQuestion.question}
                </Text>
            </View>
            <View style={styles.questionChoicesContainer}>
                {currentQuestion.options.map((option, index) => (
                    <Choice key={index} choice={option} />
                ))}
            </View>
            <View style={styles.nextButtonContainer}>
                <TouchableOpacity
                    style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
                    onPress={handleNextQuestion}
                >
                    <Text style={{ fontFamily: 'Poppins', color: colors.lighttext, fontSize: 18, lineHeight: 27 }}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
            <CloseOverlay isVisible={visible} isNotVisible={() => setVisible(false)} />
        </View>
    );
};

export default Question;

const styles = StyleSheet.create({
    questionContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF7CC',
        alignItems: 'center'
    },
    questionProgressBarContainer: {
        marginTop: 15
    },
    questionCardContainer: {
        width: 328,
        height: 199,
        borderRadius: 16,
        borderWidth: 1.5,
        borderColor: '#FFE766',
        marginTop: 25,
        backgroundColor: '#FFEF99',
        paddingVertical: 15,
        paddingHorizontal: 10,
        alignItems: 'center',
        marginBottom: 30,
        padding: 10

    },

    questionChoicesContainer: {
        width: 328,
        height: 240,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    
    nextButtonContainer: {
        width: 200,
        height: 51,
        borderRadius: 26,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
