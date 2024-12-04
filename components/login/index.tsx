import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Pressable,
    KeyboardAvoidingView,
    Platform,
    Image,
    ImageBackground, Dimensions
} from 'react-native';
import Svg, { Circle, Text as SvgText, Path } from 'react-native-svg';
import { useNavigation } from 'expo-router';
import GoogleIcon from '../icons/icon';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';
// import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Register'>;
interface LoginMethod {
    type: 'phone' | 'email';
}

interface LoginForm {
    email: string;
    password: string;
}

export default function LoginScreen() {
    const [loginMethod, setLoginMethod] = useState<LoginMethod['type']>('email');
    const navigation = useNavigation<NavigationProps>();

    const [form, setForm] = useState<LoginForm>({
        email: '',
        password: '',
    });
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedCountry, setSelectedCountry] = useState<CountryCode>({
        flag: '🇪🇸',
        code: '+34'
    });

    const handleLogin = () => {
        navigation.navigate('Information')
    };

    const handleGoogleLogin = () => {
    };
    const handleRegister = () => {
        navigation.navigate('Register');
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
                    <View style={styles.overlay} />
                    <View style={styles.borderedContainer}>
                        <View style={styles.content}>
                            <View style={styles.logoContainer}>
                                <Image
                                    source={require('../../assets/images/mainlogo.png')}
                                    style={styles.image}
                                />
                            </View>

                            <Text style={styles.title}>Bienvenido a VIP!</Text>
                            <Text style={styles.subtitle}>
                                Inicia sesión para gestionar tus vehículos
                            </Text>

                            {/* Login Method Toggle */}
                            <View style={styles.toggleContainer}>
                                <Pressable
                                    style={[
                                        styles.toggleButton,
                                        loginMethod === 'phone' && styles.toggleButtonActive,
                                        { borderTopLeftRadius: 25, borderBottomLeftRadius: 25 },
                                    ]}
                                    onPress={() => setLoginMethod('phone')}
                                >
                                    <Text
                                        style={[
                                            styles.toggleText,
                                            loginMethod === 'phone' && styles.toggleTextActive,
                                        ]}
                                    >
                                        Teléfono
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={[
                                        styles.toggleButton,
                                        loginMethod === 'email' && styles.toggleButtonActive,
                                        { borderTopRightRadius: 25, borderBottomRightRadius: 25 },
                                    ]}
                                    onPress={() => setLoginMethod('email')}
                                >
                                    <Text
                                        style={[
                                            styles.toggleText,
                                            loginMethod === 'email' && styles.toggleTextActive,
                                        ]}
                                    >
                                        Email
                                    </Text>
                                </Pressable>
                            </View>


                            {/* Conditional Rendering of Input Fields */}
                            {loginMethod === 'email' ? (
                                <View style={styles.formContainer}>
                                    <Text style={styles.label}>Correo Electrónico</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Ingresa tu correo"
                                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                                        value={form.email}
                                        onChangeText={(text) => setForm({ ...form, email: text })}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                    />

                                    <Text style={styles.label}>Contraseña</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Ingresa tu contraseña"
                                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                                        value={form.password}
                                        onChangeText={(text) => setForm({ ...form, password: text })}
                                        secureTextEntry
                                    />

                                    <TouchableOpacity
                                        style={styles.loginButton}
                                        onPress={handleLogin}
                                    >
                                        <Image
                                            source={require('../../assets/images/images.png')}
                                            style={styles.internetlogo} />
                                        <Text style={styles.loginButtonText} onPress={handleLogin}>Iniciar Sesión</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <View>
                                    <View style={styles.inputContainer}>
                                        <TouchableOpacity style={styles.countrySelector}>
                                            <Text style={styles.flag}>🇪🇸</Text>
                                            <Text style={styles.countryCode}>+34</Text>
                                            <Text style={styles.dropdownIcon}>▼</Text>
                                        </TouchableOpacity>
                                        <TextInput
                                            style={styles.phoneInput}
                                            placeholder="Número de teléfono"
                                            placeholderTextColor="rgba(0, 0, 0, 0.5)"
                                            value={phoneNumber}
                                            onChangeText={setPhoneNumber}
                                            keyboardType="phone-pad"
                                        />
                                    </View>

                                    {/* SMS Button */}
                                    <TouchableOpacity style={styles.smsButton} onPress={handleLogin}>
                                        <Svg width="24" height="24" viewBox="0 0 24 24">
                                            <Path
                                                d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"
                                                fill="white"
                                            />
                                        </Svg>
                                        <Text style={styles.smsButtonText} onPress={handleLogin}>Enviar Código SMS</Text>
                                    </TouchableOpacity>
                                </View>
                            )}

                            <View style={styles.divider} />


                            <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
                                <View style={styles.googleContent}>
                                    <GoogleIcon />
                                    <Text
                                        style={styles.googleButtonText}>Iniciar sesión con Google</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.registerContainer}
                                onPress={handleRegister}
                            >
                                <Text style={styles.registerText}>
                                    ¿No tenés cuenta? <Text style={styles.registerLink}>Registrate.</Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}


