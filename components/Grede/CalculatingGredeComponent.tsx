import { KeyboardAvoidContainer } from "../common/KeyboardAvoidContainer";
import { StyleSheet, View } from "react-native";
import React from "react";
import { Header } from "../common/Header";
import { InputCell } from "../common/InputCell";
import { useGredeContext } from "../../hooks/useGredeContext";
import { CalculateButton } from "../common/CalculateButton";
import { ResultsGredeComponent } from "./ResultsGredeComponent";

export const CalculatingGredeComponent = () => {
  const requireValue = require("../../assets/input-grede-values.jpg");
  const { length, width, setWidth, setLength, calculate, reset } =
    useGredeContext();
  return (
    <KeyboardAvoidContainer>
      <Header title={"parametri grede"} imageSrc={requireValue} />
      <View style={styles.row}>
        <InputCell value={length} setValue={setLength} label={"Dužina [cm]"} />
        <InputCell value={width} setValue={setWidth} label={"Širina [cm]"} />
      </View>
      <CalculateButton title={"Izračunaj"} onPress={calculate} />
      <CalculateButton title={"Resetuj"} onPress={reset} reset={true} />
      <ResultsGredeComponent />
    </KeyboardAvoidContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 30,
  },
  body: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  description: {
    textTransform: "lowercase",
    marginBottom: 20,
  },
  img: {
    width: "90%",
    height: 120,
    marginVertical: 20,
  },
  imageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
