import { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, AsyncStorage, TouchableOpacity } from "react-native";
import logo from "../assets/logo.png";
import { useNavigation } from '@react-navigation/native';

const PreHome = () => {

  const navigation = useNavigation();

  useEffect(() => {

    async function getToken () {
      const token = await AsyncStorage.getItem("spotify_token");
      if (token) {
          navigation.navigate("TabsView");
      }

    }

    getToken();

  }, []);


  const handleLogin = () => {
    navigation.navigate("Login");
  }

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  }

  return(
    <View style={styles.container}>
      <Image style={styles.logoImage} source={logo}></Image>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <View>
          <Text style={styles.buttonText}>Log In</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <View>
          <Text style={styles.buttonText}>Sign Up</Text>
        </View>
      </TouchableOpacity>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: 'white',
    flexDirection: "column",
    alignItems: 'center',
  },
  logoImage: {
    marginTop: "35%",
    width: 300,
    height: 260,
    zIndex: 200
  },
  button: {
    marginTop: "5%",
    width: "70%",
    height: 100,
    backgroundColor: "#c0f4cc",
    borderRadius: 45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold"
  }

});

export default PreHome;