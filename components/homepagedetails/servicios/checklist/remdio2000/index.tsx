import React, { useState, useEffect } from 'react';
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
import Navbar from '../../../../navbar';
import { CheckSquare, ChevronDown } from 'react-native-feather';
const { width, height } = Dimensions.get('window');
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';
import { useNavigation } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Pinentry'>;


export default function Remdio2000InfoScreen() {

    useEffect(() => {
        StatusBar.setHidden(false);
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setBarStyle('light-content');
    }, []);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const navigation = useNavigation<NavigationProps>();

    const checklistItems = [
        { item: "Tanque de Combultible", id: '' },
        { item: "Fluidos " },
        { item: "Luces " },
        { item: "Neumaticos", id: 'equipo' },
        { item: "Frenos", id: 'de' },
        { item: "Suspension", id: '' },
        { item: "Embrague", id: 'del' },
        { item: "Direccion", id: 'otros' },
        { item: "Indicadores", id: '' },
        { item: "Revisar", id: 'revisar' },
        { item: "Filtro de Acite " },
        { item: "Filtro de Aire " },
        { item: "Mangueras " },
        { item: "Verificar Correas" },
        { item: "Inspecccion de Fugas" },
        { item: "Llevar Bidon de Combustible", id: '' },
        { item: "Lievar Bidon de Agua", id: '' },
        { item: "Equipo de Emergencias", id: '' },
        { item: "Extintor de Incendios" },
        { item: "Crique", id: '' },
        { item: "Documentacion del Vehiculo", id: '' },
        { item: "Otros", id: '' },
    ];

    const toggleSelection = (item: string) => {
        setSelectedItems((prevSelected) =>
            prevSelected.includes(item)
                ? prevSelected.filter((i) => i !== item)
                : [...prevSelected, item]
        );
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
                        <ChevronDown
                            width={width * 0.09}
                            height={width * 0.09}
                            color="#0066FF"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subDropdown1} >
                        <Text style={styles.subDropdownText1}>
                            Alfa Romeo  AA275HT
                        </Text>
                        <ChevronDown
                            width={width * 0.09}
                            height={width * 0.09}
                            color="#0066FF"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subDropdown1} >
                        <Text style={styles.subDropdownText1}>
                            Recorrido Mayor a 2000km
                        </Text>
                        <ChevronDown
                            width={width * 0.09}
                            height={width * 0.09}
                            color="#0066FF"
                        />
                    </TouchableOpacity>

                    <ScrollView>
                        <View>
                            {checklistItems.map((checklistItem, index) => (
                                <TouchableOpacity
                                    style={styles.checklistItem}
                                    key={checklistItem.id || index}
                                    onPress={() => {
                                        if (checklistItem) { toggleSelection(checklistItem.item) }
                                        if (checklistItem.id === 'equipo') {
                                            navigation.navigate('equipo')
                                        } else if (checklistItem.id === 'revisar') {
                                            navigation.navigate('Revisar')
                                        } else if (checklistItem.id === 'otros') {
                                            navigation.navigate('otros')
                                        }

                                    }}
                                >
                                    <View style={styles.subDropdown2}>
                                        <Text style={styles.subDropdownText2}>{checklistItem.item} </Text>
                                        <View style={styles.iconsContainer}>
                                            <ChevronDown
                                                width={width * 0.09}
                                                height={width * 0.09}
                                                color="#0066FF"
                                            />
                                            <CheckSquare
                                                color={

                                                    "black"
                                                }
                                                width={width * 0.07}
                                                height={width * 0.07}
                                            />
                                        </View>

                                    </View>

                                </TouchableOpacity>
                            ))}
                            <TouchableOpacity style={styles.subDropdown3} onPress={() => navigation.navigate('CheckList')}>
                                <Text style={styles.subDropdownText3}>
                                    Recomendaciones
                                </Text>
                                <ChevronDown
                                    width={width * 0.09}
                                    height={width * 0.09}
                                    color="#B7B7B7"
                                />
                            </TouchableOpacity>


                        </View>
                    </ScrollView>
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
    iconsContainer: {
        flexDirection: 'row', // Arrange icons horizontally
        alignItems: 'center', // Vertically align icons
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
        fontSize: width * 0.06,
        fontWeight: '800',
        color: '#0066FF',
        // marginLeft: 10,
    },
    subDropdown3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: height * 0.01,
        margin: width * 0.01,
        marginLeft: width * 0.26,
        backgroundColor: '#0066FF',
        borderRadius: 15,
        width: width * 0.6,
    },
    subDropdownText3: {
        fontSize: width * 0.05,
        fontWeight: '900',
        color: 'white',
        marginLeft: 10,
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
        width: width * 0.85,
    },
    subDropdownText1: {
        fontSize: width * 0.05,
        fontWeight: '900',
        color: '#333',
        marginLeft: 10,
    },

    subDropdown2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: height * 0.01,
        borderWidth: 1,
        borderRadius: 15,
        marginLeft: width * 0.26,
        width: width * 0.6,
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
        paddingVertical: 5,
    },
    checklistText: {
        fontSize: 14,
        color: "#333",
    },
    subDropdownText2: {
        fontSize: width * 0.03,
        fontWeight: '900',
        color: 'black',
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
