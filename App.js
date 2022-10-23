import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { StyleSheet, Text } from 'react-native';
import { View, KeyboardAvoidingView } from "react-native";
import Spotify from './Spotify';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
=======
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LogBox } from 'react-native';

import { db } from './firebaseConfig';
import Home from './screens/Home';
import * as Location from 'expo-location';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LogBox } from 'react-native';
import Profile from './screens/Profile';
import Connect from './screens/Connect';

const Tab = createMaterialTopTabNavigator();
>>>>>>> main

export default function App() {

  LogBox.ignoreLogs(['Sending']);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getLastKnownPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator>
        <Stack.Screen name="spotify" component={Spotify}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

=======
      <Tab.Navigator initialRouteName='HomeScreen' tabBarPosition='bottom' screenOptions={{swipeEnabled: true, tabBarStyle: {height: "7%"}, tabBarIndicatorStyle: {display: "none"}, animationEnabled: false}}>
            <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
            <Tab.Screen name="HomeScreen" component={Home} options={{gestureEnabled: true}}></Tab.Screen>
            <Tab.Screen name="Connect" component={Connect}></Tab.Screen>
        </Tab.Navigator>
    </NavigationContainer>
>>>>>>> main
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontSize: 10

  }
});
