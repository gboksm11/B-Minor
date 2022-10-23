import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Text, Button } from "react-native";
import { useEffect, useState } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
const discovery = {
  authorizationEndpoint: 
  "https://accounts.spotify.com/authorize",
  tokenEndpoint: 
  "https://accounts.spotify.com/api/token",
};

const Spotify = ({ navigation }) => {

  const [token, setToken] = useState("");
  const [request, response, promptAsync] = 
  useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: "7ea6ddd8fe4d43538ccf0cf2cbd6bb7e",
      scopes: [
        // "user-read-currently-playing",
        // "user-read-recently-played",
        // "user-read-playback-state",
        "user-top-read",
        // "user-modify-playback-state",
        // "streaming",
        // "user-read-email",
        "user-read-private",
      ],
      // In order to follow the "Authorization Code Flow" 
      // to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: "exp://10.18.249.185:19000",
    },
    discovery
  );
  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      setToken(access_token);
    }
  }, [response]);
  useEffect(() => {
    if (token) {
      axios(
        "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=20", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => {
            let tracks = []
          
            for(let i = 0 ; i < 20; i++) {
                tracks.push(response.data.items[i].name)

                
            }
            console.log(tracks)
            console.log("----------------")
        })
        .catch((error) => {
          console.log("error", error.message);
        });

        axios(
            "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=20", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          })
            .then((response) => {
                let artists = []
                let genres = []
                for(let i = 0 ; i < 20; i++) {
                    
                    artists.push(response.data.items[i].name)
                    genres.push(response.data.items[i].genres)
    
                    
                }
                console.log(artists)
                console.log("----------------")
                console.log(genres)
                console.log("----------------")
            })
            .catch((error) => {
              console.log("error", error.message);
            });


      setTimeout(
        () =>
        // rconsole.log("token AHAHHAHA="+token),
        500
      );

      //dispatch(tokenAction.addToken(token));
    }
  });
  return (
    <KeyboardAvoidingView behavior="padding" 
    style={styles.container}>
      <StatusBar style="light" />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "white",
          marginBottom: "20%",
        }}
      >
        top song player
      </Text>
      <Button
        title="Login with Spotify"
        style={styles.button}
        onPress={() => {
          promptAsync();
        }}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};
export default Spotify;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  button: {
    width: 200,
    marginTop: 50,
  },
});