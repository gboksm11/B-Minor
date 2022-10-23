import { useState, useEffect } from "react";

import { Text, View, Image, Button, TouchableOpacity } from "react-native";
import { StyleSheet} from 'react-native';
import profPic from '../assets/tate.png'


const Profile = () => {

  return(

    
    <View style = {styles.container}>
      <Text style = {styles.label}>Profile</Text>
      <View>
        <Image source={profPic} style = {styles.picture}/>
      </View>

      <Text style = {styles.username}>@SalehMajed</Text>
      <Text style = {styles.location}>Beyt al sheikha Mody</Text>
      <View style = {styles.line}></View>
      <View style = {styles.bContainer}>

      <TouchableOpacity>
        <Text style = {styles.Button}>Likes</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style = {styles.Button}>Playlists</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style = {styles.Button}>History</Text>
      </TouchableOpacity>
      </View>

      <View style = {styles.line}></View>
      
        
      
    </View>
  )

}

export default Profile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c0f4cc',
      flexDirection: "column",
      alignItems: 'center',
    },
    baseText: {
      fontSize: 10
  
    }, 
    picture: {
        width: 200,
        height: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignSelf: "flex-start",
        marginTop: "5%",
        borderRadius: 50

    },
    label : {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: "6%"
    },
    username : {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: "3%"
    },
    location : {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: "2%"
    },
    bContainer: {
      flex: 0.08,
      width: '100%',
      height: '1%',
      flexDirection: "row",
      justifyContent: 'space-around'

    },
    Button : {
      fontSize: 25,
      fontWeight: 'bold',


    },
    line: {
      flex:0.015,
      flexDirection: 'row',
      width: '90%',
      backgroundColor: '#ffffff',
      borderRadius: 20,
      padding: 1

    },
    line1: {
      flex:0.015,
      flexDirection: 'row',
      width: '90%',
      backgroundColor: '#ffffff',
      borderRadius: 20,
      padding: 1

    }

  });
