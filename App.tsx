import AppScreen from "./components/AppScreen";
import { BinderiProvider } from "./components/Binderi/BinderiProvider";
import { GredeProvider } from "./components/Grede/GredeProvider";

export default function App() {
  return (
    <BinderiProvider>
      <GredeProvider>
        <AppScreen />
      </GredeProvider>
    </BinderiProvider>
  );
}
