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

export default function Schedule() {
    return (
        <View style={styles.background}>
            <ImageBackground style={styles.backgroundImage} source={require('../assets/image-background.jpg')}>
                <View style={styles.scheduleContainerHeader}>
                    <Text style={styles.scheduleTextHeader}>
                        Agendas
                    </Text>
                </View>

                <View style={styles.container}>
                    <View style={styles.scheduleContainer}>
                        <ScrollView style={styles.scrollContainer}>
                            <View style={styles.scheduleBox}>
                                <View>
                                    <Text style={styles.scheduleText}>13:30</Text>
                                    <Text style={styles.scheduleSubText}>Dr. Lima</Text>
                                </View>
                                <View style={styles.switchEdit}>
                                    <Switch/>
                                </View>
                            </View>
                            <View style={styles.scheduleBox}>
                                <View>
                                    <Text style={styles.scheduleText}>14:30</Text>
                                    <Text style={styles.scheduleSubText}>Dra. Márcia</Text>
                                </View>
                                <View style={styles.switchEdit}>
                                    <Switch/>
                                </View>
                            </View>
                            <View style={styles.scheduleBox}>
                                <View>
                                    <Text style={styles.scheduleText}>23:45</Text>
                                    <Text style={styles.scheduleSubText}>Dentista</Text>
                                </View>
                                <View style={styles.switchEdit}>
                                    <Switch/>
                                </View>
                            </View>
                            <View style={styles.scheduleBox}>
                                <View>
                                    <Text style={styles.scheduleText}>19:20</Text>
                                    <Text style={styles.scheduleSubText}>Ortopedista</Text>
                                </View>
                                <View style={styles.switchEdit}>
                                    <Switch/>
                                </View>
                            </View>
                            <View style={styles.scheduleBox}>
                                <View>
                                    <Text style={styles.scheduleText}>09:12</Text>
                                    <Text style={styles.scheduleSubText}>Quiropraxia</Text>
                                </View>
                                <View style={styles.switchEdit}>
                                    <Switch/>
                                </View>
                            </View>
                            <View style={styles.scheduleBox}>
                                <View>
                                    <Text style={styles.scheduleText}>06:00</Text>
                                    <Text style={styles.scheduleSubText}>Cirurgia</Text>
                                </View>
                                <View style={styles.switchEdit}>
                                    <Switch/>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>

                <View style={styles.footerContainer}>
                    <View style={styles.boxBtn}>
                        <TouchableOpacity style={styles.btnSchedule}>
                            <Text style={styles.footerScheduleText}>Criar Agenda</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boxBtn}>
                        <TouchableOpacity style={styles.btnSchedule}>
                            <Text style={styles.footerScheduleText}>Remover Agenda</Text>
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
    scheduleContainerHeader: {
        marginTop: 40,
    },
    scheduleTextHeader: {
        color: '#000',
        fontSize: 48,
        fontFamily: 'koho-bold',
    },
    scheduleContainer: {
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
    scheduleBox: {
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
    scheduleText: {
        color: '#000',
        fontSize: 22,
        fontFamily: 'koho-bold',
    },
    scheduleSubText: {
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
    btnSchedule: {
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
    footerScheduleText: {
        fontFamily: 'koho-bold',
    },
    boxBtn:{
        margin: 5,
        marginTop: 0,
        marginBottom: 0,
    },
});