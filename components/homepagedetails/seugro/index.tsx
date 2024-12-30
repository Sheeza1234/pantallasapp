import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Modal,
  FlatList,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar
} from 'react-native';
import { ChevronDown, ChevronUp, Plus, ArrowLeft, Menu } from 'react-native-feather';
import Navbar from '../../navbar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';
import { useNavigation } from 'expo-router';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Pinentry'>;
interface Document {
  id: string;
  make: string;
  model: string;
  licensePlate: string;
}
const documents = [
  { name: 'Alfa Romeo', id: 'AA275HT' },
  { name: 'Toyota', id: 'AB369ES' },
];
const documentss = [{ id: 1, name: 'Poliza de Seguro Automotor' }]

const { width, height } = Dimensions.get('window')
export default function SeugroInfoScreen() {
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();
  const [isAlfaOpen, setIsAlfaOpen] = useState(false);
  const [isToyotaOpen, setIsToyotaOpen] = useState(false);
  useEffect(() => {
    StatusBar.setHidden(false);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('light-content');
  }, []);
  const toggleSubDropdownAlfa = () => {
    setIsAlfaOpen((prev) => !prev);
    if (isToyotaOpen) setIsToyotaOpen(false); // Close Toyota if open
  };
  const toggleSubDropdownToyota = () => {
    setIsToyotaOpen((prev) => !prev);
    if (isAlfaOpen) setIsAlfaOpen(false); // Close Alfa if open
  };

  const toggleMainDropdown = () => {
    setIsMainDropdownOpen((prev) => !prev);
    setOpenSubDropdown(null);
  };

  const navigatetopolizascreen = () => {
    navigation.navigate('Poliza');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/background1.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ImageBackground
          source={isMainDropdownOpen
            ? require('../../../assets/images/seugro1.jpg') // Change to the new overlay image
            : require('../../../assets/images/seugro.jpg')} // Original overlay image
          style={styles.overlayImage}
        >

          <View style={styles.borderedContainer}>
            <View style={styles.header}>
              <Text style={styles.headerText}>INFORMACIÓN </Text>
              <Text style={styles.headerText}> VEHÍCULO PERSONAL </Text>
            </View>
            <View style={styles.mainDropdownWrapper}>
              {/* Circle (Icon) */}
                <View  style={[
                  styles.iconContainer,
                  openSubDropdown
                    ? { backgroundColor: '#0066FF' } // Blue when a sub-dropdown is open
                    : isMainDropdownOpen
                    ? { backgroundColor: '#84898b' } // Silver when the main dropdown is open
                    : {}, // Default color otherwise
                ]}>
              <View style={styles.iconContainer1}>
                <Image
                  source={require('../../../assets/images/Iconos/PNG/Seguro.png')}
                  style={styles.iconImage}
                />
              </View>
              </View>
              <TouchableOpacity
                style={[styles.mainDropdown, isMainDropdownOpen && styles.mainDropdownOpen]} // Add dynamic style for open state
                onPress={toggleMainDropdown}
              >

                <Text style={styles.mainDropdownText}>SEUGRO/S</Text>
                <Text style={styles.arrow}> {isMainDropdownOpen ? (
                  <ChevronUp width={width * 0.08} height={width * 0.08} color="white" />
                ) : (
                  <ChevronDown width={width * 0.08} height={width * 0.08} color="#B7B7B7" />
                )}</Text>
              </TouchableOpacity>

              {/* Dropdown Content */}
              {isMainDropdownOpen && (
                <View>
                  {documents.map((document) => (
                    <View key={document.id}>
                      <TouchableOpacity
                        style={styles.subDropdown}
                        onPress={() => {
                          if (document.id === 'AA275HT') {
                            toggleSubDropdownAlfa(); // Toggle for "AA275HT" (Alfa)
                          } else if (document.id === 'AB369ES') {
                            toggleSubDropdownToyota(); // Toggle for "AB369ES" (Toyota)
                          }
                        }}
                      >
                        <Text style={styles.subDropdownText}>
                          {document.name}
                        </Text>
                        <Text style={styles.arrow}>
                        <Text style={styles.subDropdownText}>
                         {document.id}
                        </Text>
                          {document.id === 'AA275HT' && isAlfaOpen ? (
                            <ChevronUp width={width * 0.1} height={width * 0.1} color="#0066FF" />
                          ) : (
                            <ChevronDown width={width * 0.1} height={width * 0.1} color="#0066FF" />
                          )}
                        </Text>

                      </TouchableOpacity>

                      {/* Sub-Dropdown Content */}
                      {document.id === 'AA275HT' && isAlfaOpen && (
                        <View>
                          {documentss.map((subdocument) => (
                            <View key={subdocument.id}>
                              <TouchableOpacity
                                style={styles.subDropdown1}
                                onPress={() => {
                                  navigatetopolizascreen();
                                }}
                              >
                                <Text style={styles.subDropdownText1}>{subdocument.name}</Text>
                                <ChevronDown width={width * 0.09} height={width * 0.09} color="#0066FF" />
                              </TouchableOpacity>
                              <View style={styles.singleBox}>
                                <TouchableOpacity style={styles.button}>
                                  <Image
                                    source={require('../../../assets/images/editar.jpg')} // Replace with your image path
                                    style={styles.icon}
                                  />
                                  <Text style={styles.buttonText}>Editar</Text>
                                </TouchableOpacity>

                                {/* Notas Button */}
                                <TouchableOpacity style={styles.button}>
                                  <Image
                                    source={require('../../../assets/images/notes.png')} // Replace with your image path
                                    style={styles.icon}
                                  />
                                  <Text style={styles.buttonText}>Notas</Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                          ))}
                        </View>
                      )}
                      {document.id === 'AB369ES' && isToyotaOpen && (
                        <View>
                          {documentss.map((subdocument) => (
                            <View key={subdocument.id}>
                              <TouchableOpacity
                                style={styles.subDropdown1}
                                onPress={() => {
                                  navigatetopolizascreen()// Handle navigation for Toyota
                                }}
                              >
                                <Text style={styles.subDropdownText1}>{subdocument.name}</Text>
                                <ChevronDown width={width * 0.09} height={width * 0.09} color="#0066FF" />
                              </TouchableOpacity>
                              <View style={styles.singleBox}>
                                <TouchableOpacity style={styles.button}>
                                  <Image
                                    source={require('../../../assets/images/editar.jpg')} // Replace with your image path
                                    style={styles.icon}
                                  />
                                  <Text style={styles.buttonText}>Editar</Text>
                                </TouchableOpacity>

                                {/* Notas Button */}
                                <TouchableOpacity style={styles.button}>
                                  <Image
                                    source={require('../../../assets/images/notes.png')} // Replace with your image path
                                    style={styles.icon}
                                  />
                                  <Text style={styles.buttonText}>Notas</Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                          ))}
                        </View>
                      )}
                    </View>
                  ))}
                  <View style={styles.singleBoxs}>
                    <TouchableOpacity style={styles.button}>
                      <Image
                        source={require('../../../assets/images/editar.jpg')} // Replace with your image path
                        style={styles.icon}
                      />
                      <Text style={styles.buttonText}>Editar</Text>
                    </TouchableOpacity>

                    {/* Notas Button */}
                    <TouchableOpacity style={styles.button}>
                      <Image
                        source={require('../../../assets/images/notes.png')} // Replace with your image path
                        style={styles.icon}
                      />
                      <Text style={styles.buttonText}>Notas</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              )}

            </View>


          </View>
        </ImageBackground>
      </ImageBackground>
      <Navbar />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  overlayImage: {
    flex: 1,
    width: '100%',
    height: height * 0.28,
    resizeMode: 'contain',
  },

  keyboardView: {
    flex: 1,
  },
  item: {
    color: '#0066FF',
    fontSize: Math.min(width, height) * 0.03, // Proportional font size
    fontWeight: '800',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: width * 0.05,
  },
  backgroundImageStyle: {
    opacity: 0.1,
  },
  mainDropdownOpen: {
    backgroundColor: '#84898b',
  },
  mainDropdownWrapper: {
    paddingTop: height * 0.046,
    flexDirection: 'column',
    zIndex: 1,
  },
  iconContainer1: {
    width: width * 0.145,
    height: width * 0.145,
    borderRadius: width * 0.1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft: width * 0.015,
    marginTop: height * 0.006,
    zIndex: 1,
    position: 'absolute',
},
iconContainer: {
  width: width * 0.17,
  height: width * 0.17,
  borderRadius: width * 0.1,
  backgroundColor: '#0066FF',
  alignItems: 'center',
  marginLeft: width * 0.015,
  zIndex: 1,
  position: 'absolute',
},
  mainDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0066FF',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.04,
    width: '83%',
    marginLeft: width * 0.13,
    borderRadius: 15,
    marginTop: -height * 0.045,
    zIndex: 0,
  },
  iconImage: {
    width: width * 0.19,
    height: width * 0.15,
    // resizeMode: 'contain',
},
  mainDropdownText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.06,
    marginLeft: width * 0.18,
  },
  arrow: {
    fontSize: width * 0.08,
    color: '#B7B7B7',
  },
  borderedContainer: {
    flex: 1,
    margin: width * 0.05, // Responsive margin
    marginBlockEnd: 0,
    borderWidth: 1,
    borderColor: '#0098FE',
    borderRadius: 25,
    overflow: 'hidden',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  icons: {
    flexDirection: 'row',
    borderRadius: 50,
  },
  header: {
    backgroundColor: '#0066FF',
    paddingVertical: height * 0.01,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: height * 0.11,
    marginTop: height * 0.01,
    marginLeft: width * 0.03,
    width: '93%',
    height: height * 0.1,
  },
  headerText: {
    color: 'white',
    fontSize: width * 0.07,
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
    marginLeft: width * 0.03,
  },
  subDropdown1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: height * 0.003,
    margin: width * 0.009,
    marginLeft: width * 0.19,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#0066FF',
    borderRadius: 15,
    width: '75%',
  },
  subDropdownText1: {
    fontSize: width * 0.037,
    fontWeight: '800',
    color: '#333',
    marginLeft: width * 0.03,
  },
  subItem: {
    fontSize: width * 0.045,
    fontWeight: '800',
    color: '#555',
    paddingVertical: height * 0.007,
    marginLeft: width * 0.05,
  },
  singleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: height * 0.015,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: height * 0.3,
    elevation: 3,
    width: '100%',
  },
  singleBoxs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: height * 0.015,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: height * 0.36,
    elevation: 3,
    width: '100%'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.03,
  },
  icon: {
    width: width * 0.06,
    height: width * 0.06,
    marginBottom: height * 0.005,
  },
  buttonText: {
    fontSize: width * 0.035,
    color: '#000',
    fontWeight: '500',
  },
  buttonTexts: {
    fontSize: width * 0.06,
    color: '#000',
    fontWeight: '500',
  },
});

