import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions, StatusBar
} from 'react-native';


interface AccountDetails {
  username: string;
  fullName: string;
  location: string;
  email: string;
  phone: string;
}
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Verification'>;




export default function AccountConfirmation() {
  const navigation = useNavigation<NavigationProps>();
  const accountDetails: AccountDetails = {
    username: "AlexYUPI",
    fullName: "Juan Alex Flores Salas",
    location: "Perú - Arequipa",
    email: "aflores@tupiglobal.com",
    phone: "+51 921 393 148",
  };
  useEffect(() => {
    StatusBar.setHidden(true);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('light-content');
  }, []);
  const handleStart = () => {
    console.log('Starting the app...');
    navigation.navigate('Verification')

  };

  const InfoField = ({ text }: { text: string }) => (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldText}>{text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.borderedContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.title}>CREAR CUENTA</Text>

            {/* VIP Logo */}
            <View style={styles.logoContainer}>
              <Image
                source={require('../../assets/images/mainlogo.png')}
                style={styles.image} />
            </View>

            <View style={styles.formContainer}>
              <InfoField text={accountDetails.username} />
              <InfoField text={accountDetails.fullName} />
              <View style={styles.fieldContainer}>
                <Text style={styles.fieldText}>
                  🇵🇪 {accountDetails.location}
                </Text>
              </View>
              <InfoField text={accountDetails.email} />
              <InfoField text={accountDetails.phone} />
              <View style={styles.fieldContainer}>
                <Text style={styles.fieldText}>
                  {'*'.repeat(20)}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={handleStart}
            >
              <Text style={styles.buttonText}>INICIO</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
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

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: width * 0.05,  // Adjust horizontal padding based on screen width
    // paddingVertical: height * 0.05,   // Adjust vertical padding based on screen height
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: width * 0.07,   // Font size adjusted relative to screen width
    fontWeight: 'bold',
    marginTop: height * 0.05,  // Margin top based on screen height
  },
  logoContainer: {
    alignItems: 'center',
    // marginBottom: height * 0.01,  // Margin bottom adjusted for responsiveness
  },
  formContainer: {
    width: '100%',
    gap: height * 0.015,  // Adjust gap between form elements based on screen height
    // marginBottom: height * 0.05,  // Margin bottom adjusted for responsiveness
  },
  fieldContainer: {
    width: '80%',
    marginLeft: width * 0.075,  // Responsive margin left
    height: height * 0.065,  // Responsive height based on screen height
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    paddingHorizontal: width * 0.02,  // Responsive padding
    backgroundColor: '#0098FE',
  },
  fieldText: {
    color: 'white',
    fontSize: width * 0.055,  // Font size responsive to screen width
    textAlign: 'center',
  },
  button: {
    width: '80%',
    height: height * 0.065,  // Responsive height based on screen height
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,  // Margin top based on screen height
  },
  buttonText: {
    color: '#0098FE',
    fontSize: width * 0.08,   // Font size adjusted relative to screen width
    fontWeight: 'bold',
  },
  borderedContainer: {
    flex: 1,
    margin: width * 0.05,  // Responsive margin
    borderWidth: 1,
    borderColor: '#f8f9fa',
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: width * 0.5,  // Image width adjusted to be responsive
    height: height * 0.19,  // Image height adjusted to be responsive
  }
});
