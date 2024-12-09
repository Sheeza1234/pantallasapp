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
    Platform,
    StatusBar
} from 'react-native';
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
export default function EstancioInfoScreen() {
    const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
    const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
    const navigation = useNavigation<NavigationProps>();
    const [isAlfaOpen, setIsAlfaOpen] = useState(false);
    const [isServiciosOpen, setIsServiciosOpen] = useState(false);
    useEffect(() => {
        StatusBar.setHidden(true);
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setBarStyle('light-content');
    }, []);
    const toggleSubDropdownAlfa = () => {
        setIsAlfaOpen((prev) => !prev);
        if (isServiciosOpen) setIsServiciosOpen(false);
    };
    const toggleSubDropdownServicios = () => {
        setIsServiciosOpen((prev) => !prev);
        if (isAlfaOpen) setIsAlfaOpen(false);
    };

    const toggleMainDropdown = () => {
        setIsMainDropdownOpen((prev) => !prev);
        setOpenSubDropdown(null);
    };


    return (
        <SafeAreaView style={styles.container}>
            <View />
            <View style={styles.borderedContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>INFORMACIÓN </Text>
                    <Text style={styles.headerText}> VEHÍCULO PERSONAL </Text>
                </View>

                <TouchableOpacity style={styles.subDropdown} >
                    <Image
                        source={require('../../../../assets/images/Iconos/PNG/search.jpg')}
                        style={styles.icon}
                    />
                    <Text style={styles.subDropdownText}>
                        Estaciones de Servico
                    </Text>
                </TouchableOpacity>
                <Image
                    style={styles.location}
                    source={require('../../../../assets/images/map.jpg')}
                />
                <ScrollView style={styles.listContainer}>
                    <View style={styles.listItem}>
                        <View style={styles.listItemContent}>
                            <View>
                                <Text style={styles.listTitle}>Shell</Text>
                                <Text style={styles.listSubtitle}>
                                    Gasolinera{"\n"}750.0 metros · Cardenal Cagliero{"\n"}Abierto las 24 horas
                                </Text>
                            </View>
                            <View style={styles.listActions}>
                                <TouchableOpacity style={styles.actionButton}>
                                    <Text style={styles.actionIcon}>📞</Text>
                                    <Text style={styles.actionText}>LLAMAR</Text>
                                </TouchableOpacity>


                                <TouchableOpacity style={styles.actionButton}>
                                    <Text style={styles.actionIcon}>📍</Text>
                                    <Text style={styles.actionText}>RUTA</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.listItemContent}>
                            <View>
                                <Text style={styles.listTitle}>Shell</Text>
                                <Text style={styles.listSubtitle}>
                                    Gasolinera{"\n"}750.0 metros · Cardenal Cagliero{"\n"}Abierto las 24 horas
                                </Text>
                            </View>
                            <View style={styles.listActions}>
                                <TouchableOpacity style={styles.actionButton}>
                                    <Text style={styles.actionIcon}>📞</Text>
                                    <Text style={styles.actionText}>LLAMAR</Text>
                                </TouchableOpacity>


                                <TouchableOpacity style={styles.actionButton}>
                                    <Text style={styles.actionIcon}>📍</Text>
                                    <Text style={styles.actionText}>RUTA</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>


                <View style={styles.fuelPrices}>
                    <View style={styles.priceBox}>
                        <Text style={styles.priceText}>905$</Text>
                        <Text style={styles.priceLabel}>Nafta</Text>
                    </View>
                    <View style={styles.priceBox}>
                        <Text style={styles.priceText}>1100$</Text>
                        <Text style={styles.priceLabel1}>Diesel</Text>
                    </View>
                    <View style={styles.priceBox}>
                        <Text style={styles.priceText}>650$</Text>
                        <Text style={styles.priceLabel2}>GNC</Text>
                    </View>
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Videma - Río Negro</Text>
                </View>
            </View>
            <Navbar />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconImage: {
        width: width * 0.08,
        height: height * 0.05,
        resizeMode: 'contain',
    },
    mainDropdownText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: width * 0.06,
        marginLeft: width * 0.04,
    },
    location:
    {
        width: width * 0.9,
        height: height * 0.2
    },
    borderedContainer: {
        flex: 1,
        margin: width * 0.05,
        borderWidth: 1,
        borderColor: '#0066FF',
        borderRadius: 15,
        overflow: 'hidden',
    },
    locationtext: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    actionButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        marginVertical: 5,
    },
    actionIcon: {
        fontSize: 20,
        marginRight: 5,          // Space between icon and text
    },
    actionText: {
        color: "#007AFF",        // Text color
        fontSize: 16,            // Font size
        fontWeight: "bold",      // Bold text
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
        fontSize: width * 0.07,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subDropdown: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        padding: height * 0.007,
        alignItems: 'center',
        margin: width * 0.02,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#0066FF',
        borderRadius: 15,
        width: width * 0.85,
    },
    subDropdownText: {
        fontSize: width * 0.055,
        fontWeight: '800',
        color: '#333',
        marginLeft: width * 0.03,
    },
    icon: {
        width: width * 0.08,
        height: width * 0.08,
        marginBottom: height * 0.005,
    },
    mapContainer: {
        height: 200,
        margin: 10,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#E0E0E0",
        justifyContent: "center",
        alignItems: "center",
    },
    mapPlaceholder: {
        fontSize: 16,
        color: "#888",
    },
    listContainer: {
        flex: 1,
        margin: 10,
    },
    listItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    listItemContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    listTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    listSubtitle: {
        fontSize: 14,
        color: "#666",
        marginTop: 5,
    },
    listActions: {
        alignItems: "flex-end",
    },
    fuelPrices: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 20,
        backgroundColor: "#FFFFFF",
        elevation: 3,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    priceBox: {
        alignItems: "center",
        borderRightWidth: 1,
        paddingRight: 15,
        borderRightColor: "#ddd",
    },
    priceText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#333",
    },
    priceLabel: {
        fontSize: 19,
        color: "green",
    },
    priceLabel1: {
        fontSize: 19,
        color: "red",
    },
    priceLabel2: {
        fontSize: 19,
        color: "blue",
    },
    footer: {
        alignItems: "center",
        padding: 10,
        backgroundColor: "silver",
    },
    footerText: {
        fontSize: 14,
        color: "#666",
    },

});

