import { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, FlatList, ScrollView } from "react-native";
import Card from "../components/Card";
import personImage from "../assets/person.png";

const Connect = () => {

  const dummyVals = [1,2,3,4,5,6,7,8];

  const renderConnects = () => {
    return dummyVals.map(person => 
        <Card name={"Person 1"} image={personImage} percentage={24}></Card>
      )
  }

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.connectTitle}>Connect</Text>
      <ScrollView style={styles.scrollView}>

        {renderConnects()}

      </ScrollView>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0f4cc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontSize: 10
  },
  scrollView: {
    width: "95%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#c0f4cc",
    marginTop: "5%"
  },
  connectTitle: {
    fontSize: 48,
    textAlign: "center",
    marginTop: 15
  },
});

export default Connect;
