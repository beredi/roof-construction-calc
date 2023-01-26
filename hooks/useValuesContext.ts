import { useContext } from "react";
import { ValuesContext } from "../common/ValuesContext";

export const useValuesContext = () => {
  return useContext(ValuesContext);
};
