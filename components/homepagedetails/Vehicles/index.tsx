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
const { width, height } = Dimensions.get('window')
export default function VehicleInfoScreen() {
  useEffect(() => {
    StatusBar.setHidden(true);
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
          source={isMainDropdownOpen
            ? require('../../../assets/images/vehicles1.jpg') // Change to the new overlay image
            : require('../../../assets/images/vehicles.jpg')} // Original overlay image
          style={styles.overlayImage}
        >
          <View style={styles.borderedContainer}>
            <View style={styles.header}>
              <Text style={styles.headerText}>INFORMACIÓN </Text>
              <Text style={styles.headerText}> VEHÍCULO PERSONAL </Text>
            </View>
            <View style={styles.mainDropdownWrapper}>
              {/* Circle (Icon) */}
              <View style={styles.iconContainer}>
                <Image
                  source={require('../../../assets/images/Iconos/PNG/Mis_Vehiculos.png')}
                  style={styles.iconImage}
                />
              </View>

              {/* MIS VEHÍCULOS Container */}
              <TouchableOpacity
                style={[styles.mainDropdown, isMainDropdownOpen && styles.mainDropdownOpen]} // Add dynamic style for open state
                onPress={toggleMainDropdown}
              >

                <Text style={styles.mainDropdownText}>MIS VEHÍCULOS</Text>
                <Text style={styles.arrow}> {isMainDropdownOpen ? (
                  <ChevronUp width={width * 0.08} height={width * 0.08} color="#0066FF" />
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
                          {vehicle.name} - {vehicle.id}
                        </Text>
                        <Text style={styles.arrow}>
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
                          <Text style={styles.subItem}>Fabricante:<Text style={styles.item}>Alfa Romeo </Text></Text>
                          <Text style={styles.subItem}>Modelo:<Text style={styles.item}>Mito </Text></Text>
                          <Text style={styles.subItem}>Numero de Chasis<Text style={styles.item}>1HGBH41JXMN109186 </Text></Text>
                          <Text style={styles.subItem}>Numero de  Motor<Text style={styles.item}>52WVC10338 </Text></Text>
                          <Text style={styles.subItem}>Ano de Fabricacion<Text style={styles.item}>2019 </Text></Text>
                          <Text style={styles.subItem}>Ano de Patentamiento<Text style={styles.item}>2020 </Text></Text>
                          <Text style={styles.subItem}>Patente<Text style={styles.item}>AA275HT </Text></Text>
                          <Text style={styles.subItem}>Tipo de Combustible<Text style={styles.item}>Nafta Infinia </Text></Text>
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
    backgroundColor: 'silver',
  },
  keyboardView: {
    flex: 1,
  },
  item: {
    color: '#0066FF',
    fontSize: width * 0.045, // Responsive font size
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
  iconContainer: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft: width * 0.01,
    zIndex: 1,
    position: 'absolute',
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
    marginTop: height * -0.045,
    zIndex: 0,
  },
  iconImage: {
    width: width * 0.2,
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
    padding: height * 0.013,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: height * 0.115,
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

