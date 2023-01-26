import { StyleSheet, View } from "react-native";
import { useBinderiContext } from "../../hooks/useValuesContext";
import React from "react";
import { InputCell } from "../common/InputCell";
import { CalculateButton } from "../common/CalculateButton";
import { ResultsBinderiComponent } from "./ResultsBinderiComponent";
import { KeyboardAvoidContainer } from "../common/KeyboardAvoidContainer";
import { Header } from "../common/Header";

export const CalculatingBinderiComponent = () => {
  const {
    height,
    width,
    setHeight,
    setWidth,
    space,
    setSpace,
    calculate,
    resetValues,
  } = useBinderiContext();

  const requireValue = require("../../assets/input-binderi-values.jpg");

  return (
    <KeyboardAvoidContainer>
      <Header title={"parametri krova"} imageSrc={requireValue} />
      <View style={styles.row}>
        <InputCell value={width} setValue={setWidth} label={"Širina [cm]"} />
        <InputCell value={height} setValue={setHeight} label={"Visina [cm]"} />
        <InputCell
          value={space}
          setValue={setSpace}
          label={"Željeni razmak [cm]"}
        />
      </View>
      <CalculateButton title={"Izračunaj"} onPress={calculate} />
      <CalculateButton title={"Resetuj"} onPress={resetValues} reset={true} />
      <ResultsBinderiComponent />
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
