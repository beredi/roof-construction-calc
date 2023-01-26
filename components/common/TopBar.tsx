import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

interface Props {
  setHelpActive: () => void;
}
export const TopBar = ({ setHelpActive }: Props) => {
  return (
    <View style={styles.topBar}>
      <Text style={styles.topBarText}>Kalkukator konstrukcije krova</Text>
      <Feather
        name="help-circle"
        size={24}
        color="white"
        onPress={setHelpActive}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    paddingHorizontal: 10,
    backgroundColor: "#130a36",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topBarText: {
    color: "#ffffff",
    fontSize: 17,
    paddingVertical: 10,
    textTransform: "uppercase",
  },
});
