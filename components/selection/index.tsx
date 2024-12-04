import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ImageBackground,
    Image
} from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const { width } = Dimensions.get('window');

export default function LanguageSelect() {
    const navigation = useNavigation<NavigationProps>();
    const handleLanguageSelect = (language: string) => {
        navigation.navigate('Login');

    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/images/background.jpg')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                {/* Translucent overlay */}
                <View style={styles.overlay} />
                <View style={styles.borderedContainer}>
                    <View style={styles.content}>
                        {/* VIP Logo */}
                        <View style={styles.logoContainer}>
                            <Image
                                source={require('../../assets/images/mainlogo.png')}
                                style={styles.image} />
                        </View>

                        {/* Language Buttons */}
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => handleLanguageSelect('es')}
                            >
                                <Text style={styles.buttonText}>Español</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => handleLanguageSelect('en')}
                            >
                                <Text style={styles.buttonText}>English</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => handleLanguageSelect('pt')}
                            >
                                <Text style={styles.buttonText}>Português</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>

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
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    borderedContainer: {
        flex: 1,
        margin: 20,
        borderWidth: 1,
        borderColor: '#f8f9fa',
        borderRadius: 10,
        overflow: 'hidden',
    },
    logoContainer: {
        marginBottom: 60,
    },
    buttonContainer: {
        width: '85%',
        maxWidth: 400,
        gap: 16,
    },
    button: {
        width: '100%',
        paddingVertical: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '400',
    },
    image: {
        width: 320,
        height: 220,
    }
});
