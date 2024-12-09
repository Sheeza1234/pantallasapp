import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    StatusBar
} from 'react-native';
import Navbar from '../../../navbar';
import { ChevronDown } from 'react-native-feather';

const { width, height } = Dimensions.get('window');

export default function CombustibleInfoScreen() {
    useEffect(() => {
        StatusBar.setHidden(true);
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
                        <Text style={styles.subDropdownText}>
                            Combustible
                        </Text>
                        <ChevronDown
                            width={width * 0.09}
                            height={width * 0.09}
                            color="#0066FF"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subDropdown} >
                        <Text style={styles.subDropdownText}>
                            Alfa Romeo                          AA265HT
                        </Text>
                        <ChevronDown
                            width={width * 0.09}
                            height={width * 0.09}
                            color="#0066FF"
                        />
                    </TouchableOpacity>

                    <View>
                        <TouchableOpacity style={styles.subDropdown1} >
                            <Text style={styles.subDropdownText1}>
                                07/05/21 <Text style={styles.text}> / 3750$</Text>
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.subDropdown1} >
                            <Text style={styles.subDropdownText1}>
                                18/05/21 <Text style={styles.text}> / 23440$</Text>
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.subDropdown1} >
                            <Text style={styles.subDropdownText1}>
                                30/05/21 <Text style={styles.text}> / 31525$</Text>
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.subDropdown1} >
                            <Text style={styles.subDropdownText2}>
                                Total Mayo: <Text style={styles.text1}> / 92456$</Text>
                            </Text>
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
        // backgroundColor: 'white',
    },
    background: {
        flex: 1,
    },
    backgroundImage: {
        // opacity: 0.1,
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
        padding: height * 0.008,
        margin: width * 0.02,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#0066FF',
        borderRadius: 15,
        width: '95%',
    },
    subDropdownText: {
        fontSize: width * 0.05,
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
        fontSize: width * 0.05,
        fontWeight: '900',
        color: '#333',
        marginLeft: width * 0.3,
    },
    text: {
        // marginLeft:width*0.4,
        color: '#0066FF'
    },
    subDropdownText2: {
        fontSize: width * 0.06,
        fontWeight: '700',
        color: '#333',
        marginLeft: width * 0.18,
    },
    text1: {
        // marginLeft:width*0.4,
        color: '#0066FF'
    },
    arrows: {
        fontSize: width * 0.07,
        color: '#B7B7B7',
        marginRight: 10,
    },



});