const { width, height } = Dimensions.get('window');

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
    content: {
        flex: 1,
    },
    keyboardView: {
        flex: 1,
    },
    logoContainer: {
        marginTop: height * 0.02, // Adjust logo container margin
    },
    title: {
        fontSize: height * 0.04, // Adjust font size based on height
        fontWeight: 'bold',
        color: 'white',
        marginLeft: width * 0.08, // Adjust left margin dynamically
    },
    subtitle: {
        fontSize: height * 0.02, // Adjust font size based on height
        color: 'rgba(255, 255, 255, 0.8)',
        marginBottom: height * 0.02, // Adjust margin dynamically
        marginLeft: width * 0.08, // Adjust left margin dynamically
    },
    toggleContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: height * 0.02, // Adjust bottom margin dynamically
        marginLeft: width * 0.08, // Adjust left margin dynamically
        width: '80%', // Use percentage width for responsiveness
    },
    toggleButton: {
        flex: 1,
        paddingVertical: height * 0.015, // Adjust padding vertically based on height
        paddingHorizontal: width * 0.06, // Adjust padding horizontally based on width
        alignItems: 'center',
    },
    toggleButtonActive: {
        backgroundColor: '#e2eafc',
        borderRadius: 35,
    },
    toggleText: {
        color: 'black',
        fontSize: width * 0.04, // Adjust font size dynamically based on width
    },
    toggleTextActive: {
        color: '#0066FF',
    },
    formContainer: {
        width: '100%',
    },
    label: {
        color: 'white',
        marginBottom: height * 0.02, // Adjust margin based on height
        fontSize: height * 0.02, // Adjust font size based on height
        width: '80%',
        borderRadius: 10,
        marginLeft: width * 0.08,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: width * 0.05, // Adjust padding horizontally based on width
        paddingVertical: height * 0.015, // Adjust padding vertically based on height
        marginLeft: width * 0.08, // Adjust left margin dynamically
        fontSize: height * 0.02, // Adjust font size based on height
        marginBottom: height * 0.025, // Adjust margin based on height
        width: '80%',
    },
    loginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingVertical: height * 0.015, // Adjust padding based on height
        width: '80%',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        marginLeft: width * 0.08, // Adjust left margin dynamically
        backgroundColor: '#0098FE',
    },
    buttonIcon: {
        marginRight: width * 0.02, // Adjust margin based on width
    },
    loginButtonText: {
        color: 'white',
        fontSize: height * 0.02, // Adjust font size based on height
        fontWeight: '500',
    },
    divider: {
        height: 2,
        width: width * 0.5,
        marginLeft: width * 0.2,
        backgroundColor: 'silver',
        marginVertical: height * 0.025, // Adjust margin based on height
    },
    googleButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: height * 0.015, // Adjust padding based on height
        alignItems: 'center',
        width: '80%',
        marginLeft: width * 0.08, // Adjust left margin dynamically
    },
    googleButtonText: {
        color: '#333',
        fontSize: height * 0.02, // Adjust font size based on height
        fontWeight: '500',
        marginLeft: width * 0.08, // Adjust left margin dynamically
    },
    googleIcon: {
        color: '#4285F4',
        fontWeight: 'bold',
    },
    registerContainer: {
        // marginTop: height * 0.03, // Adjust top margin dynamically
        alignItems: 'center',
    },
    registerText: {
        color: 'white',
        fontSize: height * 0.02, // Adjust font size based on height
    },
    registerLink: {
        textDecorationLine: 'underline',
    },
    inputContainer: {
        flexDirection: 'row',
        gap: 4,
        // marginBottom: height * 0.1, // Adjust margin bottom dynamically
        marginLeft: width * 0.08, // Adjust left margin dynamically
    },
    countrySelector: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: width * 0.05, // Adjust padding horizontally based on width
        paddingVertical: height * 0.015, // Adjust padding vertically based on height
    },
    flag: {
        fontSize: height * 0.02, // Adjust font size based on height
        marginRight: width * 0.02, // Adjust margin based on width
    },
    countryCode: {
        fontSize: height * 0.02, // Adjust font size based on height
        color: '#000',
        marginRight: width * 0.02, // Adjust margin based on width
    },
    dropdownIcon: {
        fontSize: height * 0.015, // Adjust font size based on height
        color: '#666',
    },
    phoneInput: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: width * 0.05, // Adjust padding horizontally based on width
        fontSize: height * 0.02, // Adjust font size based on height
        marginBottom: height * 0.02, // Adjust margin based on height
        width: '61%',
        height: '100%',
    },
    smsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        paddingVertical: height * 0.02, // Adjust padding based on height
        marginBottom: height * 0.025, // Adjust margin based on height
        width: '80%',
        marginLeft: width * 0.08, // Adjust left margin dynamically
    },
    smsButtonText: {
        color: 'white',
        fontSize: height * 0.02, // Adjust font size based on height
        marginLeft: width * 0.02, // Adjust margin based on width
    },
    borderedContainer: {
        flex: 1,
        margin: width * 0.05, // Adjust margin based on width
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.6)',
        borderRadius: 20,
        overflow: 'hidden',
    },
    googleContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: width * 0.4, // Adjust image width based on screen width
        height: height * 0.2, // Adjust image height based on screen height
    },
    internetlogo: {
        width: width * 0.05, // Adjust logo size based on screen width
        height: width * 0.05, // Adjust logo size based on screen width
        marginRight: width * 0.02, // Adjust margin based on width
    }
});
