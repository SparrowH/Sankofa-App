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
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, category));
                const questionsData = querySnapshot.docs.map(doc => doc.data());
                const shuffledQuestions = shuffleArray(questionsData).slice(0, 10);
                setQuestions(shuffledQuestions);
                await clearProgress(); // Clear previous progress to start fresh
            } catch (error) {
                console.error('Error fetching questions: ', error);
            }
        };

        fetchQuestions();
    }, [category]);

    const handleVisibility = () => {
        setVisible(!visible);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setTimeout(() => {
            const currentQuestion = questions[currentQuestionIndex];
            if (option === currentQuestion.answer) {
                setIsCorrect(true);
                setCorrectAnswersCount(correctAnswersCount + 1);
            } else {
                setIsCorrect(false);
            }
            setTimeout(handleNextQuestion, 2000);
        }, 2000);
    };

    const handleNextQuestion = async () => {
        if (currentQuestionIndex < 9) {
            const nextIndex = currentQuestionIndex + 1;
            setCurrentQuestionIndex(nextIndex);
            setSelectedOption(null);
            setIsCorrect(null);
            await saveProgress(nextIndex);
        } else {
            await clearProgress();
            router.push({
                pathname: '/questions/finish',
                params: { score: correctAnswersCount }
            });
        }
    };

    const saveProgress = async (index) => {
        try {
            await AsyncStorage.setItem('@progress', JSON.stringify({
                category,
                currentQuestionIndex: index,
                questions,
                correctAnswersCount
            }));
        } catch (error) {
            console.error('Error saving progress: ', error);
        }
    };

    const loadProgress = async () => {
        try {
            const savedProgress = await AsyncStorage.getItem('@progress');
            if (savedProgress !== null) {
                const { currentQuestionIndex, questions: savedQuestions, correctAnswersCount } = JSON.parse(savedProgress);
                if (savedQuestions.length === questions.length) {
                    setCurrentQuestionIndex(currentQuestionIndex);
                    setCorrectAnswersCount(correctAnswersCount);
                }
            }
        } catch (error) {
            console.error('Error loading progress: ', error);
        }
    };

    const clearProgress = async () => {
        try {
            await AsyncStorage.removeItem('@progress');
        } catch (error) {
            console.error('Error clearing progress: ', error);
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
                    <Choice 
                        key={index} 
                        choice={option} 
                        onPress={() => handleOptionSelect(option)} 
                        selectedOption={selectedOption} 
                        isCorrect={isCorrect} 
                        correctAnswer={currentQuestion.answer}
                    />
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
