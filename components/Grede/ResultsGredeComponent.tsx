import { StyleSheet, Text, View } from "react-native";
import { useGredeContext } from "../../hooks/useGredeContext";
import Ionicons from "@expo/vector-icons/Ionicons";

export const ResultsGredeComponent = () => {
  const { isponaLength, spaceX, pipesLength, count } = useGredeContext();
  return (
    <View style={styles.container}>
      <View style={[styles.row, { alignItems: "center" }]}>
        <Ionicons name="md-checkmark-circle" size={20} color="green" />
        <Text style={[styles.bold, styles.head]}>REZULTATI</Text>
      </View>
      <View style={styles.row}>
        <Text>Dužina ispune: </Text>
        <Text style={styles.bold}>{isponaLength} cm</Text>
      </View>
      <View style={styles.row}>
        <Text>Izračunat razmak: </Text>
        <Text style={styles.bold}>{spaceX} cm</Text>
      </View>
      <View style={styles.row}>
        <Text>Broj celih ispuna: </Text>
        <Text style={styles.bold}>{count} komada</Text>
      </View>
      <View style={styles.row}>
        <Text>Ukupna dužina cevi za cele ispune: </Text>
        <Text style={styles.bold}>{pipesLength} cm</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bold: { fontWeight: "bold" },
  row: { flexDirection: "row", justifyContent: "flex-start" },
  half: { width: "40%" },
  head: { paddingVertical: 10 },
});
