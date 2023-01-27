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
  const [podignutoZa, setPodignutoZa] = useState<number>(0);
  const [lengthBoughtPipe, setLengthBoughtPipe] = useState<number>(0);
  const [countBoldPipesToBuy, setCountBoldPipesToBuy] = useState<number>(0);
  const [countThinPipesToBuy, setCountThinPipesToBuy] = useState<number>(0);
  const [countBinders, setCountBinders] = useState<number>(1);

  const calcHypotenuse = (actualHeight: number) => {
    const value = roundToTwo(
      Math.sqrt(Math.pow(actualHeight, 2) + Math.pow(width / 2, 2))
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
      const a: number =
        podignutoZa +
        Math.sqrt(Math.pow(xSpaceValue * i, 2) - Math.pow(ySpaceValue * i, 2));
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

  const calcActualHeight = () => {
    return height - podignutoZa;
  };

  const calcBoldPipes = (hypotenuseValue: number) => {
    const value = roundToTwo(2 * podignutoZa + width + 2 * hypotenuseValue);
    setBoldPipes(value);
    setCountBoldPipesToBuy(Math.ceil(value / lengthBoughtPipe));
  };

  const calcThinPipes = (otherValuesValue: OtherValue) => {
    const value =
      roundToTwo(
        otherValuesValue
          ? 2 * Object.values(otherValuesValue).reduce((a, b) => a + b, 0)
          : 0
      ) + height;
    setThinPipes(value);

    setCountThinPipesToBuy(Math.ceil(value / lengthBoughtPipe));
  };

  const calculate = async () => {
    const actualHeight = calcActualHeight();
    const hypotenuseValue = calcHypotenuse(actualHeight);
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

    calcBoldPipes(hypotenuseValue);
    calcThinPipes(otherValuesValue);
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
    setPodignutoZa(0);
    setLengthBoughtPipe(0);
    setCountThinPipesToBuy(0);
    setCountBoldPipesToBuy(0);
    setCountBinders(1);
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
        podignutoZa,
        setPodignutoZa,
        lengthBoughtPipe,
        setLengthBoughtPipe,
        countThinPipesToBuy,
        countBoldPipesToBuy,
        countBinders,
        setCountBinders,
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
