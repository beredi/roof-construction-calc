import { createContext } from "react";

interface ValuesContextProps {
  length: number;
  width: number;
  count: number;
  pipesLength: number;
  isponaLength: number;
  isponaWidth: number;
  setIsponaWidth: (value: number) => void;
  spaceBetIspona: number;
  setSpaceBetIspona: (value: number) => void;
  widthCutIspona: number;
  lengthBoughtPipe: number;
  setLengthBoughtPipe: (value: number) => void;
  countOfOneBoughtPipe: number;
  countPipesToBuy: number;
  setLength: (value: number) => void;
  setWidth: (value: number) => void;
  calculate: () => void;
  reset: () => void;
}
export const GredeContext = createContext(<ValuesContextProps>{
  length: 0,
  width: 0,
  count: 0,
  pipesLength: 0,
  isponaWidth: 0,
  setIsponaWidth: () => {},
  spaceBetIspona: 0,
  setSpaceBetIspona: () => {},
  widthCutIspona: 0,
  lengthBoughtPipe: 0,
  setLengthBoughtPipe: () => {},
  countOfOneBoughtPipe: 0,
  countPipesToBuy: 0,
  setLength: () => {},
  setWidth: () => {},
  calculate: () => {},
  isponaLength: 0,
  reset: () => {},
});
