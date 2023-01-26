import { useContext } from "react";
import { BinderiContext } from "../common/BinderiContext";

export const useBinderiContext = () => {
  return useContext(BinderiContext);
};
