import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  StatusBar,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;
const { width, height } = Dimensions.get('window');

export default function LanguageSelect() {
  const navigation = useNavigation<NavigationProps>();

  const handleLanguageSelect = (language: string) => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    StatusBar.setHidden(false);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('light-content');
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.borderedContainer}>
          <View style={styles.content}>
            {/* VIP Logo */}
            <View>
              <Image
                source={require('../../assets/images/mainlogo.png')}
                style={styles.image}
              />
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
    backgroundColor: 'black', // Fallback background color
  },
  backgroundImage: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderedContainer: {
    flex: 1,
    margin: width * 0.05,
    borderWidth: 1,
    borderColor: '#f8f9fa',
    borderRadius: width * 0.025,
    overflow: 'hidden',
  },
  buttonContainer: {
    width: '70%',
    maxWidth: 400,
    gap: height * 0.02,
  },
  button: {
    width: '100%',
    paddingVertical: height * 0.02,
    borderRadius: width * 0.028,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.05,
    textAlign: 'center',
    fontWeight: '400',
  },
  image: {
    width: width * 0.8,
    height: height * 0.3,
  },
});
