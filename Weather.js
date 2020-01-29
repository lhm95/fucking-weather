import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clouds: {
    iconName: "cloud",
    gradient: ["#bbb", "#333"]
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#3f2b96", "#a8c0ff"]
  },
  Drizzle: {
    iconName: "",
    gradient: ["", ""]
  },
  Rain: {
    iconName: "",
    gradient: ["", ""]
  },
  Snow: {
    iconName: "",
    gradient: ["", ""]
  },
  Atmosphere: {
    iconName: "",
    gradient: ["", ""]
  },
  Clear: {
    iconName: "",
    gradient: ["", ""]
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <View style={styles.harContainer}>
        <StatusBar barStyle="light-content" />
        <MaterialCommunityIcons
          size={92}
          color="#fff"
          name={weatherOptions[condition].iconName}
        />
        <Text style={styles.font}>{temp} ᵒ</Text>
      </View>
      <View style={styles.harContainer}></View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  harContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  font: {
    fontSize: 42,
    color: "#fff"
  }
});
