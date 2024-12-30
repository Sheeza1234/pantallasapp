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
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('LoadingScreen');
    }, 3000);

    return () => clearTimeout(timeout); // Clean up on unmount
  }, [navigation]);


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
  image: {
    width: width * 1,
    height: height * 0.3,
  },
});
