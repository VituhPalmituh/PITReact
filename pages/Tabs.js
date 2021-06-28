import { StatusBar } from 'expo-status-bar';
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

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Alarm from './Alarm';
import Schedule from './Schedule';
import { Ionicons } from '@expo/vector-icons';
import Login from './Login';

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 1,
                    height: 65,
                    backgroundColor: '#ffe3e0',
                },
                labelStyle: {
                    fontSize: 18,
                    marginBottom: 5,
                    fontFamily: 'koho-bold',
                },
                inactiveTintColor: '#a9a9a9',
                activeTintColor: '#000',
            }}
            screenOptions={({ route, navigation }) => ({
                drawerIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Menu')
                        iconName = 'md-home';
                    else if (route.name === 'Alarme')
                        iconName = 'md-alarm-outline';
                    else if (route.name === 'Agenda')
                        iconName = 'md-calendar-sharp'
                    else if (route.name === 'Logout')
                        iconName = 'md-exit-outline'

                    const onPress = () => {
                        if (!focused)
                            navigation.navigate(route.name);
                    }


                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityStates={focused ? ["selected"] : []}
                            onPress={onPress}
                        >
                            <Ionicons name={iconName} color={color} size={size} />
                        </TouchableOpacity>
                    )
                }
            })}>
            <Drawer.Screen name="Menu" component={Home} />
            <Drawer.Screen name="Alarme" component={Alarm} />
            <Drawer.Screen name="Agenda" component={Schedule} />
            <Drawer.Screen name="Logout" component={Login} />

        </Drawer.Navigator>
    );
}


export default function Tabs() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}