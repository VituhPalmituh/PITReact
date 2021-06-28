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
import { RawButton } from 'react-native-gesture-handler';

export default function Alarm() {
    return (
        <View style={styles.background}>
            <ImageBackground style={styles.backgroundImage} source={require('../assets/image-background.jpg')}>
                <View style={styles.alarmContainerHeader}>
                    <Text style={styles.alarmTextHeader}>
                        Alarmes
                    </Text>
                </View>

                <View style={styles.container}>
                    <View style={styles.alarmContainer}>
                        <ScrollView style={styles.scrollContainer}>
                            <View style={styles.alarmBox}>
                                <View>
                                    <Text style={styles.alarmText}>13:30</Text>
                                    <Text style={styles.alarmSubText}>Dorflex</Text>
                                </View>
                                <View style={styles.switchEdit}>
                                    <Switch />
                                </View>
                            </View>
                            <View style={styles.alarmBox}>
                                <View>
                                    <Text style={styles.alarmText}>14:30</Text>
                                    <Text style={styles.alarmSubText}>Doril</Text>
                                </View>
                                <View style={styles.switchEdit}>
                                    <Switch />
                                </View>
                            </View>
                            <View style={styles.alarmBox}>
                                <View>
                                    <Text style={styles.alarmText}>23:45</Text>
                                    <Text style={styles.alarmSubText}>Dipirona</Text>
                                </View>
                                <View style={styles.switchEdit}>
                                    <Switch />
                                </View>
                            </View>
                            <View style={styles.alarmBox}>
                                <View>
                                    <Text style={styles.alarmText}>19:20</Text>
                                    <Text style={styles.alarmSubText}>Rivotril</Text>
                                </View>
                                <View style={styles.switchEdit}>
                                    <Switch />
                                </View>
                            </View>
                            <View style={styles.alarmBox}>
                                <View>
                                    <Text style={styles.alarmText}>09:12</Text>
                                    <Text style={styles.alarmSubText}>Nimesulida</Text>
                                </View>
                                <View style={styles.switchEdit}>
                                    <Switch />
                                </View>
                            </View>
                            <View style={styles.alarmBox}>
                                <View>
                                    <Text style={styles.alarmText}>06:00</Text>
                                    <Text style={styles.alarmSubText}>Azitromicina</Text>
                                </View>
                                <View style={styles.switchEdit}>
                                    <Switch />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>

                <View style={styles.footerContainer}>
                    <View style={styles.boxBtn}>
                        <TouchableOpacity style={styles.btnAlarm}>
                            <Text style={styles.footerAlarmText}>Criar Alarme</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boxBtn}>
                        <TouchableOpacity style={styles.btnAlarm}>
                            <Text style={styles.footerAlarmText}>Remover Alarme</Text>
                        </TouchableOpacity>
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
        flexDirection: 'row',
    },
    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    alarmContainerHeader: {
        marginTop: 40,
    },
    alarmTextHeader: {
        color: '#000',
        fontSize: 48,
        fontFamily: 'koho-bold',
    },
    alarmContainer: {
        marginTop: 30,
        width: '100%',
        marginBottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 0,
    },
    alarmBox: {
        backgroundColor: '#FFF',
        flex: 1,
        flexDirection: 'row',
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
        fontFamily: 'koho-bold',
    },
    alarmSubText: {
        color: '#000',
        fontSize: 14,
        fontFamily: 'koho-bold',
    },
    switchEdit: {
        marginLeft: 150,
    },
    footerContainer: {
        margin: 40,
        flexDirection: 'row',
    },
    btnAlarm: {
        backgroundColor: '#FFF',
        width: '100%',
        height: 50,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: 2,
    },
    footerAlarmText: {
        fontFamily: 'koho-bold',
    },
    boxBtn: {
        margin: 5,
        marginTop: 0,
        marginBottom: 0,
    },
});