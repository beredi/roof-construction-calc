import { StyleSheet, Text, View } from "react-native";
import { useGredeContext } from "../../hooks/useGredeContext";
import Ionicons from "@expo/vector-icons/Ionicons";

export const ResultsGredeComponent = () => {
  const {
    isponaLength,
    pipesLength,
    count,
    widthCutIspona,
    lengthBoughtPipe,
    countOfOneBoughtPipe,
    countPipesToBuy,
  } = useGredeContext();
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
        <Text>Broj celih ispuna: </Text>
        <Text style={styles.bold}>{count} komada</Text>
      </View>
      <View style={styles.row}>
        <Text>Ukupna dužina cevi za cele ispune: </Text>
        <Text style={styles.bold}>{pipesLength} cm</Text>
      </View>
      <View style={styles.row}>
        <Text>Debljina srezane ispune: </Text>
        <Text style={styles.bold}>{widthCutIspona} cm</Text>
      </View>
      <View style={styles.row}>
        <Text>Broj ispuna iz jedne {lengthBoughtPipe}cm cevi: </Text>
        <Text style={styles.bold}>{countOfOneBoughtPipe} komada</Text>
      </View>
      <View style={styles.row}>
        <Text>Broj cevi od {lengthBoughtPipe}cm za kupovinu: </Text>
        <Text style={styles.bold}>{countPipesToBuy} komada</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  bold: { fontWeight: "bold" },
  row: { flexDirection: "row", justifyContent: "flex-start" },
  half: { width: "40%" },
  head: { paddingVertical: 10 },
});
