import React, { FC, useState } from "react";
import { GredeContext } from "../../common/GredeContext";
import { roundToTwo } from "../common/helperFunctions";

interface Props {
  children: React.ReactNode;
}
export const GredeProvider: FC<Props> = ({ children }) => {
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [isponaLength, setIsponaLength] = useState<number>(0);
  const [pipesLength, setPipesLength] = useState<number>(0);
  const [isponaWidth, setIsponaWidth] = useState<number>(0);
  const [spaceBetIspona, setSpaceBetIspona] = useState<number>(0);
  const [widthCutIspona, setWidthCutIspona] = useState<number>(0);
  const [lengthBoughtPipe, setLengthBoughtPipe] = useState<number>(0);
  const [countOfOneBoughtPipe, setCountOfOneBoughtPipe] = useState<number>(0);
  const [countPipesToBuy, setCountPipesToBuy] = useState<number>(0);

  const transformDegToRad = (deg: number) => {
    return deg * (Math.PI / 180);
  };
  const calcCount = (space: number) => {
    const value = Math.trunc(length / space);
    setCount(value);

    return value;
  };

  const calcIsponaLength = () => {
    const value = roundToTwo(width / Math.sin(transformDegToRad(45)));
    setIsponaLength(value);

    return value;
  };

  const calcPipesLength = (isponaValue: number, countValue: number) => {
    const value = isponaValue * countValue;
    setPipesLength(roundToTwo(value));
  };

  const calcWidthCutIspona = () => {
    const value = roundToTwo(
      Math.sqrt(Math.pow(isponaWidth, 2) + Math.pow(isponaWidth, 2))
    );
    setWidthCutIspona(value);

    return value;
  };

  const calcSpace = (widthCutIsponaValue: number) => {
    return roundToTwo(width + widthCutIsponaValue + spaceBetIspona);
  };

  const calcCountOfOneBoughtPipe = (isponaLengthValue: number) => {
    const value = Math.trunc(
      (lengthBoughtPipe - isponaWidth) / isponaLengthValue
    );

    setCountOfOneBoughtPipe(value);

    return value;
  };

  const calcPipesToBuy = (countValue: number, cutFromOnePipe: number) => {
    const value = Math.ceil(countValue / cutFromOnePipe);
    setCountPipesToBuy(value);
  };

  const calculate = () => {
    const isponaLengthValue = calcIsponaLength();
    const widthCutIsponaValue = calcWidthCutIspona();
    const space = calcSpace(widthCutIsponaValue);
    const countValue = calcCount(space);
    const cutFromOnePipe = calcCountOfOneBoughtPipe(isponaLengthValue);
    calcPipesToBuy(countValue, cutFromOnePipe);
    calcPipesLength(isponaLengthValue, countValue);
  };

  const reset = () => {
    setLength(0);
    setWidth(0);
    setCount(0);
    setPipesLength(0);
    setIsponaLength(0);
    setCountPipesToBuy(0);
    setCountOfOneBoughtPipe(0);
    setWidthCutIspona(0);
    setIsponaWidth(0);
    setLengthBoughtPipe(0);
    setSpaceBetIspona(0);
  };

  return (
    <GredeContext.Provider
      value={{
        length,
        width,
        count,
        pipesLength,
        isponaLength,
        isponaWidth,
        setIsponaWidth,
        spaceBetIspona,
        setSpaceBetIspona,
        widthCutIspona,
        lengthBoughtPipe,
        setLengthBoughtPipe,
        countOfOneBoughtPipe,
        countPipesToBuy,
        setLength,
        setWidth,
        calculate,
        reset,
      }}
    >
      {children}
    </GredeContext.Provider>
  );
};
