import { useState, useEffect } from "react";

import { Text, View, Image, Button, TouchableOpacity, ScrollView} from "react-native";
import { StyleSheet} from 'react-native';
import profPic from '../assets/person.png'
import Card from "../components/Card";


const Profile = () => {

  const dummyVals = [1,2,3,4,5,6,7,8];

  const renderConnects = () => {
    return dummyVals.map(person =>
        <Card name={"Person"} image={profPic}></Card>
      )
  }

  return(


    <View style = {styles.container}>
      <Text style = {styles.label}>Profile</Text>
      <View>
        <Image source={profPic} style = {styles.picture}/>
      </View>

      <Text style = {styles.username}>@person1</Text>
      <Text style = {styles.location}>Person 1</Text>
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

      <View style = {styles.info}>
       <ScrollView style={styles.scrollView}>

          {renderConnects()}

        </ScrollView>


      </View>



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
    info: {
      flex:0.84,
      flexDirection: 'row',
      width: '90%',
      backgroundColor: '#c0f4cc',
      borderRadius: 20,
      marginTop : '5%',
      alignItems: 'center',
      justifyContent: 'center',

    },
    scrollView: {
      width: "95%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#c0f4cc",
      marginTop: "5%"
    }

  });
