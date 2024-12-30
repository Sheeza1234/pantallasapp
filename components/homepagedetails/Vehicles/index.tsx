import React, { useState, useEffect } from 'react';
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
import { ChevronDown, ChevronUp, Plus, ArrowLeft, Menu } from 'react-native-feather';
import Navbar from '../../navbar';

interface Vehicle {
  id: string;
  make: string;
  model: string;
  licensePlate: string;
}
const vehicles = [
  { name: 'Alfa Romeo', id: 'AA275HT' },
  { name: 'Toyota', id: 'AB369ES' },
];
const documents = [
  { name: 'Fabricante', id: '                     Alfa Romeo' },
  { name: 'Modelo', id: '                             Mito' },
  { name: 'Numero de Chasis', id: '   1HGBH41JXMN109186' },
  { name: 'Numero de  Motor', id: '        52WVC10338' },
  { name: 'Ano de Fabricacion', id: '             2019' },
  { name: 'Ano de Patentamiento', id: '        2020' },
  { name: 'Pntente', id: '                          AA275HT' },
  { name: 'Tipo de combustible', id: '       Nafta Infinia' },
]
const { width, height } = Dimensions.get('window')
export default function VehicleInfoScreen() {
  useEffect(() => {
    StatusBar.setHidden(false);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('light-content');
  }, []);
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

  const toggleMainDropdown = () => {
    setIsMainDropdownOpen((prev) => !prev);
    setOpenSubDropdown(null); // Close sub-dropdowns when toggling main
  };

  const toggleSubDropdown = (vehicleName: string) => {
    setOpenSubDropdown((prev) => (prev === vehicleName ? null : vehicleName));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/background1.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >

        <ImageBackground
          source={openSubDropdown // Check if any sub-dropdown is open
            ? require('../../../assets/images/vehicles.jpg') : isMainDropdownOpen
              ? require('../../../assets/images/vehicles1.jpg') // Change to the new overlay image
              : require('../../../assets/images/vehicles.jpg')}
          // Original overlay image
          style={styles.overlayImage}
        >
          <View style={styles.borderedContainer}>
            <View style={[
              styles.header,
              openSubDropdown && { backgroundColor: 'silver' },
            ]}>
              <Text style={styles.headerText}>INFORMACIÓN </Text>
              <Text style={styles.headerText}> VEHÍCULO PERSONAL </Text>
            </View>
            <View style={styles.mainDropdownWrapper}>
              {/* Circle (Icon) */}
              <View style={[
                styles.iconContainer,
                openSubDropdown
                  ? { backgroundColor: '#0066FF' } // Blue when a sub-dropdown is open
                  : isMainDropdownOpen
                    ? { backgroundColor: '#84898b' } // Silver when the main dropdown is open
                    : {}, // Default color otherwise
              ]}>
                <View style={styles.iconContainer1}>
                  <Image
                    source={require('../../../assets/images/Iconos/PNG/Mis_Vehiculos.png')}
                    style={styles.iconImage}
                  />
                </View>
              </View>

              {/* MIS VEHÍCULOS Container */}
              <TouchableOpacity
                style={[
                  styles.mainDropdown,
                  isMainDropdownOpen && styles.mainDropdownOpen,
                  openSubDropdown && { backgroundColor: '#0066FF' },
                ]}
                onPress={toggleMainDropdown}
              >

                <Text style={styles.mainDropdownText}>MIS VEHÍCULOS</Text>
                <Text style={styles.arrow}> {isMainDropdownOpen ? (
                  <ChevronUp width={width * 0.08} height={width * 0.08} color="white" />
                ) : (
                  <ChevronDown width={width * 0.08} height={width * 0.08} color="#B7B7B7" />
                )}</Text>
              </TouchableOpacity>

              {/* Dropdown Content */}
              {isMainDropdownOpen && (
                <View >
                  {vehicles.map((vehicle) => (
                    <View key={vehicle.id}>
                      <TouchableOpacity
                        style={styles.subDropdown}
                        onPress={() => toggleSubDropdown(vehicle.name)}
                      >
                        <Text style={styles.subDropdownText}>
                          {vehicle.name}
                        </Text>
                        <Text style={styles.arrow}>
                          <Text style={styles.subDropdownText}>
                            {vehicle.id}
                          </Text>
                          {openSubDropdown === vehicle.name ? (
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
                          )}
                        </Text>
                      </TouchableOpacity>

                      {/* Sub-Dropdown Content */}
                      {openSubDropdown === vehicle.name && (
                        <View>

                          {documents.map((vehicles) => (
                            <View style={styles.alfa}>
                              <Text style={styles.subItem}>{vehicles.name}:</Text>
                              <Text style={styles.subDropdownText1}>{vehicles.id}</Text>
                            </View>
                          ))}
                          <View style={styles.singleBox}>
                            {/* Editar Button */}
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
                  ))}
                  <View style={styles.singleBoxs}>
                    <TouchableOpacity style={styles.button}>

                      <Text style={styles.buttonTexts}>+      Anadir nuevo vehiculo</Text>
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
  mainDropdownOpen: {
    backgroundColor: '#84898b',
  },
  alfa: {
    flexDirection: 'row',
  },
  keyboardView: {
    flex: 1,
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
  item: {
    color: '#0066FF',
    fontSize: width * 0.04, // Responsive font size
    fontWeight: '800',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: width * 0.05, // 5% of the screen width
  },
  backgroundImageStyle: {
    opacity: 0.1,
  },
  mainDropdownWrapper: {
    paddingTop: height * 0.05, // 5% of the screen height
    position: 'relative',
    flexDirection: 'column',
    zIndex: 1,


  },
  mainDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0066FF',
    padding: height * 0.02,
    width: '82%',
    marginLeft: width * 0.13,
    borderRadius: 10,
    marginTop: height * -0.048,
    zIndex: 0,
  },
  iconImage: {
    width: width * 0.15,
    height: width * 0.15,
    // resizeMode: 'contain',
  },
  mainDropdownText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.07,
    marginLeft: width * 0.05,
  },
  arrow: {
    fontSize: width * 0.08, // Responsive arrow size
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
    padding: height * 0.01,
    margin: width * 0.02,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#0066FF',
    borderRadius: 15,
    width: '95%',
  },
  subDropdownText: {
    fontSize: width * 0.05,
    fontWeight: '600',
    color: '#333',
  },
  subDropdownText1: {
    fontSize: width * 0.05,
    fontWeight: '600',
    color: '#0066FF',
    // textAlign: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  subItem: {
    flexDirection: 'row',
    fontSize: width * 0.043,
    fontWeight: '800',
    color: '#555',
    marginLeft: width * 0.03,
    paddingVertical: height * 0.007
  },
  singleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: height * 0.013,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: height * 0.125,
    elevation: 3,
  },
  singleBoxs: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: height * 0.02,
    marginTop: height * 0.36,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
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

