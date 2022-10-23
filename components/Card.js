import { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import sendMusicIcon from "../assets/sendMusic.png";

const Card = (props) => {

  return(
    <TouchableOpacity>
      <View style={styles.cardContainer}>
        <View style={styles.imagesWrapper}>
          <Image style={styles.cardImage} source={props.image}></Image>
          <View style={styles.percentageContainer}>
            <Text style={styles.percentageText}>{props.percentage}%</Text>
          </View>
        </View>
        <Text style={styles.cardName}>{props.name}</Text>
        <TouchableOpacity style={styles.musicIconWrapper}>
          <View>
            <Image style={styles.sendMusicIcon} source={sendMusicIcon}></Image>
          </View>
        </TouchableOpacity>

      </View>
    </TouchableOpacity>

  )

}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "white",
    zIndex: 1000,
    marginTop: "5%",
    borderRadius: 20,
    padding: 10
  },

  baseText: {
    fontSize: 10
  },
  cardImage: {
    width: 75,
    height: 75,
    borderRadius: 35
  },
  imagesWrapper: {
    position: "relative",
  },
  cardName: {
    fontSize: 24,
    marginLeft: 20
  },
  percentageContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    right: "2%",
    top: "65%",
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#c0f4cc",
    zIndex: 100,
  },
  percentageText: {
    fontSize: 10,
    fontWeight: "bold"
  }, sendMusicIcon: {
    width: 40,
    height: 40,
    marginLeft: "auto"
  }, musicIconWrapper: {
    marginLeft: "auto"
  }
});

export default Card;