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
import { PlayCircle, Settings, User } from 'react-native-feather';
import { scale, verticalScale } from 'react-native-size-matters'; // If using react-native-size-matters for scaling

interface Option {
  id: string;
  label: string;
  icon?: any;
  isTutorial?: boolean;
}

const { width, height } = Dimensions.get('window');



const Adjustes: React.FC = () => {
  useEffect(() => {
    StatusBar.setHidden(false);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('light-content');
  }, []);
  const options: Option[] = [
    { id: '1', label: 'Adjustes', isTutorial: true },
    { id: '2', label: '' },
    { id: '3', label: '' },
    { id: '4', label: '' },

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
          <Settings stroke="black" width={50} height={40}
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
    paddingVertical: verticalScale(10), // Use verticalScale for padding adjustments
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    marginBottom: verticalScale(10),
    marginTop: verticalScale(10),
    marginLeft: scale(12),
    width: '93%',
    height: verticalScale(75), // Scaled height
  },
  headerText: {
    color: 'white',
    fontSize: scale(30), // Scaled font size
    fontWeight: 'bold',
    textAlign: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: scale(10), // Scaled horizontal margin
    marginVertical: verticalScale(3), // Scaled vertical margin
    padding: scale(12), // Scaled padding
    borderRadius: scale(15),
    borderWidth: 1.5,
    borderColor: '#0A7EE7',
  },
  tutorialIcon: {
    marginRight: scale(15), // Scaled margin
  },
  tutorialText: {
    fontSize: scale(30), // Scaled font size
    fontWeight: '600',
    color: '#333',
  },
  optionText: {
    fontSize: scale(20), // Scaled font size
    fontWeight: '700',
    color: '#333',
  },
  optionList: {
    flex: 1,
  },
  borderedContainer: {
    flex: 1,
    margin: scale(20),
    marginBottom: 0,
    borderWidth: 1,
    borderColor: '#0098FE',
    borderRadius: scale(25),
    overflow: 'hidden',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});


export default Adjustes;
