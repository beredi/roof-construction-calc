import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

interface Props {
  title: string;
  imageSrc: ImageSourcePropType | undefined;
}
export const Header = ({ title, imageSrc }: Props) => {
  return (
    <>
      <Text style={styles.description}>{title}:</Text>
      <View style={styles.imageContainer}>
        <Image source={imageSrc} style={styles.img} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  description: {
    textTransform: "lowercase",
    marginBottom: 20,
  },
  img: {
    width: "100%",
    height: 130,
    marginVertical: 20,
  },
  imageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
