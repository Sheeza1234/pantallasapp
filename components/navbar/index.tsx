import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Platform,
    Modal,
    Text,
    Image,
    Dimensions
} from 'react-native';
import { Home, ArrowLeft, Menu, PlayCircle, FileText, User, Settings } from 'react-native-feather';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';
import { useNavigation } from 'expo-router';
import { scale } from 'react-native-size-matters'; // Assuming you're using react-native-size-matters
import _default from 'react-native-gesture-handler/lib/typescript/components/GestureHandlerButton';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Pinentry'>;

interface NavbarProps {
    onMenuPress?: () => void; // Optional callback for the Menu button
}

const Navbar: React.FC<NavbarProps> = ({ onMenuPress }) => {
    const navigation = useNavigation<NavigationProps>();
    const [menuVisible, setMenuVisible] = useState(false); // State to toggle menu

    const handleHomePress = () => {

        navigation.navigate('Information');
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleMenuPress = () => {
        setMenuVisible(true);
    };

    const handleCloseMenu = () => {
        setMenuVisible(false); // Hide the menu
    };

    const handleTutorialePress = () => {
        navigation.navigate('Tutorials');
    };
    const handleResumePress = () => {
        navigation.navigate('Resumen');
    };
    const handleUserPress = () => {
        navigation.navigate('Perfil');
    };
    const handleSettingPress = () => {
        navigation.navigate('Adjustes');
    };


    return (
        <>
            {/* Main Navigation Bar */}
            <View style={styles.navigationBar}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleHomePress}
                    activeOpacity={0.7}
                >
                    <Image
                        source={require('../../assets/Menu Inferior Iconos/Menu-Inferior-Iconos-Casa.png')}
                        style={styles.iconImage}
                    />

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleBackPress}
                    activeOpacity={0.7}
                >
                    <Image
                        source={require('../../assets/Menu Inferior Iconos/Menu-Inferior-Iconos-Fleca.png')}
                        style={styles.iconImage}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleMenuPress}
                    activeOpacity={0.7}
                >
                    <Image
                        source={require('../../assets/images/home.png')}
                        style={styles.iconImage}
                    />
                </TouchableOpacity>
            </View>

            {/* Overlay Menu */}
            <Modal
                visible={menuVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={handleCloseMenu}
            >

                <View style={styles.menuContainer}>

                    <View style={styles.grid}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleTutorialePress}
                            activeOpacity={0.7}
                        >
                            <PlayCircle stroke="white" width={30} height={50} />
                            <Text style={styles.activityText}>Tutoriales</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleResumePress}
                            activeOpacity={0.7}
                        >
                            <FileText stroke="white" style={styles.toogleicon} width={30} height={50} />
                            <Text style={styles.activityText}>Resumen</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleUserPress}
                            activeOpacity={0.7}
                        >
                            <User stroke="white" style={styles.toogleicon} width={30} height={50} />
                            <Text style={styles.activityText}>Perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleSettingPress}
                            activeOpacity={0.7}
                        >
                            <Settings stroke="white" style={styles.toogleicon} width={30} height={50} />
                            <Text style={styles.activityText}>Ajustes</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        </>
    );
};


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    navigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#000',
        height: scale(54), // Use scale for responsive height
        paddingVertical: scale(12),
        paddingBottom: Platform.OS === 'ios' ? scale(20) : 0, // Adjust for iOS status bar
    },
    iconImage: {
        width: scale(40),
        height: scale(35),
        resizeMode: 'contain',
    },
    menuContainer: {
        position: 'absolute',
        top: scale(650), // Position the menu right below the navbar
        width: '87%',
        height: scale(110),
        backgroundColor: 'black',
        borderRadius: scale(25),
        borderColor: 'white',
        borderWidth: width * 0.001,
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: '6.5%', // Center the menu based on the navbar's width
    },
    menuItem: {
        fontSize: scale(14), // Scaled font size
        padding: scale(10), // Scaled padding
        marginVertical: scale(5), // Scaled margin
    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        marginBottom: scale(15),
        marginLeft: scale(15), // Scaled margin
    },
    activityText: {
        color: 'white',
        fontSize: scale(15), // Scaled font size
        paddingLeft: scale(10), // Scaled padding
    },
    toogleicon: {
        marginLeft: scale(10), // Scaled margin
    },
});
export default Navbar