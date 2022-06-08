import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Dashboard() {
  return (
    <View style={styles.Container}>
      <Text>Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
