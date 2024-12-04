import React, { useState } from 'react';
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
  Platform
} from 'react-native';
import { ChevronDown, Plus, ArrowLeft, Menu } from 'react-native-feather';
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
  { name: 'Documentación', id: 'Requerida' },
  { name: 'Documentación', id: 'Vehicular' },
  { name: 'DNI', id: '1' }
];
const documentss = [{ id: 1, name: 'Licencia Nacional de Conducir' },
{ id: 2, name: 'Cedula Identification Vehiculo' },
{ id: 3, name: 'Seguro del Vehiculo' }]

const documentes = [{ id: 1, name: 'Titulo del Automotor' },
{ id: 2, name: 'Alfa Romeo         AA275HT' },
{ id: 3, name: 'Toyota             AB369ES' }]

const { width, height } = Dimensions.get('window')
export default function DocumentInfoScreen() {
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();
  const [isRequeridaOpen, setIsRequeridaOpen] = useState(false);
  const [isVehicularOpen, setIsVehicularOpen] = useState(false);
  const [isDniOpen, setIsDniOpen] = useState(false);

  const toggleSubDropdownRequerida = () => {
    setIsRequeridaOpen((prev) => !prev);
    if (isVehicularOpen) setIsVehicularOpen(false); // Close Vehicular if open
  };
  const toggleSubDropdownVehicular = () => {
    setIsVehicularOpen((prev) => !prev);
    if (isRequeridaOpen) setIsRequeridaOpen(false); // Close Requerida if open
  };
  const toggleSubDropdownDni = () => {
    setIsDniOpen((prev) => !prev);
    if (isRequeridaOpen) setIsRequeridaOpen(false);
    if (isVehicularOpen) setIsVehicularOpen(false);// Close Requerida if open
  };

  const toggleMainDropdown = () => {
    setIsMainDropdownOpen((prev) => !prev);
    setOpenSubDropdown(null);
  };
  const navigateToLicenciaScreen = () => {
    navigation.navigate('Licencia');
  };
  const navigatetoidentificationscreen = () => {
    navigation.navigate('Identification');
  }
  const navigatetoseguoscreen = () => {
    navigation.navigate('Seugo');
  }
  const navigatetoDniscreen = () => {
    navigation.navigate('DNI');
  }

  const navigatetotituloscreen = () => {
    navigation.navigate('Titulo');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/Documentation.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={styles.borderedContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>INFORMACIÓN </Text>
            <Text style={styles.headerText}> VEHÍCULO PERSONAL </Text>
          </View>
          <View style={styles.mainDropdownWrapper}>
            {/* Circle (Icon) */}
            <View style={styles.iconContainer}>
              <Image
                source={require('../../../assets/images/Iconos/PNG/Documenatcion.png')}
                style={styles.iconImage}
              />
            </View>

            <TouchableOpacity style={styles.mainDropdown} onPress={toggleMainDropdown}>
              <Text style={styles.mainDropdownText}>Documentación</Text>
              <Text style={styles.arrow}>{isMainDropdownOpen ? '▲' : '▼'}</Text>
            </TouchableOpacity>

            {isMainDropdownOpen && (
              <View>
                {documents.map((document) => (
                  <View key={document.id}>
                    <TouchableOpacity
                      style={styles.subDropdown}
                      onPress={() => {
                        if (document.id === 'Requerida') {
                          toggleSubDropdownRequerida(); // Only toggle for "Requerida"
                        } else if (document.id === 'Vehicular') {
                          toggleSubDropdownVehicular()
                        } else if (document.id === '1') {
                          navigation.navigate('DNI')
                        }
                      }}
                    >
                      <Text style={styles.subDropdownText}>
                        {document.name} - {document.id}
                      </Text>
                      <Text style={styles.arrow}>
                        {document.id === 'Requerida' && isRequeridaOpen ? '▲' : '▼'}
                      </Text>
                      {document.id === 'Requerida' && isRequeridaOpen ? '▲' : '▼'}
                      {document.id === 'Vehicular' && isVehicularOpen ? '▲' : '▼'}
                    </TouchableOpacity>
                    {document.id === 'Vehicular' && isVehicularOpen && (
                      <View>
                        {documentes.map((subdocuments) => (
                          <View key={subdocuments.id}>
                            <TouchableOpacity
                              style={styles.subDropdown1}
                              onPress={() => {
                                navigatetotituloscreen()
                              }}
                            >
                              <Text style={styles.subDropdownText1}>{subdocuments.name}</Text>
                              <Text style={styles.arrow}>▼</Text>
                            </TouchableOpacity>
                          </View>
                        ))}
                      </View>
                    )}
                    {document.id === 'Requerida' && isRequeridaOpen && (
                      <View>
                        {documentss.map((subdocument) => (
                          <View key={subdocument.id}>
                            <TouchableOpacity
                              style={styles.subDropdown1}
                              onPress={() => {
                                if (subdocument.id === 1) {
                                  navigateToLicenciaScreen();
                                } else if (subdocument.id === 2) {
                                  navigatetoidentificationscreen()
                                } else if (subdocument.id === 3) {
                                  navigatetoseguoscreen()
                                }
                              }}
                            >
                              <Text style={styles.subDropdownText1}>{subdocument.name}</Text>
                              <Text style={styles.arrow}>▼</Text>
                            </TouchableOpacity>
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                ))}
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
            )}

          </View>


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
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: height * 0.3,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(9,109,249,0.1)',
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
  mainDropdownWrapper: {
    paddingTop: height * 0.046,
    flexDirection: 'column',
    zIndex: 1,
  },
  iconContainer: {
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: width * 0.1,
    backgroundColor: 'white',
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
    width: width * 0.4,
    height: height * 0.1,
    resizeMode: 'contain',
  },
  mainDropdownText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.07,
    marginLeft: width * 0.05,
  },
  arrow: {
    fontSize: width * 0.08,
    color: '#B7B7B7',
  },
  borderedContainer: {
    flex: 1,
    margin: width * 0.05,
    borderWidth: 1,
    borderColor: '#f8f9fa',
    borderRadius: 15,
    overflow: 'hidden',
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
    marginTop: width * 0.45,
    elevation: 3,
    width: '100%',
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

