import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  StatusBar
} from 'react-native';
import { Eye, EyeOff } from 'react-native-feather';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';
import { useNavigation } from 'expo-router';
import { scale } from 'react-native-size-matters';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Information'>;



const { width, height } = Dimensions.get('window');
const keypadNumbers = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['*', '0', '#']
];

export default function PinEntryScreen() {
  const navigation = useNavigation<NavigationProps>();
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);

  const handleKeyPress = (key: string) => {
    if (pin.length < 6) {
      setPin(prev => prev + key);
    }
  };

  const togglePinVisibility = () => {
    setShowPin(!showPin);
  };
  useEffect(() => {
    StatusBar.setHidden(false);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('light-content');
  }, []);

  const handleSubmit = () => {

    navigation.navigate('Information')
  };

  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground
        source={require('../../assets/images/background1.jpg')}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.borderedContainer}>
          <View style={styles.content}>
            <Text style={styles.greeting}>¡HOLA, JUAN!</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Clave"
                placeholderTextColor="#666"
                value={pin}
                secureTextEntry={!showPin}
                editable={false}
              />
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={togglePinVisibility}
              >
                {showPin ? (
                  <Eye stroke="#666" width={24} height={24} />
                ) : (
                  <EyeOff stroke="#666" width={24} height={24} />
                )}
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>INGRESAR</Text>
            </TouchableOpacity>

            <View style={styles.logoContainer}>
              <Image
                source={require('../../assets/images/mainlogo.png')}
                style={styles.image} />
            </View>
          </View>



          <View style={styles.keypadContainer}>
            <View style={styles.keypad}>
              {keypadNumbers.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.keypadRow}>
                  {row.map((number) => (
                    <TouchableOpacity
                      key={number}
                      style={styles.keypadButton}
                      onPress={() => handleKeyPress(number)}
                    >
                      <Text style={styles.keypadButtonText}>{number}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
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
  backgroundImageStyle: {
    opacity: 0.3,
  },
  content: {
    flex: 1,
    padding: scale(20),
    alignItems: 'center',
  },
  greeting: {
    fontSize: scale(28),
    fontWeight: 'bold',
    color: '#333',
    marginTop: scale(20),
    marginBottom: scale(30),
  },
  inputContainer: {
    width: '100%',
    position: 'relative',
    marginBottom: scale(16),
  },
  input: {
    width: '90%',
    height: scale(50),
    backgroundColor: 'white',
    borderRadius: scale(15),
    paddingHorizontal: scale(20),
    marginLeft: scale(12),
    fontSize: scale(20),
    borderWidth: 1,
    borderColor: '#ccc',
  },
  eyeButton: {
    position: 'absolute',
    right: scale(40),
    top: scale(13),
  },
  submitButton: {
    width: '90%',
    height: scale(50),
    backgroundColor: '#0066FF',
    borderRadius: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(30),
  },
  submitButtonText: {
    color: 'white',
    fontSize: scale(22),
    fontWeight: '600',
  },
  logoContainer: {
    position: 'absolute',
    bottom: scale(-50), // Adjust this to control the overlap
    alignSelf: 'center',
    zIndex: 10, // Make sure the logo is above other elements
  },
  image: {
    width: width * 0.45, // Responsive width
    height: width * 0.3, // Responsive height
  },
  keypadContainer: {
    backgroundColor: 'rgba(9,109,249,0.9)',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    borderRadius: scale(40),
    position: 'relative',
  },
  keypad: {
    width: '100%',
    aspectRatio: 3 / 4,
    padding: scale(43),
  },
  keypadRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  keypadButton: {
    width: width * 0.2, // Responsive size
    height: width * 0.2, // Responsive size
    backgroundColor: 'white',
    borderRadius: (width * 0.19) / 2, // Circle border
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  keypadButtonText: {
    fontSize: scale(50),
    fontWeight: '900',
    color: '#333',
  },
  borderedContainer: {
    flex: 1,
    margin: scale(20),
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: scale(15),
    overflow: 'hidden',
  },
});

