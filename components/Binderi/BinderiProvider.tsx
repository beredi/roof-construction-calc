import React, { FC, useState } from "react";
import { OtherValue, BinderiContext } from "../../common/BinderiContext";
import { roundToTwo } from "../common/helperFunctions";

interface Props {
  children: React.ReactNode;
}
export const BinderiProvider: FC<Props> = ({ children }) => {
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [space, setSpace] = useState<number>(0);
  const [boldPipes, setBoldPipes] = useState<number>(0);
  const [thinPipes, setThinPipes] = useState<number>(0);
  const [calcSpace, setCalcSpace] = useState<number>(0);
  const [hypotenuse, setHypotenuse] = useState<number>(0);
  const [otherValues, setOtherValues] = useState<OtherValue>({});

  const calcHypotenuse = () => {
    const value = roundToTwo(
      Math.sqrt(Math.pow(height, 2) + Math.pow(width / 2, 2))
    );
    setHypotenuse(value);

    return value;
  };

  const calcCount = (hypotenuse: number) => {
    return Math.round((hypotenuse - 15) / space) - 1;
  };
  const calcSpaceValue = (hypotenuse: number, count: number) => {
    const value = roundToTwo((hypotenuse - 15) / (count + 1));
    setCalcSpace(value);

    return value;
  };

  const calcAlphaAngle = (hypotenuse: number) => {
    return Math.asin(width / (2 * hypotenuse));
  };

  const nHeightCalc = (xSpaceValue: number, alphaAngle: number) => {
    return 4 * xSpaceValue * Math.cos(alphaAngle);
  };

  const calcYSpaceValue = (
    xSpaceValue: number,
    nHeightValue: number,
    countValue: number
  ) => {
    return (
      Math.sqrt(
        Math.pow((countValue + 1) * xSpaceValue, 2) - Math.pow(nHeightValue, 2)
      ) /
      (countValue + 1)
    );
  };

  const calcZ = (ySpaceValue: number, countValue: number) => {
    return width / 2 - (countValue + 1) * ySpaceValue;
  };

  const calcOtherValues = (
    xSpaceValue: number,
    ySpaceValue: number,
    z: number,
    countValue: number
  ) => {
    const values: OtherValue = {};
    for (let i = 1; i <= countValue; i++) {
      let aKey = "a" + i;
      let bKey = "b" + i;
      const a: number = Math.sqrt(
        Math.pow(xSpaceValue * i, 2) - Math.pow(ySpaceValue * i, 2)
      );
      const b: number =
        i === countValue
          ? Math.sqrt(Math.pow(ySpaceValue + z, 2) + Math.pow(a, 2))
          : Math.sqrt(Math.pow(a, 2) + Math.pow(ySpaceValue, 2));
      values[aKey] = roundToTwo(a);
      values[bKey] = roundToTwo(b);
    }
    setOtherValues(values);

    return values;
  };

  const calculate = async () => {
    const hypotenuseValue = calcHypotenuse();
    const countValue = calcCount(hypotenuseValue);
    const xSpaceValue = calcSpaceValue(hypotenuseValue, countValue);
    const alphaAngle = calcAlphaAngle(hypotenuseValue);
    const nHeight = nHeightCalc(xSpaceValue, alphaAngle);
    const ySpaceValue = calcYSpaceValue(xSpaceValue, nHeight, countValue);
    const z = calcZ(ySpaceValue, countValue);
    const otherValuesValue = calcOtherValues(
      xSpaceValue,
      ySpaceValue,
      z,
      countValue
    );

    setBoldPipes(roundToTwo(height + width + 2 * hypotenuseValue));
    setThinPipes(
      roundToTwo(
        otherValuesValue
          ? 2 * Object.values(otherValuesValue).reduce((a, b) => a + b, 0)
          : 0
      )
    );
  };

  const resetValues = () => {
    setHypotenuse(0);
    setHeight(0);
    setWidth(0);
    setOtherValues({});
    setSpace(0);
    setThinPipes(0);
    setBoldPipes(0);
    setCalcSpace(0);
  };

  return (
    <BinderiContext.Provider
      value={{
        height,
        width,
        hypotenuse,
        setHeight,
        setWidth,
        otherValues,
        calculate,
        space,
        setSpace,
        calcSpace,
        boldPipes,
        thinPipes,
        resetValues,
      }}
    >
      {children}
    </BinderiContext.Provider>
  );
};
