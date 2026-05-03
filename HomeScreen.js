  import React, { useRef } from "react";
import {
  Text,
  TouchableOpacity,
  Animated,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GlobalStyles from "../styles/GlobalStyles";

export default function HomeScreen({ navigation }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const animateButton = (callback) => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (callback) callback();
    });
  };

  const buttons = [
    { title: "Profile", screen: "Profile", icon: "person-circle" },
    { title: "Settings", screen: "Settings", icon: "settings" },
    { title: "Contact", screen: "Contact", icon: "mail" },
  ];

  return (
    <ImageBackground
      source={require("../assets/iram.jpg")}
      style={GlobalStyles.backgroundImage}
    >
      {/* Wrap all children */}
      <View style={{ flex: 1 }}>
        <View style={GlobalStyles.overlay} />

        <View style={GlobalStyles.container}>
          <Text style={GlobalStyles.title}>Student App</Text>

          <View style={styles.gridContainer}>
            {buttons.map((btn, index) => (
              <Animated.View
                key={index}
                style={{ transform: [{ scale: scaleAnim }], margin: 10 }}
              >
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[
                    GlobalStyles.gridButton,
                    styles.buttonShadow,
                    styles.buttonGradient,
                  ]}
                  onPress={() =>
                    animateButton(() => navigation.navigate(btn.screen))
                  }
                >
                  <View>
                    <Ionicons
                      name={btn.icon || "alert"} // fallback icon
                      size={36}
                      color="#fff"
                      style={{ marginBottom: 10 }}
                    />
                  </View>
                  <Text style={GlobalStyles.buttonText}>{btn.title || ""}</Text>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%",
    marginTop: 20,
  },
  buttonShadow: {
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonGradient: {
    backgroundColor: "#4F46E5",
    borderRadius: 15,
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
});
