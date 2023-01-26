import { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { CalculatingBinderiComponent } from "./Binderi/CalculatingBinderiComponent";
import { Navigation } from "./common/Navigation";
import { CalculatingGredeComponent } from "./Grede/CalculatingGredeComponent";
import { TopBar } from "./common/TopBar";
import { HelpView } from "./HelpView";

export type SelectedCalculator = "binderi" | "grede";
export default function AppScreen() {
  const [helpActive, setHelpActive] = useState<boolean>(false);
  const [selectedCalculator, setSelectedCalculator] =
    useState<SelectedCalculator>("binderi");
  const renderScreen = () => {
    switch (selectedCalculator) {
      case "binderi":
        return <CalculatingBinderiComponent />;
      case "grede":
        return <CalculatingGredeComponent />;
    }
  };
  return helpActive ? (
    <HelpView closeHelp={() => setHelpActive(false)} />
  ) : (
    <SafeAreaView style={styles.container}>
      <TopBar setHelpActive={() => setHelpActive(true)} />
      <Navigation
        selectedCalculator={selectedCalculator}
        setSelectedCalculator={setSelectedCalculator}
      />
      <View style={styles.body}>{selectedCalculator && renderScreen()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },
  body: {
    paddingHorizontal: 10,
    flex: 1,
  },
});
