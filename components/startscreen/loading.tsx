import React, { useEffect, useRef } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  StatusBar,
  Animated,
} from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import { useNavigation } from 'expo-router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'LogoScreen'>;

const { width, height } = Dimensions.get('window');

interface VipScreenProps {
  progress?: number;
}

export const LoadingScreen: React.FC<VipScreenProps> = () => {
  const navigation = useNavigation<NavigationProps>();
  const progressAnim = useRef(new Animated.Value(0)).current; // Animation value for progress

  useEffect(() => {
    StatusBar.setHidden(false);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('light-content');

    // Start animation
    Animated.timing(progressAnim, {
      toValue: 1, // Final progress value
      duration: 2500, // Duration of animation in ms
      useNativeDriver: false, // Use native driver for smooth animation
    }).start(() => {
      navigation.navigate('Language'); // Navigate to the next screen after animation
    });
  }, [progressAnim, navigation]);

  // Interpolate animation value to calculate car position
  const carPosition = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width * 0.15], // Line length
  });

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.borderedContainer}>
          <View style={styles.content}>
            <Image
              source={require('../../assets/images/mainlogo.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.routeContainer}>
            <Svg width={width * 0.7} height={250}>
              {/* Route Line */}
              <Line
                x1="0"
                y1="25"
                x2={width * 0.65}
                y2="25"
                stroke="#E0E0E0"
                strokeWidth="2"
              />
              <Line
                x1="0"
                y1="25"
                x2={width * 0.46}
                y2="25"
                stroke="#4CAF50"
                strokeWidth="11"
              />
              {/* Start Point */}
              <Circle cx="10" cy="25" r="8" fill="#0077B6" stroke="#FFF" strokeWidth="4" />
              {/* End Point */}
              <Circle cx={width * 0.65} cy="25" r="8" fill="#0077B6" stroke="#FFF" strokeWidth="4" />
            </Svg>
            {/* Animated Car Icon */}
            <Animated.Image
              source={require('../../assets/images/car.png')}
              style={[
                styles.carIcon,
                { transform: [{ translateX: carPosition }] },
              ]}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Fallback background color
  },
  backgroundImage: {
    flex: 1,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 180,
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
    width: width * 0.8,
    height: height * 0.3,
  },
  routeContainer: {
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  carIcon: {
    position: 'absolute',
    top: 10, // Align with the route line
    width: 90,
    height: 30,
  },
});

export default LoadingScreen;
