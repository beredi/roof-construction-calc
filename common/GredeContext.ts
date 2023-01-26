import { createContext } from "react";

interface ValuesContextProps {
  length: number;
  width: number;
  spaceX: number;
  count: number;
  pipesLength: number;
  isponaLength: number;
  setLength: (value: number) => void;
  setWidth: (value: number) => void;
  calculate: () => void;
  reset: () => void;
}
export const GredeContext = createContext(<ValuesContextProps>{
  length: 0,
  width: 0,
  spaceX: 0,
  count: 0,
  pipesLength: 0,
  setLength: () => {},
  setWidth: () => {},
  calculate: () => {},
  isponaLength: 0,
  reset: () => {},
});
