import { useContext } from "react";
import { GredeContext } from "../common/GredeContext";

export const useGredeContext = () => {
  return useContext(GredeContext);
};
