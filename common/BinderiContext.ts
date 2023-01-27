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
  podignutoZa: number;
  setPodignutoZa: (value: number) => void;
  lengthBoughtPipe: number;
  setLengthBoughtPipe: (value: number) => void;
  countBoldPipesToBuy: number;
  countThinPipesToBuy: number;
  countBinders: number;
  setCountBinders: (value: number) => void;
  setHeight: (height: number) => void;
  setWidth: (width: number) => void;
  calculate: () => void;
  setSpace: (space: number) => void;
  resetValues: () => void;
  //setHypotenuse: (height: number) => void;
}
export const BinderiContext = createContext(<ValuesContextProps>{
  height: 0,
  width: 0,
  hypotenuse: 0,
  space: 0,
  calcSpace: 0,
  boldPipes: 0,
  thinPipes: 0,
  podignutoZa: 0,
  lengthBoughtPipe: 0,
  countBoldPipesToBuy: 0,
  countThinPipesToBuy: 0,
  countBinders: 1,
  setCountBinders: () => {},
  setLengthBoughtPipe: () => {},
  setPodignutoZa: () => {},
  setHeight: () => {},
  setWidth: () => {},
  calculate: () => {},
  setSpace: () => {},
  resetValues: () => {},
});
