import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Settings, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LogBox } from 'react-native';

import { db } from './firebaseConfig';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Connect from './screens/Connect';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function App() {

  LogBox.ignoreLogs(['Sending']);


  useEffect(() => {

  }, [])

  return (

    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="HomeScreen" component={Home} />
    //     <Stack.Screen name="Profile" component={Profile} />
    //     <Stack.Screen name="Connect" component={Connect}/>
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Tab.Navigator initialRouteName='HomeScreen' tabBarPosition='bottom' screenOptions={{swipeEnabled: true, tabBarStyle: {height: "7%"}, tabBarIndicatorStyle: {display: "none"}, animationEnabled: false}}>
        <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
        <Tab.Screen name="HomeScreen" component={Home} options={{gestureEnabled: true}}></Tab.Screen>
        <Tab.Screen name="Connect" component={Connect}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
