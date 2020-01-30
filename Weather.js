import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clouds: {
    iconName: "cloud",
    gradient: ["#bbb", "#333"],
    title: "흐림 (Clouds)",
    subtitle: "오늘은 날씨가 흐립니다.\n날씨와 반대로 즐거운 하루 보내세요."
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#3f2b96", "#a8c0ff"],
    title: "천둥번개 (Thunderstorm)",
    subtitle: "오늘은 천둥번개가 칩니다.\n안전한 하루 보내세요."
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#7F7FD5", "#86A8E7"],
    title: "이슬비 (Drizzle)",
    subtitle: "오늘은 이슬비가 내립니다.\n촉촉한 하루 보내세요."
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#F0F2F0", "#000C40"],
    title: "비 (Rain)",
    subtitle: "오늘은 비가 내립니다.\n우산을 꼭 챙기세요."
  },
  Snow: {
    iconName: "weather-hail",
    gradient: ["#eef2f3", "#8e9eab"],
    title: "눈 (Snow)",
    subtitle: "오늘은 눈이 내립니다.\n신나는 하루 보내세요."
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#00d2ff", "#3a7bd5"],
    title: "맑음 (Clear)",
    subtitle: "오늘의 날씨는 맑습니다.\n좋은 하루 보내세요."
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <View style={styles.halfContainer}>
        <StatusBar barStyle="light-content" />
        <MaterialCommunityIcons
          size={92}
          color="#fff"
          name={weatherOptions[condition].iconName}
        />
        <Text style={styles.font}>{temp} ᵒ</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subTitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
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
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  font: {
    fontSize: 42,
    color: "#fff"
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 15
  },
  subTitle: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 23
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
});
