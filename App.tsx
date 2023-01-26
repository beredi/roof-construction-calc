import { StyleSheet } from "react-native";
import { ValuesProvider } from "./components/ValuesProvider";
import AppScreen from "./components/AppScreen";

export default function App() {
  return (
    <ValuesProvider>
      <AppScreen />
    </ValuesProvider>
  );
}

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
});
