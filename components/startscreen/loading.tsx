import React, { useEffect, useRef } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
  ImageBackground,
  Image
} from 'react-native';
import { useNavigation } from 'expo-router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Language'>;

const { width, height } = Dimensions.get('window');

export default function LoadingScreen() {
  const progressAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<NavigationProps>();
  const animationRef = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    animationRef.current = Animated.loop(
      Animated.sequence([
        Animated.timing(progressAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(progressAnim, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    );
    animationRef.current.start();

    const timeout = setTimeout(() => {
      navigation.navigate('Language');
    }, 1000);

    return () => {
      animationRef.current?.stop();
      clearTimeout(timeout);
    };
  }, [navigation, progressAnim]);

  const translateX = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 50],
  });

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
            <View>
              <Image
                source={require('../../assets/images/mainlogo.png')}
                style={styles.image} />
            </View>

            <View style={styles.loadingContainer}>
              <View style={styles.progressTrack}>
                <View style={styles.progressCircleLeft} />
                <View style={styles.progressLine} />
                <View style={styles.progressCircleRight} />
                <Animated.View
                  style={[
                    styles.carContainer,
                    {
                      transform: [{ translateX }],
                    },
                  ]}
                >
                  <Image
                    source={require('../../assets/images/vehicle.png')}
                    style={styles.vehicleimage} />

                </Animated.View>
              </View>
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
    margin: width * 0.05, // Margin based on screen width for responsiveness
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
  loadingContainer: {
    width: width * 0.7, // Responsive width based on screen width
    height: height * 0.05, // Responsive height based on screen height
    marginLeft: width * 0.15, // Responsive margin for centering the progress bar
  },
  progressTrack: {
    width: '80%',
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  progressCircleLeft: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    position: 'absolute',
    left: -18,
  },
  progressCircleRight: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    position: 'absolute',
    right: -1,
  },
  progressLine: {
    position: 'absolute',
    left: 3,
    right: 0,
    height: 10,
    backgroundColor: '#4CAF50',
  },
  carContainer: {
    position: 'absolute',
    left: '50%',
    marginLeft: -25, // Adjusted for responsiveness
  },
  image: {
    width: width * 0.8, // Responsive logo size
    height: width * 0.8, // Keeping aspect ratio for the logo
  },
  vehicleimage: {
    width: width * 0.2, // Responsive vehicle image size
    height: height * 0.1, // Responsive vehicle height
  }
});
