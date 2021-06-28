import React, { useState } from 'react';
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
                    <View style={styles.alarmBox}>
                        <View style={styles.nextAlarm}>
                            <Text style={styles.alarmText}>Próximo Alarme</Text>
                            <Text style={styles.alarmText}>23:45</Text>
                        </View>
                            <Text style={styles.alarmSubText}>Dipirona</Text>
                    </View>
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
    alarmBox: {
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 10,
        paddingRight: 0,
        fontSize: 16,
        borderRadius: 7,
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: 2,
    },
    alarmText: {
        color: '#000',
        fontSize: 22,
        marginRight: 20,
        fontFamily: 'koho-bold',
    },
    alarmSubText: {
        color: '#000',
        fontSize: 14,
        fontFamily: 'koho-bold',
    },
    nextAlarm: {
        flexDirection: 'row',
    },
});