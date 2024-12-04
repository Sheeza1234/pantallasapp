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
import Navbar from '../../../navbar';
import * as ImagePicker from 'expo-image-picker';

const { width, height } = Dimensions.get('window');

export default function DniInfoScreen() {
    const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);

    const toggleMainDropdown = () => {
        ;
        setIsMainDropdownOpen(!isMainDropdownOpen);
    };
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
                source={require('../../../../assets/images/background.jpg')}
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
                        <Text style={styles.subDropdownText}>
                            DNI
                        </Text>
                        <Text style={styles.arrows}>▲</Text>
                    </TouchableOpacity>
                    <View>
                            <TouchableOpacity style={styles.subDropdown1} onPress={pickImage}>
                                <Text style={styles.subDropdownText1}>Tomar Fotografía</Text>
                                <Image
                                    source={require('../../../../assets/images/Iconos/PNG/camera.jpg')}
                                    style={styles.arrow}
                                />
                            </TouchableOpacity>
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
    subDropdownText: {
        fontSize: width * 0.045,
        fontWeight: '800',
        color: '#333',
        marginLeft: 10,
    },
    subDropdown1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: height * 0.004,
        margin: width * 0.02,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#0066FF',
        borderRadius: 15,
        width: '95%',
    },
    subDropdownText1: {
        fontSize: width * 0.045,
        fontWeight: '800',
        color: '#0066FF',
    },
    arrow: {
        width: width * 0.15,
        height: height * 0.05,
        color: '#B7B7B7',
        marginLeft: 23,
    },
    arrows: {
        fontSize: width * 0.07,
        color: '#B7B7B7',
        marginRight: 10,
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
