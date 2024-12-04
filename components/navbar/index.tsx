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
                    <Home stroke="white" width={50} height={40} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleBackPress}
                    activeOpacity={0.7}
                >
                    <ArrowLeft stroke="white" width={50} height={40} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleMenuPress}
                    activeOpacity={0.7}
                >
                    <Menu stroke="white" width={50} height={40} />
                </TouchableOpacity>
            </View>

            {/* Overlay Menu */}
            <Modal
                visible={menuVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={handleCloseMenu}
            >
                <View style={styles.overlay}>
                    <View style={styles.menuContainer}>

                        <View style={styles.grid}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleTutorialePress}
                                activeOpacity={0.7}
                            >
                                <PlayCircle stroke="white" width={30} height={50} />
                                <Text style={styles.activityText}>Tutoriale</Text>
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
        height: scale(60), // Use scale for responsive height
        paddingVertical: scale(12),
        paddingBottom: Platform.OS === 'ios' ? scale(20) : 0, // Adjust for iOS status bar
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    menuContainer: {
        width: '85%',
        height: scale(80), // Use scale for height responsiveness
        backgroundColor: 'black',
        borderRadius: scale(25),
        padding: scale(25),
        alignItems: 'center',
        flexDirection: 'row',
    },
    menuItem: {
        fontSize: scale(16), // Scaled font size
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
        marginLeft: scale(13), // Scaled margin
    },
    activityText: {
        color: 'white',
        fontSize: scale(16), // Scaled font size
        paddingLeft: scale(10), // Scaled padding
    },
    toogleicon: {
        marginLeft: scale(15), // Scaled margin
    },
});

export default Navbar;