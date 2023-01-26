import { useContext } from "react";
import { BinderiContext } from "../common/ValuesContext";

export const useBinderiContext = () => {
  return useContext(BinderiContext);
};
