import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import { ImageBackground } from "react-native";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ImageBackground
      source={require("../assets/iram.jpg")}
      style={GlobalStyles.backgroundImage}
    >
      <View style={{ flex: 1 }}>
        <View style={GlobalStyles.overlay} />

        <View style={GlobalStyles.container}>
          <View
            style={[
              styles.card,
              { backgroundColor: darkMode ? "#1F2937" : "#FFFFFF" },
            ]}
          >
            <Text
              style={{
                color: darkMode ? "white" : "black",
                fontFamily: "Poppins-Bold",
                fontSize: 18,
                marginBottom: 15,
              }}
            >
              Dark Mode
            </Text>

            <Switch value={darkMode} onValueChange={setDarkMode} />

            <Text
              style={{
                marginTop: 15,
                color: darkMode ? "#D1D5DB" : "#4B5563",
                fontFamily: "Poppins-Regular",
              }}
            >
              {darkMode ? "Dark Mode Enabled 🌙" : "Light Mode Enabled ☀"}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    elevation: 8,
  },
});
