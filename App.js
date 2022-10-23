import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { db } from './firebaseConfig';
import Home from './screens/Home';
import * as Location from 'expo-location';
import { LogBox } from 'react-native';
import Profile from './screens/Profile';
import Connect from './screens/Connect';
import Spotify from './screens/Spotify';
import { Provider } from 'react-redux';
import store from './redux/store';
import PreHome from './screens/PreHome';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


const TabsView = () => {

  return(
      <Tab.Navigator initialRouteName='HomeScreen' tabBarPosition='bottom' screenOptions={{swipeEnabled: true, tabBarStyle: {height: "7%"}, tabBarIndicatorStyle: {display: "none"}, animationEnabled: false}}>
        <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
        <Tab.Screen name="HomeScreen" component={Home} options={{gestureEnabled: true}}></Tab.Screen>
        <Tab.Screen name="Connect" component={Connect}></Tab.Screen>
        <Tab.Screen name="Spotify" component={Spotify}></Tab.Screen>
    </Tab.Navigator>
  );
}

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
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator  initialRouteName='PreHome' tabBarPosition='bottom' screenOptions={{headerShown: false, swipeEnabled: true, tabBarStyle: {height: "7%"}, tabBarIndicatorStyle: {display: "none"}, animationEnabled: false}}>
              <Tab.Screen name="PreHome" component={PreHome}></Tab.Screen>
              <Tab.Screen name="TabsView" component={TabsView} options={{gestureEnabled: true}}></Tab.Screen>
              <Tab.Screen name="Login" component={LoginScreen}></Tab.Screen>
              <Tab.Screen name="SignUp" component={SignUpScreen}></Tab.Screen>
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
