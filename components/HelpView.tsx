import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
  closeHelp: () => void;
}

export const HelpView = ({ closeHelp }: Props) => {
  return (
    <Pressable style={styles.container} onPress={closeHelp}>
      <Text style={styles.bold}>Kalkulator konstrukcije krova</Text>
      <Text>Developed by Jaroslav Beredi</Text>
      <Text>2023</Text>
      <Text style={styles.muted}>Pritisni bilo gde da bi zatvorio prozor</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 20,
  },
  muted: {
    textTransform: "uppercase",
    color: "#9f9f9f",
    marginTop: 20,
    fontSize: 10,
    borderWidth: 1,
    borderColor: "#9f9f9f",
    padding: 20,
  },
});
