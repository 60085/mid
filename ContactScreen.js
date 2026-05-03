import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GlobalStyles from "../styles/GlobalStyles";
import { ImageBackground } from "react-native";

export default function ContactScreen() {
  const [email, setEmail] = useState("");

  return (
    <ImageBackground
      source={require("../assets/iram.jpg")}
      style={GlobalStyles.backgroundImage}
    >
      <View style={{ flex: 1 }}>
        <View style={GlobalStyles.overlay} />

        <View style={GlobalStyles.container}>
          <View>
            <Ionicons
              name="mail"
              size={40}
              color="#4B5563"
              style={{ marginBottom: 20 }}
            />
          </View>

          <TextInput
            placeholder="Enter Email"
            style={GlobalStyles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <TouchableOpacity
            style={GlobalStyles.button}
            onPress={() => Alert.alert("Submitted!", email || "")}
          >
            <Text style={GlobalStyles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
