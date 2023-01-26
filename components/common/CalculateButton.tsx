import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

interface Props {
  title: string;
  reset?: boolean;
  onPress: () => void;
}

export const CalculateButton = ({ title, onPress, reset = false }: Props) => {
  const bgPressed = reset ? "#c7c7c7" : "#281864";
  const bgNotPressed = reset ? "#f3f3f3" : "#130a36";
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? bgPressed : bgNotPressed,
        },
        styles.button,
      ]}
    >
      <Text style={{ color: reset ? "#333333" : "#ffffff" }}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
