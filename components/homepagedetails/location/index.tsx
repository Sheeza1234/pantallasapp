import React, { useState } from 'react';
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
    Platform
} from 'react-native';
import { ChevronDown, Plus, ArrowLeft, Menu } from 'react-native-feather';
import Navbar from '@/components/navbar';
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
const documents = [
    { icon: require('../../../assets/images/vehicle.png'), name: 'Mis Vehiculos', id: 'vehicle' },
    { icon: require('../../../assets/images/Iconos/PNG/esta.png'), name: 'Estacionamiento', id: 'miento' },
    { icon: require('../../../assets/images/Iconos/PNG/petrol-pump-icon.png'), name: 'Estaciones de Servicio', id: 'estancio' },
    { icon: require('../../../assets/images/Iconos/PNG/84137.png'), name: 'Acarreos de Vehiculos', id: 'servicios' },
    { icon: require('../../../assets/images/Iconos/PNG/gomer.png'), name: 'Gomerias', id: '3' },
    { icon: require('../../../assets/images/Iconos/PNG/mecanicos.png'), name: 'Tallers Mecanicos', id: '4' },
    { icon: require('../../../assets/images/Iconos/PNG/repues.png'), name: 'Casas de Repuestos', id: '5' },
    { icon: require('../../../assets/images/Iconos/PNG/police.png'), name: 'Puestos Policiales', id: '6' },
];
const documentss = [{ id: 'Alfa Romeo', name: '               AA275HT' }, {
    id: 'Servicios', name: '                         AB369ES'
}]

const documentes = [{ id: 'servicos', name: '  Servicios Programados' }, {
    id: 'servicosno', name: '  Servicios No Programados'
}, { id: '', name: '  Otros' }]

const { width, height } = Dimensions.get('window')
export default function LocationInfoScreen() {
    const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
    const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
    const navigation = useNavigation<NavigationProps>();
    const [isAlfaOpen, setIsAlfaOpen] = useState(false);
    const [isServiciosOpen, setIsServiciosOpen] = useState(false);

    const toggleSubDropdownAlfa = () => {
        setIsAlfaOpen((prev) => !prev);
        if (isServiciosOpen) setIsServiciosOpen(false); // Close Servicios if open
    };
    const toggleSubDropdownServicios = () => {
        setIsServiciosOpen((prev) => !prev);
        if (isAlfaOpen) setIsAlfaOpen(false); // Close Alfa if open
    };

    const toggleMainDropdown = () => {
        setIsMainDropdownOpen((prev) => !prev);
        setOpenSubDropdown(null);
    };

    const navigatetocombustiblescreen = () => {
        navigation.navigate('Lvehicle');
    }

    const navigatetoestancioscreen = () => {
        navigation.navigate('Estancio');
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/location.jpg')}
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
                                source={require('../../../assets/images/Iconos/PNG/Geolocalizacion.png')}
                                style={styles.iconImage}
                            />
                        </View>

                        {/* MIS VEHÍCULOS Container */}
                        <TouchableOpacity style={styles.mainDropdown} onPress={toggleMainDropdown}>
                            <Text style={styles.mainDropdownText}>GEOLOCALIZACION</Text>
                            <Text style={styles.arrow}>{isMainDropdownOpen ? '▲' : '▼'}</Text>
                        </TouchableOpacity>

                        {/* Dropdown Content */}
                        {isMainDropdownOpen && (
                            <View style={styles.box}>
                                {documents.map((document) => (
                                    <View key={document.id} style={styles.itemContainer} >
                                        <Image source={document.icon} style={styles.itemIcon} />
                                        <TouchableOpacity
                                            onPress={() => {
                                                if (document.id === 'vehicle') {
                                                    navigatetocombustiblescreen()
                                                } else if (document.id === 'estancio') {
                                                    navigatetoestancioscreen()
                                                }
                                            }}
                                        >
                                            <Text style={styles.subDropdownText}>
                                                {document.name}
                                            </Text>
                                        </TouchableOpacity>


                                    </View>
                                ))}


                            </View>
                        )}

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
        width: width * 0.18,
        height: width * 0.18,
        borderRadius: width * 0.1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: width * 0.015,
        zIndex: 1,
        position: 'absolute',
    },
    itemContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 10, 
        paddingHorizontal: 10, 
    },
    itemIcon: {
        width: 40, 
        height: 30, 
        marginRight: 10, 
        resizeMode: 'contain', 
    },
    itemText: {
        fontSize: 16, 
        color: '#333', 
        fontWeight: 'bold', 
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
        width: width * 0.8,
        height: height * 0.09,
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
    subDropdownText: {
        fontSize: width * 0.045,
        fontWeight: '800',
        color: '#333',
        marginLeft: width * 0.03,
        marginBottom: width * 0.03
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

