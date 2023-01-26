import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

interface Props {
  value: number;
  setValue: (value: number) => void;
  label: string;
}
export const InputCell = ({ value, setValue, label }: Props) => {
  return (
    <View style={styles.cell}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.inputField}
        value={value.toString()}
        keyboardType="numeric"
        onChangeText={(text) => {
          setValue(text !== null && text !== "" ? parseInt(text) : 0);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    padding: 5,
    textAlign: "center",
    fontSize: 25,
  },
  cell: {
    textAlign: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  label: {
    fontSize: 12,
    textTransform: "uppercase",
  },
});
