import React, { useState, useEffect } from 'react';
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
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';

export default function Login({ navigation }) {
    const login = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Tabs"}]
          })
    }
    return (
        <View style={styles.background}>
            <ImageBackground style={styles.backgroundImage} source={require('../assets/background-login.jpg')}>
                <KeyboardAvoidingView>
                    <View style={styles.containerLogo}>
                        <Image
                            source={require('../assets/logo-branco-menor.png')}
                        />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.loginText}>Logue em sua conta</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Usuario"
                            autoCorrect={false}
                            onChangeText={() => { }}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            autoCorrect={false}
                            onChangeText={() => { }}
                        />

                        <TouchableOpacity onPress={() => login()} style={styles.btnSubmit}>
                            <Text style={styles.submitText}>Logar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnRegister}>
                            <Text style={styles.registerText}>Cadastre uma conta</Text>
                        </TouchableOpacity>

                        <Text style={styles.copyright}>Aplicação desenvolvida por Vitor e Gustavo</Text>
                    </View>
                </KeyboardAvoidingView>
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
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        color: '#000',
        fontSize: 24,
        marginBottom: 20,
        fontFamily: 'koho-bold',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 140,
    },
    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 6,
        color: '#222',
        fontSize: 16,
        fontFamily: 'koho-bold',
        borderRadius: 7,
        padding: 10,
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: 2,
    },
    btnSubmit: {
        backgroundColor: '#FFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: 2,
    },
    btnRegister: {
        marginTop: 10,
    },
    submitText: {
        color: '#000',
        fontSize: 24,
        fontFamily: 'koho-bold',
    },
    registerText: {
        color: '#000',
        fontSize: 12,
        fontFamily: 'koho-bold',
    },
    copyright: {
        fontSize: 12,
        marginTop: 90,
        fontFamily: 'koho-bold',
    },
});