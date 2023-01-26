import React, { FC, useState } from "react";
import { GredeContext } from "../../common/GredeContext";
import { roundToTwo } from "../common/helperFunctions";

interface Props {
  children: React.ReactNode;
}
export const GredeProvider: FC<Props> = ({ children }) => {
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [spaceX, setSpaceX] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [isponaLength, setIsponaLength] = useState<number>(0);
  const [pipesLength, setPipesLength] = useState<number>(0);

  const transformDegToRad = (deg: number) => {
    return deg * (Math.PI / 180);
  };
  const calcCount = () => {
    const value = Math.trunc(length / width);
    setCount(value);

    return value;
  };

  const calcIsponaLength = () => {
    const value = roundToTwo(width / Math.sin(transformDegToRad(45)));
    setIsponaLength(value);

    return value;
  };
  const calcSpaceX = (countValue: number, isponaValue: number) => {
    const value = Math.sqrt(Math.pow(isponaValue, 2) - Math.pow(width, 2));
    setSpaceX(roundToTwo(value));
  };

  const calcPipesLength = (isponaValue: number, countValue: number) => {
    const value = isponaValue * countValue;
    setPipesLength(roundToTwo(value));
  };

  const calculate = () => {
    const countValue = calcCount();
    const isponaValue = calcIsponaLength();
    calcSpaceX(countValue, isponaValue);
    calcPipesLength(isponaValue, countValue);
  };

  const reset = () => {
    setLength(0);
    setWidth(0);
    setCount(0);
    setPipesLength(0);
    setIsponaLength(0);
    setSpaceX(0);
  };

  return (
    <GredeContext.Provider
      value={{
        length,
        width,
        spaceX,
        count,
        pipesLength,
        isponaLength,
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
