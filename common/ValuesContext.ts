import { createContext } from "react";

export interface OtherValue {
  [key: string]: number;
}

interface ValuesContextProps {
  height: number;
  width: number;
  hypotenuse: number;
  space: number;
  calcSpace: number;
  boldPipes: number;
  thinPipes: number;
  otherValues?: OtherValue;
  setHeight: (height: number) => void;
  setWidth: (width: number) => void;
  calculate: () => void;
  setSpace: (space: number) => void;
  resetValues: () => void;
  //setHypotenuse: (height: number) => void;
}
export const ValuesContext = createContext(<ValuesContextProps>{
  height: 0,
  width: 0,
  hypotenuse: 0,
  space: 0,
  calcSpace: 0,
  boldPipes: 0,
  thinPipes: 0,
  setHeight: () => {},
  setWidth: () => {},
  calculate: () => {},
  setSpace: () => {},
  resetValues: () => {},

  //setHypotenuse: () => {},
});
