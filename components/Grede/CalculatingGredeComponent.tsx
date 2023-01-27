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
  const {
    length,
    width,
    setWidth,
    setLength,
    calculate,
    reset,
    isponaWidth,
    setIsponaWidth,
    spaceBetIspona,
    setSpaceBetIspona,
    lengthBoughtPipe,
    setLengthBoughtPipe,
  } = useGredeContext();
  return (
    <KeyboardAvoidContainer>
      <Header title={"parametri grede"} imageSrc={requireValue} />
      <View style={styles.row}>
        <InputCell
          value={length}
          setValue={setLength}
          label={"Dužina grede [cm]"}
        />
        <InputCell
          value={width}
          setValue={setWidth}
          label={"Širina grede [cm]"}
        />
      </View>
      <View style={styles.row}>
        <InputCell
          value={isponaWidth}
          setValue={setIsponaWidth}
          label={"Debljina ispune [cm]"}
        />
        <InputCell
          value={spaceBetIspona}
          setValue={setSpaceBetIspona}
          label={"Razmak između ispuna [cm]"}
        />
      </View>
      <View style={styles.row}>
        <InputCell
          value={lengthBoughtPipe}
          setValue={setLengthBoughtPipe}
          label={"Dužina kupljene cevi [cm]"}
        />
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
