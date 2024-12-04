import React, { useRef, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Dimensions,
    Platform,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';
import { useNavigation } from 'expo-router';
import Navbar from '../navbar';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Confirm'>;

const { width, height } = Dimensions.get('window'); // Get window dimensions

export default function SMSVerificationScreen() {
    const navigation = useNavigation<NavigationProps>();
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef<Array<TextInput | null>>([]);

    const handleCodeChange = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        // Move to next input if value entered
        if (text && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        // Move to previous input on backspace if current input is empty
        if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        const verificationCode = code.join('');
        navigation.navigate('Pinentry')
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/images/background.jpg')}
                style={styles.background}
                imageStyle={styles.backgroundImage}
            >
                <View style={styles.borderedContainer}>
                    <View style={styles.content}>
                        <Text style={styles.title}>Verificación SMS</Text>

                        <View style={styles.codeContainer}>
                            {code.map((digit, index) => (
                                <TextInput
                                    key={index}
                                    ref={ref => inputRefs.current[index] = ref}
                                    style={styles.codeInput}
                                    value={digit}
                                    onChangeText={text => handleCodeChange(text, index)}
                                    onKeyPress={e => handleKeyPress(e, index)}
                                    keyboardType="number-pad"
                                    maxLength={1}
                                    selectTextOnFocus
                                />
                            ))}
                        </View>

                        <TouchableOpacity
                            style={styles.verifyButton}
                            onPress={handleVerify}
                        >
                            <Text style={styles.verifyButtonText}>Verificar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Navbar />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    background: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.1,
    },
    content: {
        flex: 1,
        padding: width * 0.05, // Adjust padding based on screen width
        alignItems: 'center',
    },
    title: {
        fontSize: width * 0.08, // Adjust font size dynamically
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
        marginBottom: 20,
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
        marginBottom: 20,
    },
    codeInput: {
        width: width * 0.12, // Adjust width dynamically
        height: width * 0.12, // Adjust height dynamically
        borderWidth: 1,
        borderColor: '#0098FE',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: width * 0.06, // Adjust font size dynamically
        backgroundColor: 'white',
    },
    verifyButton: {
        backgroundColor: '#0A7EE7',
        borderRadius: 10,
        paddingVertical: height * 0.015, // Adjust vertical padding
        paddingHorizontal: width * 0.1, // Adjust horizontal padding
        width: '90%',
        alignItems: 'center',
    },
    verifyButtonText: {
        color: 'white',
        fontSize: width * 0.06, // Adjust font size dynamically
        fontWeight: '300',
    },
    navigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#000',
        paddingVertical: Platform.OS === 'ios' ? 20 : 10, // Adjust for platform
    },
    navButton: {
        padding: 10,
    },
    borderedContainer: {
        flex: 1,
        margin: width * 0.05, // Adjust margin dynamically
        marginBottom: 0,
        borderWidth: 1,
        borderColor: '#0098FE',
        borderRadius: 25,
        overflow: 'hidden',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
});
