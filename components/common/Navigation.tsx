import { Pressable, StyleSheet, Text, View } from "react-native";
import { SelectedCalculator } from "../AppScreen";

interface Props {
  selectedCalculator: SelectedCalculator;
  setSelectedCalculator: (value: SelectedCalculator) => void;
}
export const Navigation = ({
  selectedCalculator,
  setSelectedCalculator,
}: Props) => {
  return (
    <View style={styles.navButtons}>
      <Pressable
        onPress={() => setSelectedCalculator("binderi")}
        style={[
          selectedCalculator === "binderi"
            ? styles.activeButton
            : styles.inactiveButton,
          styles.navButton,
        ]}
        disabled={selectedCalculator === "binderi"}
      >
        <Text
          style={
            selectedCalculator === "binderi" ? {} : styles.inactiveButtonText
          }
        >
          Binderi
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setSelectedCalculator("grede")}
        disabled={selectedCalculator === "grede"}
        style={[
          selectedCalculator === "grede"
            ? styles.activeButton
            : styles.inactiveButton,
          styles.navButton,
        ]}
      >
        <Text
          style={
            selectedCalculator === "grede" ? {} : styles.inactiveButtonText
          }
        >
          Grede
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  inactiveButton: {
    backgroundColor: "#090c1c",
  },
  inactiveButtonText: {
    color: "#ffffff",
  },
});
