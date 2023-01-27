import { StyleSheet, Text, View } from "react-native";
import { useBinderiContext } from "../../hooks/useValuesContext";
import Ionicons from "@expo/vector-icons/Ionicons";

export const ResultsBinderiComponent = () => {
  const {
    hypotenuse,
    calcSpace,
    otherValues,
    thinPipes,
    boldPipes,
    lengthBoughtPipe,
    countBoldPipesToBuy,
    countThinPipesToBuy,
    countBinders,
  } = useBinderiContext();
  return (
    <View style={styles.container}>
      <View style={[styles.row, { alignItems: "center" }]}>
        <Ionicons name="md-checkmark-circle" size={20} color="green" />
        <Text style={[styles.bold, styles.head]}>REZULTATI</Text>
      </View>
      <View style={styles.row}>
        <View style={[styles.row, styles.half]}>
          <Text>Prepona: </Text>
          <Text style={styles.bold}>{hypotenuse} cm</Text>
        </View>
        <View style={[styles.row, styles.half]}>
          <Text>Izračunat razmak: </Text>
          <Text style={styles.bold}>{calcSpace} cm</Text>
        </View>
      </View>

      {otherValues && (
        <View style={styles.row}>
          <View style={styles.half}>
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
          <View style={styles.half}>
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

      <View style={{ marginTop: 20 }}>
        <Text style={{ textDecorationLine: "underline" }}>Za 1 binder:</Text>
      </View>
      <View style={styles.row}>
        <Text>Ukupno dužina cevi za osnovu: </Text>
        <Text style={styles.bold}>{boldPipes} cm</Text>
      </View>
      <View style={[styles.row, { justifyContent: "flex-start" }]}>
        <Text>Ukupno dužina cevi za ispune: </Text>
        <Text style={styles.bold}>{thinPipes} cm</Text>
      </View>
      <View style={styles.row}>
        <Text>Broj cevi za osnovu od {lengthBoughtPipe}cm: </Text>
        <Text style={styles.bold}>{countBoldPipesToBuy} komada</Text>
      </View>
      <View style={styles.row}>
        <Text>Broj cevi za ispune od {lengthBoughtPipe}cm: </Text>
        <Text style={styles.bold}>{countThinPipesToBuy} komada</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ textDecorationLine: "underline" }}>
          Za {countBinders} bindera:
        </Text>
      </View>
      <View style={styles.row}>
        <Text>Ukupno dužina cevi za osnovu za {countBinders} bindera: </Text>
        <Text style={styles.bold}>{boldPipes * countBinders} cm</Text>
      </View>
      <View style={[styles.row, { justifyContent: "flex-start" }]}>
        <Text>Ukupno dužina cevi za ispune za {countBinders} bindera: </Text>
        <Text style={styles.bold}>{thinPipes * countBinders} cm</Text>
      </View>
      <View style={styles.row}>
        <Text>Broj cevi za osnovu od {lengthBoughtPipe}cm: </Text>
        <Text style={styles.bold}>
          {Math.ceil((boldPipes * countBinders) / lengthBoughtPipe)} komada
        </Text>
      </View>
      <View style={styles.row}>
        <Text>Broj cevi za ispune od {lengthBoughtPipe}cm: </Text>
        <Text style={styles.bold}>
          {Math.ceil((thinPipes * countBinders) / lengthBoughtPipe)} komada
        </Text>
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
