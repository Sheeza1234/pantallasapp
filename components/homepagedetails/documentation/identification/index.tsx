import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar
} from 'react-native';
import Navbar from '../../../navbar';
import * as ImagePicker from 'expo-image-picker';
import { ChevronDown, ChevronUp } from 'react-native-feather';
import { useEffect } from 'react';

const { width, height } = Dimensions.get('window');

export default function IdentificationInfoScreen() {
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [isMainDropdownOpen1, setIsMainDropdownOpen1] = useState(false);

  const toggleMainDropdown = () => {
    ;
    setIsMainDropdownOpen(!isMainDropdownOpen);
  };
  const toggleMainDropdown1 = () => {
    setIsMainDropdownOpen1(!isMainDropdownOpen1)
  }
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  useEffect(() => {
    StatusBar.setHidden(false);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('light-content');
  }, []);

  const pickImage = async () => {
    // Request permissions to access media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access gallery is required!');
      return;
    }

    // Open image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets?.[0]?.uri) {
      setSelectedImage(result.assets[0].uri); // Set selected image URI
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/images/background1.jpg')}
        style={styles.background}
        imageStyle={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.borderedContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>INFORMACIÓN</Text>
            <Text style={styles.headerText}>VEHÍCULO PERSONAL</Text>
          </View>

          <TouchableOpacity style={styles.subDropdown} >
            <Text style={styles.subDropdownText}>
              Licencia Nacional de Conducir
            </Text>
            <ChevronDown
              width={width * 0.09}
              height={width * 0.09}
              color="#0066FF"
            />
          </TouchableOpacity>
          <TouchableOpacity style={[
            styles.subDropdown,
            isMainDropdownOpen
              ? { width: '95%' } // Open width
              : { width: '80%', marginLeft: 55 }, // Closed width
          ]} onPress={toggleMainDropdown}>
            <Text style={styles.subDropdownText}>
              Alfa Romeo              AA275HT
            </Text>
            <Text style={styles.arrows}>{isMainDropdownOpen ? (
              <ChevronUp
                width={width * 0.09}
                height={width * 0.09}
                color="#0066FF"
              />
            ) : (
              <ChevronDown
                width={width * 0.09}
                height={width * 0.09}
                color="#0066FF"
              />
            )}</Text>
          </TouchableOpacity>
          {isMainDropdownOpen && (
            <View>
              <TouchableOpacity style={styles.subDropdown1} onPress={pickImage}>
                <Text style={styles.subDropdownText1}>Tomar Fotografía</Text>
                <Image
                  source={require('../../../../assets/images/Iconos/PNG/camera.jpg')}
                  style={styles.arrow}
                />
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity style={[
            styles.subDropdown,
            isMainDropdownOpen1
              ? { width: '95%' } // Open width
              : { width: '80%', marginLeft: 55, } // Closed width
          ]} onPress={toggleMainDropdown1}>
            <Text style={styles.subDropdownText}>
              Toyota                        AB369ES
            </Text>
            <Text style={styles.arrows}>{isMainDropdownOpen1 ? (
              <ChevronUp
                width={width * 0.09}
                height={width * 0.09}
                color="#0066FF"
              />
            ) : (
              <ChevronDown
                width={width * 0.09}
                height={width * 0.09}
                color="#0066FF"
              />
            )}</Text>
          </TouchableOpacity>
          {isMainDropdownOpen1 && (
            <View>
              <TouchableOpacity style={styles.subDropdown1} onPress={pickImage}>
                <Text style={styles.subDropdownText1}>Tomar Fotografía</Text>
                <Image
                  source={require('../../../../assets/images/Iconos/PNG/camera.jpg')}
                  style={styles.arrow}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ImageBackground>
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,

  },
  borderedContainer: {
    flex: 1,
    margin: width * 0.05,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 15,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#0066FF',
    paddingVertical: height * 0.01,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: height * 0.03,
    marginTop: height * 0.01,
    marginLeft: width * 0.03,
    width: '93%',
    height: height * 0.1,
  },
  headerText: {
    color: 'white',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subDropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: height * 0.004,
    margin: width * 0.02,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#0066FF',
    borderRadius: 15,
    width: '95%',
  },
  subDropdownText: {
    fontSize: width * 0.045,
    fontWeight: '800',
    color: '#333',
    marginLeft: 10,
  },
  subDropdown1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: height * 0.004,
    margin: width * 0.02,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#0066FF',
    borderRadius: 15,
    width: '95%',
  },
  subDropdownText1: {
    fontSize: width * 0.045,
    fontWeight: '800',
    color: '#0066FF',
  },
  arrow: {
    width: width * 0.15,
    height: height * 0.05,
    color: '#B7B7B7',
    marginLeft: 23,
  },
  arrows: {
    fontSize: width * 0.07,
    color: '#B7B7B7',
    marginRight: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: height * 0.03,
  },
  largeImage: {
    width: width * 0.8,
    height: height * 0.5,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  statusText: {
    fontSize: width * 0.05,
    fontWeight: '700',
    color: '#0066FF',
    marginRight: width * 0.03,
  },
  tickIcon: {
    width: width * 0.08,
    height: width * 0.08,
    resizeMode: 'contain',
  },
});
