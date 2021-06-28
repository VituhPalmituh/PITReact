import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
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
import Tabs from './pages/Tabs';
import Login from './pages/Login';
import Home from './pages/Home';
import Alarm from './pages/Alarm';
import Schedule from './pages/Schedule';
import * as Font from 'expo-font';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const fetchFonts = () => {
        return Font.loadAsync({
            'koho-bold': require('./assets/fonts/KoHo-Bold.ttf')
        });
    }

    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        fetchFonts().then(() => setFontsLoaded(true));
    }, []);
    return fontsLoaded && (         
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        </Stack.Navigator>
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
    },
    registerText: {
        color: '#000',
        fontSize: 12,
    },
    copyright: {
        fontSize: 12,
        marginTop: 90,
    },
});