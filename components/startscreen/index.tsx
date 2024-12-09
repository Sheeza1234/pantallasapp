import React, { useState } from 'react';
import { useNavigation } from 'expo-router';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    ImageBackground,
    StatusBar
} from 'react-native';
import { useEffect } from 'react';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

interface FormData {
    username: string;
    fullName: string;
    countryRegion: string;
    email: string;
    phone: string;
    password: string;
}
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Confirm'>;


export default function RegisterScreen() {
    const navigation = useNavigation<NavigationProps>();
    const [formData, setFormData] = useState<FormData>({
        username: '',
        fullName: '',
        countryRegion: '',
        email: '',
        phone: '',
        password: '',
    });

    useEffect(() => {
        StatusBar.setHidden(true);
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setBarStyle('light-content');
    }, []);

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        navigation.replace('Login');
    };

    const handleChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <SafeAreaView style={styles.container}>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <ImageBackground
                    source={require('../../assets/images/backgroundimage2.jpg')}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                >
                    <View style={styles.overlay} />
                    <View style={styles.borderedContainer}>
                        <ScrollView
                            contentContainerStyle={styles.scrollContent}
                            showsVerticalScrollIndicator={false}
                        >
                            {/* VIP Logo */}
                            <View style={styles.logoContainer}>
                                <Svg height="80" width="80" viewBox="0 0 100 100">
                                    <Circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        stroke="white"
                                        strokeWidth="2"
                                        fill="transparent"
                                    />
                                    <SvgText
                                        x="50"
                                        y="60"
                                        fontSize="32"
                                        fill="white"
                                        textAnchor="middle"
                                        fontWeight="bold"
                                    >
                                        VIP
                                    </SvgText>
                                </Svg>
                            </View>

                            <Text style={styles.title}>
                                Ingresa tus datos para crear tu usuario:
                            </Text>

                            <View style={styles.formContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="NOMBRE DE USUARIO"
                                    placeholderTextColor="rgba(255, 255, 255, 0.8)"
                                    value={formData.username}
                                    onChangeText={(value) => handleChange('username', value)}
                                />

                                <TextInput
                                    style={styles.input}
                                    placeholder="NOMBRE COMPLETO"
                                    placeholderTextColor="rgba(255, 255, 255, 0.8)"
                                    value={formData.fullName}
                                    onChangeText={(value) => handleChange('fullName', value)}
                                />

                                <TextInput
                                    style={styles.input}
                                    placeholder="PAÍS - REGION"
                                    placeholderTextColor="rgba(255, 255, 255, 0.8)"
                                    value={formData.countryRegion}
                                    onChangeText={(value) => handleChange('countryRegion', value)}
                                />

                                <TextInput
                                    style={styles.input}
                                    placeholder="E-MAIL"
                                    placeholderTextColor="rgba(255, 255, 255, 0.8)"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    value={formData.email}
                                    onChangeText={(value) => handleChange('email', value)}
                                />

                                <TextInput
                                    style={styles.input}
                                    placeholder="NÚMERO DE TEL."
                                    placeholderTextColor="rgba(255, 255, 255, 0.8)"
                                    keyboardType="phone-pad"
                                    value={formData.phone}
                                    onChangeText={(value) => handleChange('phone', value)}
                                />

                                <TextInput
                                    style={styles.input}
                                    placeholder="CONTRASENA"
                                    placeholderTextColor="rgba(255, 255, 255, 0.8)"
                                    secureTextEntry
                                    value={formData.password}
                                    onChangeText={(value) => handleChange('password', value)}
                                />

                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={handleSubmit}
                                >
                                    <Text style={styles.buttonText}>CREAR CUENTA</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    backgroundImage: {
        flex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(9,109,249,0.9)',

    },
    borderedContainer: {
        flex: 1,
        margin: 20,
        borderWidth: 1,
        borderColor: '#f8f9fa',
        borderRadius: 10,
        overflow: 'hidden',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    keyboardView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    title: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 30,
    },
    formContainer: {
        width: '100%',
        gap: 16,
    },
    input: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        paddingHorizontal: 20,
        color: 'white',
        fontSize: 16,
    },
    button: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#0066FF',
        fontSize: 15,
        fontWeight: 'bold',
    },
});