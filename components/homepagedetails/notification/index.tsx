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
import { ChevronDown, ChevronUp, Plus, ArrowLeft, Menu } from 'react-native-feather';
import Navbar from '../../navbar';
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
    { name: 'Licencia Nacional de', id: 'Conducir' },
    { name: 'Seguro del', id: 'Vehiculo' },
    { name: 'Actualizacion Mensual/', id: 'Fecha/km' },
    { name: 'Servicios Fecha/', id: 'kilometraje' },
    { name: 'Otros', id: 'servicios' }
];
const documentss = [{ id: 1, name: 'Otorgamiento          14/04/2020' },
{ id: 2, name: 'Vencimiento           14/05/2021' },
{ id: 3, name: 'Renovacion:           Faltan 47 Dias' }]

const documentes = [{ id: 1, name: 'Titulo del Automotor' },
{ id: 2, name: 'Alfa Romeo         AA275HT' },
{ id: 3, name: 'Toyota             AB369ES' }]

const Actualize = [{ id: 178230, name: '30/05/21' },
{ id: 172238, name: 'Ultimo 29/04/21' },
{ id: 3230, name: 'Kms en Ultimos 30 Dias' }]

const servicos = [{ name: 'Aciete Motor', id: 1 },
{ name: 'Filtro de Combustible', id: 2 },
{ name: 'Filtro de Aire', id: 3 },
{ name: 'Neumaticos', id: 4 },
{ name: 'Frenos', id: 5 },
{ name: 'Transmission', id: 7 },
{ name: 'Otros', id: 8 }]

const servicios = [{ name: 'Aciete Motor', id: 12 },
{ name: 'Filtro', id: 13 },
{ name: 'Ultimo        14/04/2020/172238 km', id: 14 },
{ name: 'Proximo        14/04/2020/178230 km', id: 15 },
{ name: 'Restan:        98 Dias/3230 km', id: 16 },

]


