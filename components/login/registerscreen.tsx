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
    Image, Dimensions
} from 'react-native';
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

const { width, height } = Dimensions.get('window');
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

    const handleSubmit = () => {
        navigation.navigate('Confirm');
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
                    source={require('../../assets/images/background.jpg')}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                >
                    {/* Translucent overlay */}
                    <View style={styles.overlay} />
                    <View style={styles.borderedContainer}>
                        <ScrollView
                            contentContainerStyle={styles.scrollContent}
                            showsVerticalScrollIndicator={false}
                        >
                            {/* VIP Logo */}
                            <View style={styles.logoContainer}>
                                <Image
                                    source={require('../../assets/images/mainlogo.png')}
                                    style={styles.image} />
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
    keyboardView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: width * 0.05, // Adjust horizontal padding based on screen width
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: height * 0.03, // Adjust margin top for responsiveness
    },
    title: {
        color: 'white',
        fontSize: width * 0.07, // Font size responsive to screen width
        textAlign: 'center',
        marginBottom: height * 0.03, // Responsive margin bottom
    },
    formContainer: {
        width: '100%',
        gap: height * 0.02, // Adjust gap between form elements based on screen height
    },
    input: {
        width: '80%',
        height: height * 0.06, // Responsive height based on screen height
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        paddingHorizontal: width * 0.05, // Responsive padding based on screen width
        color: 'white',
        fontSize: width * 0.05, // Font size responsive to screen width
        textAlign: 'center',
        marginLeft: width * 0.07, // Responsive margin left
        backgroundColor: '#0098FE',
    },
    button: {
        height: height * 0.06, // Responsive height based on screen height
        borderRadius: 15,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.01, // Adjust margin top for responsiveness
        width: '80%',
        marginLeft: width * 0.07, // Responsive margin left
    },
    buttonText: {
        color: '#0066FF',
        fontSize: width * 0.08, // Font size responsive to screen width
        fontWeight: 'bold',
        marginLeft: 10,
    },
    borderedContainer: {
        flex: 1,
        margin: width * 0.05, // Adjust margin for responsiveness
        borderWidth: 1,
        borderColor: '#f8f9fa',
        borderRadius: 15,
        overflow: 'hidden',
    },
    image: {
        width: width * 0.5, // Responsive image width
        height: height * 0.15, // Responsive image height
    }
});

