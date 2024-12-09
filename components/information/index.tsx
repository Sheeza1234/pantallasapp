import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  ImageBackground,
  StatusBar
} from 'react-native';
import { useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChevronDown, ChevronUp, Plus, ArrowLeft, Menu } from 'react-native-feather';
import { RootStackParamList } from '@/types';
import { useNavigation } from 'expo-router';
import Navbar from '../navbar';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Pinentry'>;

const { width, height } = Dimensions.get('window');

const InformationScreen: React.FC = () => {
  // Grid items for display
  const gridItems = [
    { label: 'Mis Vehículos', icon: require('../../assets/images/Iconos/PNG/Mis_Vehiculos.png'), route: 'Vehicle' },
    { label: 'Documentación', icon: require('../../assets/images/Iconos/PNG/Documenatcion.png'), route: 'Document' },
    { label: 'Seguro/s', icon: require('../../assets/images/Iconos/PNG/Seguro.png'), route: 'Seugro' },
    { label: 'Infracciones', icon: require('../../assets/images/Iconos/PNG/Infracciones.png'), route: 'Infraciones' },
    { label: 'Notificaciones', icon: require('../../assets/images/Iconos/PNG/Notificaciones.png'), route: 'Notificaciones' },
    { label: 'Servicios', icon: require('../../assets/images/Iconos/PNG/Servicios.png'), route: 'Servicios' },
    { label: 'Gastos', icon: require('../../assets/images/Iconos/PNG/Gastos.png'), route: 'Gastos' },
    { label: 'Geolocalización', icon: require('../../assets/images/Iconos/PNG/Geolocalizacion.png'), route: 'Location' },
  ];
  const navigation = useNavigation<NavigationProps>();
  useEffect(() => {
    StatusBar.setHidden(true);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('light-content');
  }, []);
  const handlePress = (route: keyof RootStackParamList) => {
    navigation.navigate(route as never)
  };

  const handleHomePress = () => {
    console.log('Home button pressed');
    navigation.navigate('Resumen')
  };

  const handleBackPress = () => {
    console.log('Back button pressed');
    navigation.navigate('Pinentry')
  };

  const handleMenuPress = () => {
    console.log('Menu button pressed');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background1.jpg')}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.borderedContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>INFORMACIÓN </Text>
            <Text style={styles.headerText}> VEHÍCULO PERSONAL </Text>
          </View>


          {/* Grid Section */}
          <View style={styles.grid}>
            {gridItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.gridItem}
                onPress={() => handlePress(item.route as keyof RootStackParamList)}
              >
                <Image source={item.icon} style={styles.icon} />
                <Text style={styles.label}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

        </View>
        <Navbar />
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  backgroundImageStyle: {
    opacity: 0.4,
  },
  header: {
    backgroundColor: '#0066FF',
    paddingVertical: height * 0.01, // Make vertical padding responsive
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: height * 0.01, // Make margin responsive
    marginTop: height * 0.01, // Make margin responsive
    marginLeft: width * 0.03, // Make margin responsive
    width: '93%',
    height: height * 0.1, // Use screen height to adjust header height
  },
  headerText: {
    color: 'white',
    fontSize: width * 0.07, // Font size responsive to width
    fontWeight: 'bold',
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: width * 0.05, // Adjust horizontal padding
  },
  gridItem: {
    width: width * 0.36,
    height: width * 0.36,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: height * 0.013, // Responsive vertical margin
    borderWidth: 2,
    borderColor: 'silver',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    width: width * 0.4, // Make icon size responsive
    height: width * 0.27, // Adjust height proportionally
  },
  label: {
    fontSize: width * 0.04, // Font size responsive to width
    fontWeight: '500',
    textAlign: 'center',
    color: '#333',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#000',
    paddingVertical: height * 0.02, // Responsive padding
    paddingBottom: Platform.OS === 'ios' ? height * 0.025 : 0, // iOS padding adjustment
  },
  button: {
    padding: width * 0.04, // Responsive padding
    borderRadius: 8,
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
});



export default InformationScreen;
