import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

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
      {reset ? (
        <Feather
          name="refresh-ccw"
          size={15}
          color="black"
          style={styles.icon}
        />
      ) : (
        <SimpleLineIcons
          name="calculator"
          size={15}
          color="white"
          style={styles.icon}
        />
      )}
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
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
  },
});
