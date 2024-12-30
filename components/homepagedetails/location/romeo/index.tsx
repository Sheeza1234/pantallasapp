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
export default function RomeoInfoScreen() {
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
    useEffect(() => {
        StatusBar.setHidden(false);
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setBarStyle('light-content');
    }, []);


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
                        Alfa Romeo   AA275HT
                    </Text>
                </TouchableOpacity>
                <Image
                    style={styles.location}
                    source={require('../../../../assets/images/map.jpg')}
                />
                <TouchableOpacity style={styles.ubra}>
                <View style={styles.locationtext}>
                    <Text style={styles.locatext}>Ubicacion de mi vehiculo</Text>
                    <Text style={styles.lotext}><Image style={styles.locimage} source={require('../../../../assets/images/location.png')}/>Calle Urquiza e/ Lrigyoen y Gallardo</Text>
                    <Text style={styles.lotext}>Videma- Rio Negro</Text></View>
                    </TouchableOpacity>
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
        height: height * 0.3,
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
        width: width * 0.84,
        height: height * 0.55,
        marginLeft:width*0.03
    },
    locimage:{
         width:width*0.04,
         height:height*0.025
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
    locationtext: {
        justifyContent: 'center',
        marginTop:width*0.02,
        fontSize:width*0.3,
        alignItems: 'center',

    },
    ubra:{
        backgroundColor:'silver',
        borderRadius:width*0.03,
        marginLeft:width*0.05,
        width:width*0.8,
        height:height*0.18,

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
    lotext:
    {
        fontSize: width * 0.045,
        fontWeight: '500',
        marginBottom:width*0.04
    },
    locatext:
    {
        fontSize: width * 0.05,
        fontWeight: '600'
    },

});

