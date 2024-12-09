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
  StatusBar
} from 'react-native';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import Navbar from '@/components/navbar';
import { PlayCircle, User } from 'react-native-feather';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

interface Option {
  id: string;
  label: string;
  icon?: any;
  isTutorial?: boolean;
}

const { width, height } = Dimensions.get('window'); // Get screen dimensions


const Perfil: React.FC = () => {
  const options: Option[] = [
    { id: '1', label: 'MI Perfil', isTutorial: true },
    { id: '2', label: 'Nombre: Usuario de Gooogle' },
    { id: '3', label: 'Email:google@gmail.com' },
    { id: '4', label: 'Idioma:Espanol' },

  ];
  useEffect(() => {
    StatusBar.setHidden(true);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('light-content');
  }, []);


  const handleOptionPress = (label: string) => {
  };

  const renderOption = ({ item }: { item: Option }) => (
    <TouchableOpacity
      style={styles.option}
      onPress={() => handleOptionPress(item.label)}
    >
      {item.isTutorial ? (
        <>
          <User stroke="black" width={50} height={40}
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
        source={require('../../../assets/images/background1.jpg')}
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
    opacity: 0.3,
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
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: scale(10), // Scale margin for responsiveness
    marginVertical: verticalScale(3),
    padding: scale(12), // Scale padding
    borderRadius: scale(15),
    borderWidth: moderateScale(1.5), // Moderate scaling for border width
    borderColor: '#0A7EE7',
  },
  tutorialIcon: {
    marginRight: scale(15), // Scale margin
  },
  tutorialText: {
    fontSize: scale(30), // Scale font size for text
    fontWeight: '600',
    color: '#333',
  },
  optionText: {
    fontSize: scale(20), // Scale font size
    fontWeight: '700',
    color: '#333',
  },
  optionList: {
    flex: 1,
  },
  borderedContainer: {
    flex: 1,
    margin: scale(20), // Scale margin
    marginBottom: 0,
    borderWidth: moderateScale(1), // Scale border width
    borderColor: '#0098FE',
    borderRadius: scale(25),
    overflow: 'hidden',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});

export default Perfil;
