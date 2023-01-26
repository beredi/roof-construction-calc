import { Button, StyleSheet, Text, View } from "react-native";
import { Canvas, Line, vec } from "@shopify/react-native-skia";

type Props = {
  onClickHide: () => void;
};
export const CanvasComponent = ({ onClickHide }: Props) => {
  return (
    <View style={styles.container}>
      <Canvas style={styles.canvasStyle}>
        <Line
          p1={vec(175, 50)}
          p2={vec(20, 150)}
          style="stroke"
          strokeWidth={4}
        />
        <Line
          p1={vec(175, 50)}
          p2={vec(350, 150)}
          style="stroke"
          strokeWidth={4}
        />
        <Line
          p1={vec(175, 50)}
          p2={vec(175, 150)}
          style="stroke"
          strokeWidth={4}
        />
        <Line
          p1={vec(20, 150)}
          p2={vec(350, 150)}
          style="stroke"
          strokeWidth={4}
        />
      </Canvas>
      <View style={styles.body}>
        <Text>text</Text>
        <Text>text</Text>
        <Text>text</Text>
        <Text>text</Text>
        <Text>text</Text>
        <Text>text</Text>
        <Text>text</Text>
      </View>
      <Button title={"Zatvori skicu"} onPress={onClickHide} />
    </View>
  );
};

const styles = StyleSheet.create({
  canvasStyle: {
    //flex: 1,
    width: "100%",
    height: 300,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "space-between",
  },
  body: {
    paddingHorizontal: 20,
  },
});
