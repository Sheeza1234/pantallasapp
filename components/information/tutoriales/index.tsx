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
  FlatList,
} from 'react-native';
import { useNavigation } from 'expo-router';
import Navbar from '@/components/navbar';
import { PlayCircle } from 'react-native-feather';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'; // Import scaling utilities

interface Option {
  id: string;
  label: string;
  icon?: any;
  isTutorial?: boolean;
}

const { width,height } = Dimensions.get('window');

const Tutorials: React.FC = () => {
  const options: Option[] = [
    { id: '1', label: 'Tutoriales', isTutorial: true },
    { id: '2', label: '01 - Mis Vehículos' },
    { id: '3', label: '02 - Documentación' },
    { id: '4', label: '03 - Seguro/s' },
    { id: '5', label: '04 - Infracciones' },
    { id: '6', label: '05 - Notificaciones' },
    { id: '7', label: '06 - Servicios' },
    { id: '8', label: '07 - Gastos' },
    { id: '9', label: '08 - Geolocalización' },
  ];

  const handleOptionPress = (label: string) => {
  };

  const renderOption = ({ item }: { item: Option }) => (
    <TouchableOpacity
      style={styles.option}
      onPress={() => handleOptionPress(item.label)}
    >
      {item.isTutorial ? (
        <>
           <PlayCircle stroke="black"  width={50} height={40}
                     style={styles.tutorialIcon}
          />
          <Text style={styles.tutorialText}>{item.label}</Text>
        </>
      ) : (
        <Text style={styles.optionText}>{item.label}</Text>
      )}
    </TouchableOpacity>
  );

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

          <FlatList
            data={options}
            renderItem={renderOption}
            keyExtractor={(item) => item.id}
            style={styles.optionList}
            contentContainerStyle={{ paddingBottom: 60 }}
          />
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
    opacity: 0.1,
  },
  header: {
    backgroundColor: '#0066FF',
    paddingVertical: verticalScale(10), // Use verticalScale for padding
    borderTopLeftRadius: scale(20), // Scale border radius
    borderTopRightRadius: scale(20),
    marginBottom: verticalScale(10),
    marginTop: verticalScale(10),
    marginLeft: scale(12), // Scale margin
    width: '93%',
    height: verticalScale(75), // Use vertical scale for height
  },
  headerText: {
    color: 'white',
    fontSize: scale(30), // Scale font size
    fontWeight: 'bold',
    textAlign: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: scale(10), // Scale margin for responsiveness
    marginVertical: verticalScale(2), // Use vertical scale for vertical margin
    padding: scale(12), // Scale padding
    borderRadius: scale(15), // Scale border radius
    borderWidth: moderateScale(1.5), // Use moderateScale for border width
    borderColor: '#0A7EE7',
  },
  tutorialIcon: {
    marginRight: scale(15), // Scale margin for icon
  },
  tutorialText: {
    fontSize: scale(30), // Scale font size
    fontWeight: '600',
    color: '#333',
  },
  optionText: {
    fontSize: scale(20), // Scale font size for option text
    fontWeight: '500',
    color: '#333',
  },
  optionList: {
    flex: 1,
  },
  borderedContainer: {
    flex: 1,
    margin: scale(20), // Scale margin for the container
    marginBottom: 0,
    borderWidth: moderateScale(1), // Scale border width
    borderColor: '#0098FE',
    borderRadius: scale(25), // Scale border radius
    overflow: 'hidden',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});



export default Tutorials;
