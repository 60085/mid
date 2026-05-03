import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const GlobalStyles = StyleSheet.create({
  // Main container for all screens
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor removed, background handled by ImageBackground
  },

  // Background image covering full screen
  backgroundImage: {
    width,
    height,
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    left: 0,
  },

  // Overlay on background image for readability
  overlay: {
    position: "absolute",
    width,
    height,
    backgroundColor: "rgba(0,0,0,0.3)", // dark semi-transparent overlay
  },

  // Screen title
  title: {
    fontSize: 30,
    fontFamily: "Poppins-Bold",
    color: "#fff", // white over background
    marginBottom: 30,
    textAlign: "center",
  },

  // TextInput style
  input: {
    width: "100%",
    backgroundColor: "#F3F4F6",
    padding: 14,
    borderRadius: 12,
    marginVertical: 10,
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#111827",
  },

  // Default button style
  button: {
    width: "85%",
    padding: 14,
    borderRadius: 15,
    alignItems: "center",
    marginVertical: 10,
    elevation: 5,
    justifyContent: "center",
    backgroundColor: "#4B5563", // consistent purple
  },

  // Text inside buttons
  buttonText: {
    color: "white",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },

  // Grid button for HomeScreen cards
  gridButton: {
    width: 120,
    height: 120,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    margin: 10,
    backgroundColor: "#4B5563",
  },

  // Container for grid layout (HomeScreen)
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%",
  },

  // Card style for Profile / Settings screens
  card: {
    width: "90%",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    elevation: 8,
    backgroundColor: "rgba(255,255,255,0.9)", // slightly transparent card
  },

  // Fade animation placeholder
  fadeContainer: {
    opacity: 0,
  },

  // Scale animation placeholder
  scaleAnim: {
    transform: [{ scale: 1 }],
  },

  // Text style inside card
  cardText: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#111827",
    textAlign: "center",
  },
});

export default GlobalStyles;
