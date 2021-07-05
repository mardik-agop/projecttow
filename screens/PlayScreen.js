import React from "react";
import { View, StyleSheet } from "react-native";
import RecordingsList from "../components/RecordingsList";

const PlayScreen = () => {
  return (
    <View style={styles.container}>
      <RecordingsList />
    </View>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#053742",
  },
  text: {
    fontSize: 18,
  },
});
