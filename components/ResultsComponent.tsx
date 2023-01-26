import { StyleSheet, Text, View } from "react-native";
import { useBinderiContext } from "../hooks/useValuesContext";

export const ResultsComponent = () => {
  const { hypotenuse, calcSpace, otherValues, thinPipes, boldPipes } =
    useBinderiContext();
  return (
    <View style={styles.container}>
      <Text>Rezultati:</Text>
      <View style={styles.row}>
        <View style={styles.row}>
          <Text>Prepona: </Text>
          <Text style={styles.bold}>{hypotenuse} cm</Text>
        </View>
        <View style={styles.row}>
          <Text>Izračunat razmak: </Text>
          <Text style={styles.bold}>{calcSpace} cm</Text>
        </View>
      </View>

      {otherValues && (
        <View style={styles.row}>
          <View>
            {Object.entries(otherValues).map(([key, value]) => {
              if (key.includes("a")) {
                return (
                  <View style={styles.row} key={key}>
                    <Text key={key}>{key}: </Text>
                    <Text style={styles.bold}>{value} cm</Text>
                  </View>
                );
              }
            })}
          </View>
          <View>
            {Object.entries(otherValues).map(([key, value]) => {
              if (key.includes("b")) {
                return (
                  <View style={styles.row} key={key}>
                    <Text key={key}>{key}: </Text>
                    <Text style={styles.bold}>{value} cm</Text>
                  </View>
                );
              }
            })}
          </View>
        </View>
      )}

      <View
        style={[styles.row, { justifyContent: "flex-start", marginTop: 20 }]}
      >
        <Text>Ukupno noseće cevi: </Text>
        <Text style={styles.bold}>{boldPipes} cm</Text>
      </View>
      <View style={[styles.row, { justifyContent: "flex-start" }]}>
        <Text>Ukupno tanje cevi: </Text>
        <Text style={styles.bold}>{thinPipes} cm</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bold: { fontWeight: "bold" },
  row: { flexDirection: "row", justifyContent: "space-around" },
});
