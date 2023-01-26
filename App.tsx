import AppScreen from "./components/AppScreen";
import { BinderiProvider } from "./components/BinderiProvider";

export default function App() {
  return (
    <BinderiProvider>
      <AppScreen />
    </BinderiProvider>
  );
}
