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
import Navbar from '../../navbar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';
import { ChevronDown, ChevronUp, Plus, ArrowLeft, Menu } from 'react-native-feather';
import { useNavigation } from 'expo-router';
import { CheckSquare } from 'react-native-feather';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Pinentry'>;
interface Document {
    id: string;
    make: string;
    model: string;
    licensePlate: string;
}
const documents = [
    { id: 'AlfaRomeo', name: '                 AA275HT' },
    { id: 'Toyota ', name: '                   AB369ES' }
];

const documentss = [{ icon: require('../../../assets/images/Iconos/aciete.png'), name: 'Aciete Motor', id: 'Aciete' },
{ icon: require('../../../assets/images/Iconos/filtro.png'), name: 'Filtro de Combustible', id: 2 },
{ icon: require('../../../assets/images/Iconos/aire.png'), name: 'Filtro de Aire', id: 3 },
{ icon: require('../../../assets/images/Iconos/habitaculo.png'), name: 'Filtro de Habitaculo', id: 4 },
{ icon: require('../../../assets/images/Iconos/neuma.png'), name: 'Neumaticos', id: 'neumaticos' },
{ icon: require('../../../assets/images/Iconos/frenos.png'), name: 'Frenos', id: 7 },
{ icon: require('../../../assets/images/Iconos/otros.png'), name: 'Otros', id: 'otros' },
{ icon: require('../../../assets/images/Iconos/historial.png'), name: 'Historial', id: 'historial' },
{ icon: require('../../../assets/images/Iconos/checklist.png'), name: 'Check List Pre-Viaje', id: 'checklist' }]

const documentes = [{ id: 'Recorrido', name: 'Recorrido Menor a 500km' },
{ id: '500km', name: 'Recorrido de 500km a 200km' },
{ id: '2000km', name: 'Recorrido Mayor a 2000km' }]

const documentess = [{ name: 'Recambio', id: 'a' }, { name: 'Alineacion', id: 'b' }, { name: 'Balanceo', id: 'j' }]
const documenteses = [{ name: 'Differeciales', id: 'i' },
{ name: 'Extremos de Direccion', id: 'h' },
{ name: 'Mangureas', id: 'g' },
{ name: 'Suspension', id: 'f' },
{ name: 'Correas', id: 'e' },
{ name: 'Direccion', id: 'd' },
{ name: 'Embrague', id: 'c' }]

const documentaes = [{ name: '2019', id: '' },
{ name: '2020', id: '' }
    , { name: '2021', id: '' },
{ name: '2022', id: '' },
{ name: '2023', id: '' },
{ name: '2024', id: '' }]

