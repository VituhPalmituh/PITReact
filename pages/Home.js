import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Switch,
} from 'react-native';

export default function Home() {
    return (
        <View style={styles.background}>
            <ImageBackground style={styles.backgroundImage} source={require('../assets/image-background.jpg')}>
                <View style={styles.menuContainer}>
                    <Text style={styles.menuText}>
                        Menu
                    </Text>
                </View>

                <View style={styles.container}>

                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuText: {
        color: '#000',
        fontSize: 48,
        fontFamily: 'koho-bold',
    },
    menuContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 120,
    },
});