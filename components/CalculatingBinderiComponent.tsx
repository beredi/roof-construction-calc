import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { useBinderiContext } from "../hooks/useValuesContext";
import React from "react";
import { InputCell } from "./common/InputCell";
import { CalculateButton } from "./common/CalculateButton";
import { ResultsComponent } from "./ResultsComponent";

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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <Text style={styles.description}>Parametri krova:</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/input-values.jpg")}
              style={styles.img}
            />
          </View>
          <View style={styles.row}>
            <InputCell
              value={width}
              setValue={setWidth}
              label={"Širina [cm]"}
            />
            <InputCell
              value={height}
              setValue={setHeight}
              label={"Visina [cm]"}
            />
            <InputCell
              value={space}
              setValue={setSpace}
              label={"Željeni razmak [cm]"}
            />
          </View>
          <CalculateButton title={"Izračunaj"} onPress={calculate} />
          <CalculateButton
            title={"Resetuj"}
            onPress={resetValues}
            reset={true}
          />
          <ResultsComponent />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 30,
  },
  canvas: {
    flex: 1,
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
