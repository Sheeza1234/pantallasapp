import React, { useEffect } from 'react';
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
import Navbar from '../../../navbar';
import { ChevronDown } from 'react-native-feather';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';
import { useNavigation } from 'expo-router';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Pinentry'>;

const { width, height } = Dimensions.get('window');

export default function ServicosNoInfoScreen() {
    const navigation = useNavigation<NavigationProps>();
    useEffect(() => {
        StatusBar.setHidden(false);
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setBarStyle('light-content');
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../../../assets/images/background1.jpg')}
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
                        <View style={styles.iconContainer}>
                            <Image
                                source={require('../../../../assets/images/Iconos/PNG/Gastos.png')}
                                style={styles.iconImage}
                            />
                        </View>


                        <TouchableOpacity >
                            <Text style={styles.mainDropdownText}>GASTOS</Text>

                        </TouchableOpacity>
                        <ChevronDown
                            width={width * 0.09}
                            height={width * 0.09}
                            color="#0066FF"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subDropdown} >
                        <Text style={styles.subDropdownText}>
                            Servicios No Programados
                        </Text>
                        <ChevronDown
                            width={width * 0.09}
                            height={width * 0.09}
                            color="#0066FF"
                        />
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity style={styles.subDropdown1} onPress={() => { navigation.navigate('GastrosDetail') }}>
                            <Text style={styles.subDropdownText}>
                                Alfa Romeo                  AA275HT
                            </Text>
                            <ChevronDown
                                width={width * 0.09}
                                height={width * 0.09}
                                color="#0066FF"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.subDropdown1} >
                            <Text style={styles.subDropdownText}>
                                Toyota                          AB369ES
                            </Text>
                            <ChevronDown
                                width={width * 0.09}
                                height={width * 0.09}
                                color="#0066FF"
                            />

                        </TouchableOpacity>
                    </View>
                    <View style={styles.singleBox}>
                        <TouchableOpacity style={styles.button}>
                            <Image
                                source={require('../../../../assets/images/editar.jpg')} // Replace with your image path
                                style={styles.icon}
                            />
                            <Text style={styles.buttonText}>Editar</Text>
                        </TouchableOpacity>

                        {/* Notas Button */}
                        <TouchableOpacity style={styles.button}>
                            <Image
                                source={require('../../../../assets/images/notes.png')} // Replace with your image path
                                style={styles.icon}
                            />
                            <Text style={styles.buttonText}>Notas</Text>
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
    },
    background: {
        flex: 1,
    },
    backgroundImage: {
        // opacity: 0.1,
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


    mainDropdownText: {
        fontWeight: 'bold',
        fontSize: width * 0.07,
        marginLeft: width * 0.2,
        // marginTop:width*0.1,
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
    iconContainer: {
        width: width * 0.18,
        height: width * 0.18,
        borderRadius: width * 0.1,

        alignItems: 'center',
        marginLeft: width * 0.015,
        zIndex: 1,
        position: 'absolute',
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
        padding: height * 0.015,
        margin: width * 0.02,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#0066FF',
        borderRadius: 15,
        width: '95%',
    },
    subDropdownText: {
        fontSize: width * 0.049,
        fontWeight: '800',
        color: '#333',
        marginLeft: 10,
    },
    subDropdown1: {
        flexDirection: 'row',

        alignItems: 'center',
        padding: height * 0.008,
        margin: width * 0.02,
        marginLeft: width * 0.15,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#0066FF',
        borderRadius: 15,
        width: width * 0.7,
    },
    subDropdownText1: {
        fontSize: width * 0.036,
        fontWeight: '900',
        color: '#333',
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
        marginRight: 10,
    },
    imageContainer: {
        alignItems: 'center',
        marginVertical: height * 0.03,
    },
    iconImage: {
        width: width * 0.4,
        height: height * 0.1,
        resizeMode: 'contain',
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
        marginTop: width * 0.68,
        elevation: 3,
        width: 'auto',
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
});