const { width, height } = Dimensions.get('window')
export default function NoticicationInfoScreen() {
    const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
    const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
    const navigation = useNavigation<NavigationProps>();
    const [isConducirOpen, setIsConducirOpen] = useState(false);
    const [isVehiculoOpen, setIsVehiculoOpen] = useState(false);
    const [isActualizeOpen, setIsActualizeOpen] = useState(false);
    const [isservicosOpen, setIsservicosOpen] = useState(false);
    const [isserviciosOpen, setIsserviciosOpen] = useState(false);
    const [isOpen, setIs1Open] = useState(false);
    useEffect(() => {
        StatusBar.setHidden(false);
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setBarStyle('light-content');
    }, []);
    const toggleSubDropdownConducir = () => {
        setIsConducirOpen((prev) => !prev);
        if (isVehiculoOpen) setIsVehiculoOpen(false);
    };
    const toggleSubDropdownVehiculo = () => {
        setIsVehiculoOpen((prev) => !prev);
        if (isConducirOpen) setIsConducirOpen(false);
    };
    const toggleSubDropdownActualize = () => {
        setIsActualizeOpen((prev) => !prev);
        if (isConducirOpen) setIsConducirOpen(false);
        if (isVehiculoOpen) setIsVehiculoOpen(false);
    };

    const toggleSubDropdownservicos = () => {
        setIsservicosOpen((prev) => !prev);
        if (isConducirOpen) setIsConducirOpen(false);
        if (isVehiculoOpen) setIsVehiculoOpen(false);
        if (isActualizeOpen) setIsActualizeOpen(false);
    };

    const toggleSubDropdownservicios = () => {
        setIsserviciosOpen((prev) => !prev);
        if (isConducirOpen) setIsConducirOpen(false);
        if (isVehiculoOpen) setIsVehiculoOpen(false);
        if (isActualizeOpen) setIsActualizeOpen(false);
        if (isservicosOpen) setIsservicosOpen(false);
    };


    const toggleMainDropdown = () => {
        setIsMainDropdownOpen((prev) => !prev);
        setOpenSubDropdown(null);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/background1.jpg')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >

                <ImageBackground
                    source={isMainDropdownOpen
                        ? require('../../../assets/images/notifcaiones1.jpg') // Change to the new overlay image
                        : require('../../../assets/images/notification.jpg')} // Original overlay image
                    style={styles.overlayImage}
                >

                    <View style={styles.borderedContainer}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>INFORMACIÓN </Text>
                            <Text style={styles.headerText}> VEHÍCULO PERSONAL </Text>
                        </View>
                        <View style={styles.mainDropdownWrapper}>

                            <View style={styles.iconContainer}>
                                <Image
                                    source={require('../../../assets/images/Iconos/PNG/Documenatcion.png')}
                                    style={styles.iconImage}
                                />
                            </View>
                            <TouchableOpacity
                                style={[styles.mainDropdown, isMainDropdownOpen && styles.mainDropdownOpen]} // Add dynamic style for open state
                                onPress={toggleMainDropdown}
                            >

                                <Text style={styles.mainDropdownText}>NOTIFICACIONES</Text>
                                <Text style={styles.arrow}> {isMainDropdownOpen ? (
                                    <ChevronUp width={width * 0.08} height={width * 0.08} color="#0066FF" />
                                ) : (
                                    <ChevronDown width={width * 0.08} height={width * 0.08} color="#B7B7B7" />
                                )}</Text>
                            </TouchableOpacity>

                            {isMainDropdownOpen && (
                                <View>
                                    {documents.map((document) => (
                                        <View key={document.id}>
                                            <TouchableOpacity
                                                style={styles.subDropdown}
                                                onPress={() => {
                                                    if (document.id === 'Conducir') {
                                                        toggleSubDropdownConducir();
                                                    } else if (document.id === 'Vehiculo') {
                                                        toggleSubDropdownVehiculo()
                                                    } else if (document.id === 'Fecha/km') {
                                                        toggleSubDropdownActualize()
                                                    } else if (document.id === 'kilometraje') {
                                                        toggleSubDropdownservicos()
                                                    } else if (document.id === 'servicios') {
                                                        toggleSubDropdownservicios()
                                                    }
                                                }}

                                            >
                                                <Text style={styles.subDropdownText}>
                                                    {document.name} - {document.id}
                                                </Text>
                                                <Text style={styles.arrow}>
                                                    {document.id === 'Conducir' && isConducirOpen ? (
                                                        <ChevronUp width={width * 0.09} height={width * 0.09} color="#0066FF" />
                                                    ) : (
                                                        <ChevronDown width={width * 0.09} height={width * 0.09} color="#0066FF" />
                                                    )}
                                                </Text>

                                            </TouchableOpacity>
                                            {document.id === 'Vehiculo' && isVehiculoOpen && (
                                                <View>
                                                    {documentes.map((subdocuments) => (
                                                        <View key={subdocuments.id}>
                                                            <TouchableOpacity
                                                                style={styles.subDropdown1}

                                                            >
                                                                <Text style={styles.subDropdownText1}>{subdocuments.name}</Text>
                                                                <ChevronDown width={width * 0.09} height={width * 0.09} color="#0066FF" />
                                                            </TouchableOpacity>
                                                        </View>
                                                    ))}
                                                </View>
                                            )}
                                            {document.id === 'Conducir' && isConducirOpen && (
                                                <View>
                                                    {documentss.map((subdocument) => (
                                                        <View key={subdocument.id}>
                                                            <TouchableOpacity
                                                                style={styles.subDropdown1}
                                                            >
                                                                <Text style={styles.subDropdownText1}>{subdocument.name}</Text>
                                                                <ChevronDown width={width * 0.09} height={width * 0.09} color="#0066FF" />
                                                            </TouchableOpacity>
                                                        </View>
                                                    ))}
                                                </View>
                                            )}
                                            {document.id === 'Fecha/km' && isActualizeOpen && (
                                                <View>
                                                    {documentss.map((subsdocument) => (
                                                        <View key={subsdocument.id}>
                                                            <TouchableOpacity
                                                                style={styles.subDropdown1}
                                                            >
                                                                <Text style={styles.subDropdownText1}>{subsdocument.name}</Text>
                                                                <ChevronDown width={width * 0.09} height={width * 0.09} color="#0066FF" />
                                                            </TouchableOpacity>
                                                        </View>
                                                    ))}
                                                </View>
                                            )}
                                            {document.id === 'kilometraje' && isservicosOpen && (
                                                <View>
                                                    {documentss.map((subdocuments) => (
                                                        <View key={subdocuments.id}>
                                                            <TouchableOpacity
                                                                style={styles.subDropdown1}
                                                            >
                                                                <Text style={styles.subDropdownText1}>{subdocuments.name}</Text>
                                                                <ChevronDown width={width * 0.09} height={width * 0.09} color="#0066FF" />
                                                            </TouchableOpacity>
                                                        </View>
                                                    ))}
                                                </View>
                                            )}
                                            {document.id === 'servicios' && isserviciosOpen && (
                                                <View>
                                                    {documentss.map((subdocument) => (
                                                        <View key={subdocument.id}>
                                                            <TouchableOpacity
                                                                style={styles.subDropdown1}
                                                            >
                                                                <Text style={styles.subDropdownText1}>{subdocument.name}</Text>
                                                                <ChevronDown width={width * 0.09} height={width * 0.09} color="#0066FF" />
                                                            </TouchableOpacity>
                                                        </View>
                                                    ))}
                                                </View>
                                            )}
                                        </View>
                                    ))}
                                    <View style={styles.singleBox}>
                                        <TouchableOpacity style={styles.button}>
                                            <Image
                                                source={require('../../../assets/images/editar.jpg')} // Replace with your image path
                                                style={styles.icon}
                                            />
                                            <Text style={styles.buttonText}>Editar</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.button}>
                                            <Image
                                                source={require('../../../assets/images/notes.png')} // Replace with your image path
                                                style={styles.icon}
                                            />
                                            <Text style={styles.buttonText}>Notas</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}

                        </View>


                    </View>
                </ImageBackground>
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
        flex: 1, width: '100 %', opacity: 0.3
    },
    overlayImage: {
        flex: 1,
        width: '100%',
        height: height * 0.28,
        resizeMode: 'contain',

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
        opacity: 0.5,
    },
    mainDropdownWrapper: {
        paddingTop: height * 0.046,
        flexDirection: 'column',
        zIndex: 1,
    },
    mainDropdownOpen: {
        backgroundColor: '#84898b',
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
    mainDropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0066FF',
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.04,
        width: '83%',
        marginLeft: width * 0.13,
        borderRadius: 15,
        marginTop: -height * 0.045,
        zIndex: 0,
    },
    iconImage: {
        width: width * 0.4,
        height: height * 0.1,
        resizeMode: 'contain',
    },
    mainDropdownText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: width * 0.065,
        marginLeft: width * 0.05,
    },
    arrow: {
        fontSize: width * 0.08,
        color: '#B7B7B7',
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
        width: '95%',
    },
    subDropdownText: {
        fontSize: width * 0.045,
        fontWeight: '800',
        color: '#333',
        marginLeft: width * 0.03,
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
        width: '75%',
    },
    subDropdownText1: {
        fontSize: width * 0.037,
        fontWeight: '800',
        color: '#333',
        marginLeft: width * 0.03,
    },
    subItem: {
        fontSize: width * 0.045,
        fontWeight: '800',
        color: '#555',
        paddingVertical: height * 0.007,
        marginLeft: width * 0.05,
    },
    singleBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: height * 0.015,
        marginTop: width * 0.34,
        backgroundColor: '#f0f0f0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        width: width * 0.9,
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

