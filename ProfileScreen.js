import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, Image, Animated } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import { ImageBackground } from "react-native";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ImageBackground
      source={require("../assets/iram.jpg")}
      style={GlobalStyles.backgroundImage}
    >
      <View style={{ flex: 1 }}>
        <View style={GlobalStyles.overlay} />

        <Animated.View style={[GlobalStyles.container, { opacity: fadeAnim }]}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
            style={{
              width: 130,
              height: 130,
              borderRadius: 65,
              marginBottom: 20,
            }}
          />

          <TextInput
            placeholder="Enter Name"
            style={GlobalStyles.input}
            value={name}
            onChangeText={setName}
          />

          <TextInput
            placeholder="Enter Age"
            style={GlobalStyles.input}
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />

          <Text
            style={{
              fontFamily: "Poppins-Regular",
              color: "#fff",
              marginTop: 10,
              fontSize: 16,
              textAlign: "center",
            }}
          >
            {`${name || ""} ${age || ""}`}
          </Text>
        </Animated.View>
      </View>
    </ImageBackground>
  );
}
