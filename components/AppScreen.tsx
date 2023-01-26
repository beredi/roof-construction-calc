import { useState } from "react";
import { CanvasComponent } from "./CanvasComponent";
import { Button, StyleSheet, View, Text, SafeAreaView } from "react-native";
import { CalculatingComponent } from "./CalculatingComponent";

export default function AppScreen() {
  const [showCanvas, setShowCanvas] = useState<boolean>(false);
  return showCanvas ? (
    <CanvasComponent onClickHide={() => setShowCanvas(false)} />
  ) : (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Kalkukator konstrukcije krova</Text>
      </View>
      <View style={styles.body}>
        <CalculatingComponent showCanvas={() => setShowCanvas(true)} />
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
});
