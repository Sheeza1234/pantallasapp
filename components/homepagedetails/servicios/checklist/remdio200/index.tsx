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
} from 'react-native';
import Navbar from '../../../../navbar';
import { CheckSquare } from 'react-native-feather';
import * as ImagePicker from 'expo-image-picker';

const { width, height } = Dimensions.get('window');

export default function Remdio200InfoScreen() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                source={require('../../../../../assets/images/background.jpg')}
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
                    <Image
                                source={require('../../../../../assets/images/Iconos/checklist.png')}
                                style={styles.icon}
                            />
                        <Text style={styles.subDropdownText}>
                        Check List Pre - Viaje
                        </Text>
                        <Text style={styles.arrows}>▲</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subDropdown1} >
                        <Text style={styles.subDropdownText1}>
                           Alfa Romeo  AA275HT
                        </Text>
                        <Text style={styles.arrows}>▲</Text>
                    </TouchableOpacity>
                    <View style={styles.checklistContainer}>
              {[
                "Tanque de Combustible Lleno",
                "Fluidos",
                "Luces",
                "Neumáticos",
                "Equipo de Emergencias",
                "Extintor de Incendios",
                "Crique",
                "Documentación del Vehículo",
                "Otros",
              ].map((item) => (
                <View style={styles.checklistItem} key={item}>
                  <Text style={styles.checklistText}>{item}</Text>
                  <CheckBox
                    // value={isChecked.includes(item)}
                    // onValueChange={() => toggleChecklistItem(item)}
                  />
                </View>
              ))}
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
        backgroundColor: 'white',
    },
    background: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.1,
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
    icon: {
        width: width * 0.1,
        height: width * 0.09,
        marginBottom: height * 0.005,
    },
    subDropdownText: {
        fontSize: width * 0.07,
        fontWeight: '800',
        color: '#0066FF',
        // marginLeft: 10,
    },
    subDropdown1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: height * 0.01,
        margin: width * 0.01,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#0066FF',
        borderRadius: 15,
        width: width*0.85,
    },
    subDropdownText1: {
        fontSize: width * 0.05,
        fontWeight: '900',
        color: '#333',
        marginLeft: 10,
    },
    subDropdown3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: height * 0.01,
        margin: width * 0.01,
        marginLeft: width*0.18,
        backgroundColor: '#0066FF',
        borderRadius: 15,
        width: width*0.68,
    },
    subDropdownText3: {
        fontSize: width * 0.05,
        fontWeight: '900',
        color: 'white',
        marginLeft: 10,
    },
    subDropdown2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: height * 0.01,
        margin: width * 0.02,
        backgroundColor: '#0066FF',
        borderWidth: 1,
        borderRadius: 15,
        width: width*0.85,
    },
    checklistContainer: {
        padding: 12,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        backgroundColor: "#fff",
      },
      checklistItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8,
      },
      checklistText: {
        fontSize: 14,
        color: "#333",
      },
    subDropdownText2: {
        fontSize: width * 0.05,
        fontWeight: '900',
        color: 'white',
        marginLeft: 10,
    },
    arrow: {
        width: width * 0.1,
        height: height * 0.05,
        color: '#B7B7B7',
    },
    arrows: {
        fontSize: width * 0.07,
        color: '#B7B7B7',
        
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
