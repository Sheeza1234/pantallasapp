import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image
} from 'react-native';
import { useNavigation } from 'expo-router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'LogoScreen'>;

const { width, height } = Dimensions.get('window');

export default function LogoScreen() {
  const navigation = useNavigation<NavigationProps>();

  // Timeout to navigate to the next screen
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('LoadingScreen');
    }, 4000);

    return () => clearTimeout(timeout); // Clean up on unmount
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
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
                source={require('../../assets/images/icon.png')}
                style={styles.image}
              />
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
  borderedContainer: {
    flex: 1,
    margin: width * 0.05, // Adjust margin based on screen width
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
    borderRadius: 20,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: height * 0.1, // Adjust margin based on screen height
  },
  image: {
    width: width * 0.6, // Adjust width dynamically based on screen width
    height: width * 0.6, // Adjust height dynamically based on screen width (keeping aspect ratio)
  }
});