const { width, height } = Dimensions.get('window')
export default function ServiciosInfoScreen() {
    const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
    const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
    const navigation = useNavigation<NavigationProps>();
    const [isAlfaRomeoOpen, setIsAlfaRomeoOpen] = useState(false);
    const [isToyotaOpen, setIsToyotaOpen] = useState(false);
    const [isChecklistOpen, setIsChecklistOpen] = useState(false);
    const [isNeumaticosOpen, setIsNeumaticosOpen] = useState(false);
    const [isOtrosOpen, setIsOtrosOpen] = useState(false);
    const [isHistorialOpen, setIsHistorialOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const toggleNeumaticosDropdown = () => {
        setIsNeumaticosOpen((prev) => !prev);
    };
    const toggleHistorialDropdown = () => {
        setIsHistorialOpen((prev) => !prev);
    };
    const toggleOtrosDropdown = () => {
        setIsOtrosOpen((prev) => !prev);
    };

    const toggleChecklistDropdown = () => {
        setIsChecklistOpen((prev) => !prev);
    };

    const toggleSubDropdownAlfaRomeo = () => {
        setIsAlfaRomeoOpen((prev) => !prev);
        if (isToyotaOpen) setIsToyotaOpen(false);
    };
    const toggleSubDropdownToyota = () => {
        setIsToyotaOpen((prev) => !prev);
        if (isAlfaRomeoOpen) setIsAlfaRomeoOpen(false);
    };

    const toggleMainDropdown = () => {
        setIsMainDropdownOpen((prev) => !prev);
        setOpenSubDropdown(null);
    };
    const toggleSelection = (item: string) => {
        setSelectedItems((prevSelected) =>
            prevSelected.includes(item)
                ? prevSelected.filter((i) => i !== item)
                : [...prevSelected, item]
        );
    };
    useEffect(() => {
        StatusBar.setHidden(false);
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setBarStyle('light-content');
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/background1.jpg')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <ImageBackground
                    source={isMainDropdownOpen
                        ? require('../../../assets/images/servicos1.jpg') // Change to the new overlay image
                        : require('../../../assets/images/servicios.jpg')} // Original overlay image
                    style={styles.overlayImage}
                >
                    <View style={styles.borderedContainer}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>INFORMACIÓN </Text>
                            <Text style={styles.headerText}> VEHÍCULO PERSONAL </Text>
                        </View>
                        <View style={styles.mainDropdownWrapper}>

                            <View style={styles.iconContainer}>
                                <View style={styles.iconContainer1}>
                                    <Image
                                        source={require('../../../assets/images/Iconos/PNG/Servicios.png')}
                                        style={styles.iconImage}
                                    />
                                </View>
                            </View>

                            <TouchableOpacity
                                style={[styles.mainDropdown, isMainDropdownOpen && styles.mainDropdownOpen]} // Add dynamic style for open state
                                onPress={toggleMainDropdown}
                            >

                                <Text style={styles.mainDropdownText}>SERVICIOS</Text>
                                <Text style={styles.arrow}> {isMainDropdownOpen ? (
                                    <ChevronUp width={width * 0.08} height={width * 0.08} color="white" />
                                ) : (
                                    <ChevronDown width={width * 0.08} height={width * 0.08} color="#B7B7B7" />
                                )}</Text>
                            </TouchableOpacity>

                            {isMainDropdownOpen && (
                                <ScrollView>
                                    <View>
                                        {documents.map((document) => (
                                            <View key={document.id}>
                                                <TouchableOpacity
                                                    style={styles.subDropdown}
                                                    onPress={() => {
                                                        if (document.id === 'AlfaRomeo') {
                                                            toggleSubDropdownAlfaRomeo();
                                                        } else if (document.id === 'Toyota') {
                                                            toggleSubDropdownToyota()
                                                        } else if (document.id === 'checklist') {
                                                            toggleChecklistDropdown(); // Toggle checklist dropdown
                                                        } else if (document.id === 'neumaticos') {
                                                            toggleNeumaticosDropdown();
                                                        } else if (document.id === 'otros') {
                                                            toggleOtrosDropdown()
                                                        } else if (document.id === 'historial') {
                                                            toggleHistorialDropdown()
                                                        }
                                                    }}

                                                >
                                                    <Text style={styles.subDropdownText}>
                                                        {document.id}
                                                    </Text>
                                                    <Text style={styles.arrow}>
                                                        <Text style={styles.subDropdownText}>
                                                            {document.name}
                                                        </Text>
                                                        {document.id === 'AlfaRomeo' && isAlfaRomeoOpen ? (
                                                            <ChevronUp width={width * 0.09} height={width * 0.09} color="#0066FF" />
                                                        ) : (
                                                            <ChevronDown width={width * 0.09} height={width * 0.09} color="#0066FF" />
                                                        )}
                                                    </Text>

                                                </TouchableOpacity>
                                                {document.id === 'Toyota' && isToyotaOpen && (
                                                    <View>

                                                    </View>
                                                )}

                                                {document.id === 'checklist' && isChecklistOpen && (
                                                    <View>
                                                        {documentes.map((subdocuments) => (
                                                            <View key={subdocuments.id}>

                                                                <TouchableOpacity
                                                                    style={styles.subDropdown1}
                                                                    onPress={() => {
                                                                        if (subdocuments.id === 'Aciete') {
                                                                            navigation.navigate('Aciete');
                                                                        } else if (subdocuments.id === 'checklist') {
                                                                            navigation.navigate('CheckList');
                                                                        }
                                                                    }}
                                                                >

                                                                    <Text style={styles.subDropdownText1}>{subdocuments.name}</Text>
                                                                    <ChevronDown width={width * 0.09} height={width * 0.09} color="#0066FF" />
                                                                </TouchableOpacity>
                                                            </View>
                                                        ))}
                                                    </View>
                                                )}

                                                {document.id === 'AlfaRomeo' && isAlfaRomeoOpen && (
                                                    <View>
                                                        {documentss.map((subdocument) => (
                                                            <View key={subdocument.id}>

                                                                <TouchableOpacity
                                                                    style={styles.subDropdown1}
                                                                    onPress={() => {
                                                                        if (subdocument.id === 'Aciete') {
                                                                            navigation.navigate('Aciete');
                                                                        } else if (subdocument.id === 'checklist') {
                                                                            toggleChecklistDropdown()
                                                                        } else if (subdocument.id === 'neumaticos') {
                                                                            toggleNeumaticosDropdown()
                                                                        } else if (subdocument.id === 'otros') {
                                                                            toggleOtrosDropdown()
                                                                        } else if (document.id === 'historial') {
                                                                            toggleHistorialDropdown()
                                                                        }
                                                                    }}
                                                                >
                                                                    <Image source={subdocument.icon} style={styles.itemIcon} />
                                                                    <Text style={styles.subDropdownText1}>{subdocument.name}</Text>
                                                                    <ChevronDown width={width * 0.09} height={width * 0.09} color="#0066FF" />
                                                                </TouchableOpacity>
                                                                {subdocument.id === 'checklist' && isChecklistOpen && (
                                                                    <View>
                                                                        {documentes.map((subdocuments) => (
                                                                            <View key={subdocuments.id}>

                                                                                <TouchableOpacity
                                                                                    style={styles.subDropdown1}
                                                                                    onPress={() => {
                                                                                        if (subdocuments.id === 'Recorrido') {
                                                                                            navigation.navigate('Remdio200');
                                                                                        } else if (subdocuments.id === 'checklist') {
                                                                                            navigation.navigate('CheckList');
                                                                                        } else if (subdocuments.id === '500km') {
                                                                                            navigation.navigate('Remdio500')
                                                                                        } else if (subdocuments.id === '2000km') {
                                                                                            navigation.navigate('Remdio2000')
                                                                                        }
                                                                                    }}
                                                                                >

                                                                                    <Text style={styles.subDropdownText1}>{subdocuments.name}</Text>
                                                                                    <ChevronDown width={width * 0.09} height={width * 0.09} color="#0066FF" />
                                                                                </TouchableOpacity>
                                                                            </View>
                                                                        ))}
                                                                    </View>
                                                                )}
                                                                {subdocument.id === 'neumaticos' && isNeumaticosOpen && (
                                                                    <View>
                                                                        {documentess.map((subdocumentss) => (
                                                                            <View key={subdocumentss.id}>

                                                                                <TouchableOpacity
                                                                                    style={styles.subDropdown1}
                                                                                    onPress={() => { if (subdocument) { toggleSelection(subdocument.name) } }}
                                                                                >

                                                                                    <Text style={styles.subDropdownText1}>{subdocumentss.name}</Text>
                                                                                    <View style={styles.iconsContainer}>
                                                                                        <ChevronDown
                                                                                            width={width * 0.09}
                                                                                            height={width * 0.09}
                                                                                            color="#0066FF"
                                                                                        />
                                                                                        <CheckSquare
                                                                                            color={
                                                                                                selectedItems.includes(subdocumentss.name)
                                                                                                    ? "#0066FF"
                                                                                                    : "black"
                                                                                            }
                                                                                            width={width * 0.07}
                                                                                            height={width * 0.07}
                                                                                        />
                                                                                    </View>
                                                                                </TouchableOpacity>
                                                                            </View>
                                                                        ))}
                                                                    </View>
                                                                )}
                                                                {subdocument.id === 'otros' && isOtrosOpen && (
                                                                    <View>
                                                                        {documenteses.map((subdocumentes) => (
                                                                            <View key={subdocumentes.id}>

                                                                                <TouchableOpacity
                                                                                    style={styles.subDropdown1}
                                                                                    onPress={() => { if (subdocumentes) { toggleSelection(subdocumentes.name) } }}
                                                                                >

                                                                                    <Text style={styles.subDropdownText1}>{subdocumentes.name}</Text>
                                                                                    <View style={styles.iconsContainer}>
                                                                                        <ChevronDown
                                                                                            width={width * 0.09}
                                                                                            height={width * 0.09}
                                                                                            color="#0066FF"
                                                                                        />
                                                                                        <CheckSquare
                                                                                            color={
                                                                                                selectedItems.includes(subdocumentes.name)
                                                                                                    ? "#0066FF"
                                                                                                    : "black"
                                                                                            }
                                                                                            width={width * 0.07}
                                                                                            height={width * 0.07}
                                                                                        />
                                                                                    </View>
                                                                                </TouchableOpacity>
                                                                            </View>
                                                                        ))}
                                                                    </View>
                                                                )}
                                                                {subdocument.id === 'historial' && isHistorialOpen && (
                                                                    <View>
                                                                        <TouchableOpacity
                                                                            style={styles.subDropdown2}
                                                                        >
                                                                            <Image
                                                                                source={require('../../../assets/images/Iconos/calender.png')}
                                                                                style={styles.iconImage} />
                                                                            <Text style={styles.subDropdownText1}>Fecha</Text>
                                                                            <ChevronDown width={width * 0.09} height={width * 0.09} color="#0066FF" />

                                                                        </TouchableOpacity>

                                                                        {documentaes.map((subdocumentaes) => (
                                                                            <View key={subdocumentaes.id}>

                                                                                <TouchableOpacity
                                                                                    style={styles.subDropdown1}
                                                                                    onPress={() => { if (subdocumentaes) { toggleSelection(subdocumentaes.name) } }}
                                                                                >

                                                                                    <Text style={styles.subDropdownText1}>{subdocumentaes.name}</Text>
                                                                                    <View style={styles.iconsContainer}>
                                                                                        <ChevronDown
                                                                                            width={width * 0.09}
                                                                                            height={width * 0.09}
                                                                                            color="#0066FF"
                                                                                        />
                                                                                        <CheckSquare
                                                                                            color={
                                                                                                selectedItems.includes(subdocumentaes.name)
                                                                                                    ? "#0066FF"
                                                                                                    : "black"
                                                                                            }
                                                                                            width={width * 0.07}
                                                                                            height={width * 0.07}
                                                                                        />
                                                                                    </View>
                                                                                </TouchableOpacity>
                                                                            </View>
                                                                        ))}
                                                                    </View>
                                                                )}

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
                                </ScrollView>
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
        flex: 1,
        width: '100%',
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
    mainDropdownOpen: {
        backgroundColor: '#84898b',
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
        width: width * 0.17,
        height: width * 0.17,
        borderRadius: width * 0.1,
        backgroundColor: '#0066FF',
        alignItems: 'center',
        marginLeft: width * 0.015,
        zIndex: 1,
        position: 'absolute',
    },
    iconContainer1: {
        width: width * 0.145,
        height: width * 0.145,
        borderRadius: width * 0.1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: width * 0.015,
        marginTop: height * 0.006,
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
        width: width * 0.2,
        height: width * 0.15,
        // resizeMode: 'contain',
    },
    mainDropdownText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: width * 0.07,
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
    iconsContainer: {
        flexDirection: 'row', // Arrange icons horizontally
        alignItems: 'center', // Vertically align icons
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
    subDropdown2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: height * 0.004,
        margin: width * 0.02,
        marginLeft: width * 0.2,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#0066FF',
        borderRadius: 15,
        width: '85%',
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
        margin: width * 0.005,
        marginLeft: width * 0.19,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#0066FF',
        borderRadius: 15,
        width: '75%',
    },
    subDropdownText1: {
        fontSize: width * 0.032,
        fontWeight: '800',
        color: '#333',
        // marginLeft: width * 0.03,
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
        backgroundColor: '#f0f0f0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginTop: width * 0.78,
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
    itemIcon: {
        width: 30,
        height: 30,
        // marginRight: 10,
        resizeMode: 'contain',
    },
});

