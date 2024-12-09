import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar
} from 'react-native';
import { useNavigation } from 'expo-router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'LogoScreen'>;

const { width, height } = Dimensions.get('window');

export default function LoadingScreen() {
  const navigation = useNavigation<NavigationProps>();
  useEffect(() => {
    StatusBar.setHidden(true);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('light-content');
  }, []);


  // Timeout to navigate to the next screen
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('LoadingScreen');
    }, 3000);

    return () => clearTimeout(timeout); // Clean up on unmount
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/startscreen.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
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
});
