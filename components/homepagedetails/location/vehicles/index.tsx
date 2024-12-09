import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Modal,
    FlatList,
    ImageBackground,
    Dimensions,
    Image,
    StatusBar
} from 'react-native';
import { ChevronDown, Plus, ArrowLeft, Menu } from 'react-native-feather';
import Navbar from '../../../navbar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';
import { useNavigation } from 'expo-router';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Pinentry'>;
interface Document {
    id: string;
    make: string;
    model: string;
    licensePlate: string;
}


const { width, height } = Dimensions.get('window')
export default function LvehicleInfoScreen() {
    const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
    const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
    const navigation = useNavigation<NavigationProps>();
    useEffect(() => {
        StatusBar.setHidden(true);
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setBarStyle('light-content');
    }, []);

    const toggleMainDropdown = () => {
        setIsMainDropdownOpen((prev) => !prev);
        setOpenSubDropdown(null);
    };


    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../../../assets/images/location.jpg')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.overlay} />
                <View style={styles.borderedContainer}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>INFORMACIÓN </Text>
                        <Text style={styles.headerText}> VEHÍCULO PERSONAL </Text>
                    </View>
                    <View style={styles.mainDropdownWrapper}>
                        {/* Circle (Icon) */}
                        <View style={styles.iconContainer}>
                            <Image
                                source={require('../../../../assets/images/Iconos/PNG/Geolocalizacion.png')}
                                style={styles.iconImage}
                            />
                        </View>


                        <TouchableOpacity style={styles.mainDropdown} onPress={toggleMainDropdown}>
                            <Text style={styles.mainDropdownText}>GEOLOCALIZACION</Text>

                        </TouchableOpacity>


                        <View>

                            <TouchableOpacity style={styles.subDropdown} >

                                <Text style={styles.subDropdownText}>
                                    <Image
                                        source={require('../../../../assets/images/Iconos/PNG/search.jpg')}
                                        style={styles.itemIcon}
                                    />  Mis Vehiculos
                                </Text>
                                <ChevronDown width={width * 0.09} height={width * 0.09} color="#0066FF" />
                            </TouchableOpacity>
                            <View>
                                <TouchableOpacity style={styles.subDropdown1} onPress={() => { navigation.navigate('Romeo') }}>
                                    <Text style={styles.subDropdownText1}>
                                        Alfa Romeo           AA275HT
                                    </Text>
                                    <ChevronDown width={width * 0.09} height={width * 0.09} color="#0066FF" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.subDropdown1}  >
                                    <Text style={styles.subDropdownText1}>
                                        Toyota                    AB369ES

                                    </Text>
                                    <ChevronDown width={width * 0.09} height={width * 0.09} color="#0066FF" />
                                </TouchableOpacity>


                            </View>

                        </View>

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
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: height * 0.3,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(9,109,249,0.1)',
    },
    keyboardView: {
        flex: 1,
    },
    itemIcon: {
        width: 40,
        height: 50,
        resizeMode: 'contain',
    },
    item: {
        color: '#0066FF',
        fontSize: Math.min(width, height) * 0.03,
        fontWeight: '800',
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: width * 0.05,
    },
    backgroundImageStyle: {
        opacity: 0.1,
    },
    mainDropdownWrapper: {
        paddingTop: height * 0.046,
        flexDirection: 'column',
        zIndex: 1,
    },
    iconContainer: {
        width: width * 0.16,
        height: width * 0.16,
        borderRadius: width * 0.1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: width * 0.015,
        zIndex: 1,
        position: 'absolute',
    },
    mainDropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0066FF',
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.04,
        width: width * 0.74,
        marginLeft: width * 0.13,
        borderRadius: 15,
        marginTop: -height * 0.045,
        zIndex: 0,
    },
    box: {
        width: width * 0.8,
        margin: width * 0.06,
        backgroundColor: 'white',
        borderColor: 'silver',
        borderWidth: width * 0.008,
        elevation: 10,
    },
    iconImage: {
        width: width * 0.6,
        height: height * 0.08,
        resizeMode: 'contain',
    },
    mainDropdownText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: width * 0.06,
        marginLeft: width * 0.04,
    },
    arrow: {
        fontSize: width * 0.08,
        color: '#B7B7B7',
    },
    borderedContainer: {
        flex: 1,
        margin: width * 0.05,
        borderWidth: 1,
        borderColor: '#f8f9fa',
        borderRadius: 15,
        overflow: 'hidden',
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
        padding: height * 0.004,
        margin: width * 0.02,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#0066FF',
        borderRadius: 15,
        width: width * 0.85,
    },
    subDropdownText: {

        fontSize: width * 0.08,
        fontWeight: '800',
        color: '#333',
    },
    subDropdown1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: height * 0.003,
        margin: width * 0.009,
        marginLeft: width * 0.19,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#0066FF',
        borderRadius: 15,
        width: width * 0.68,
    },
    subDropdownText1: {
        fontSize: width * 0.04,
        fontWeight: '800',
        color: '#333',
        marginLeft: width * 0.03,
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
    buttonTexts: {
        fontSize: width * 0.06,
        color: '#000',
        fontWeight: '500',
    },
});

