import { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { CalculatingBinderiComponent } from "./CalculatingBinderiComponent";
import { Navigation } from "./common/Navigation";

export type SelectedCalculator = "binderi" | "grede";
export default function AppScreen() {
  const [selectedCalculator, setSelectedCalculator] =
    useState<SelectedCalculator>("binderi");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Kalkukator konstrukcije krova</Text>
      </View>
      <Navigation
        selectedCalculator={selectedCalculator}
        setSelectedCalculator={setSelectedCalculator}
      />
      <View style={styles.body}>
        {selectedCalculator === "binderi" && <CalculatingBinderiComponent />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },
  canvas: {
    flex: 1,
  },
  body: {
    paddingHorizontal: 10,
    flex: 1,
  },
  topBar: {
    paddingHorizontal: 10,
    backgroundColor: "#130a36",
  },
  topBarText: {
    color: "#ffffff",
    fontSize: 17,
    paddingVertical: 10,
    textTransform: "uppercase",
  },
  navButtons: {
    flexDirection: "row",
    width: "100%",
  },
  navButton: {
    width: "50%",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "#ffffff",
    borderLeftColor: "#bdff9c",
    borderLeftWidth: 3,
    borderRightColor: "#bdff9c",
    borderRightWidth: 3,
    borderTopColor: "#bdff9c",
    borderTopWidth: 3,
  },
  inactiveButton: {
    backgroundColor: "#090c1c",
  },
  inactiveButtonText: {
    color: "#ffffff",
  },
});
