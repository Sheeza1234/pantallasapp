import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Platform
} from 'react-native';
import { FileText } from 'react-native-feather';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';
import { useNavigation } from 'expo-router';
import Navbar from '@/components/navbar';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'; // Import scaling utilities



type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Pinentry'>;

const { width, height } = Dimensions.get('window'); // Get screen dimensions

const Resumen: React.FC = () => {

  const navigation = useNavigation<NavigationProps>();

  const data = [
    { title: 'Último Servicio', value: 'Hace 2 semanas' },
    { title: 'Próxima Revisión', value: 'En 3 meses' },
    { title: 'Infracciones Pendientes', value: 'Ninguna' },
  ];


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/background.jpg')}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.borderedContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>INFORMACIÓN </Text>
            <Text style={styles.headerText}> VEHÍCULO PERSONAL </Text>
          </View>

        <TouchableOpacity style={styles.activityCard}>
           <FileText stroke="black" width={50} height={40}
            style={styles.icon}
          />
          <Text style={styles.activityText}>Resumen de Actividad</Text>
        </TouchableOpacity>
<View style={styles.boxContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        ))}
      </View>
      </View>

        
       <Navbar/>
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
    opacity: 0.1,
  },
  header: {
    backgroundColor: '#0066FF',
    paddingVertical: verticalScale(10), // Use verticalScale for consistent padding
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    marginBottom: verticalScale(10),
    marginTop: verticalScale(10),
    marginLeft: scale(12),
    width: '93%',
    height: verticalScale(75), // Use verticalScale for height
  },
  headerText: {
    color: 'white',
    fontSize: scale(30), // Use scale for font size
    fontWeight: 'bold',
    textAlign: 'center',
  },

  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAF4FF',
    padding: scale(10), // Scale padding for responsiveness
    marginTop: verticalScale(20),
    width: '95%',
    borderRadius: scale(15),
    marginLeft: scale(10),
    borderWidth: moderateScale(1), // Moderate scaling for border width
    borderColor: '#B0D7FF',
  },
  icon: {
    width: scale(30), // Scale icon width
    height: scale(30), // Scale icon height
    marginRight: scale(10), // Scale margin for icon
  },
  activityText: {
    fontSize: scale(25), // Scale font size for activity text
    fontWeight: '700',
    color: '#333',
  },
  boxContainer: {
    marginTop: verticalScale(10),
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: scale(15), // Scale padding for box
    borderRadius: scale(15),
    marginVertical: verticalScale(5),
    borderWidth: moderateScale(1),
    borderColor: '#007AFF',
    shadowColor: '#000',
    width: '95%',
    marginLeft: scale(10),
    shadowOpacity: 0.1,
    shadowRadius: scale(4),
    elevation: 2,
  },
  title: {
    fontSize: scale(23), // Scale font size for title
    color: '#007AFF',
    fontWeight: '700',
  },
  value: {
    fontSize: scale(20), // Scale font size for value
    color: '#007AFF',
    fontWeight: '700',
  },
  borderedContainer: {
    flex: 1,
    margin: scale(20), // Scale margin for bordered container
    marginBottom: 0,
    borderWidth: moderateScale(1), // Scale border width
    borderColor: '#0098FE',
    borderRadius: scale(25),
    overflow: 'hidden',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});


export default Resumen;
