import React from "react";
import { Dimensions } from "react-native";

export { fcxSpacing } from "./scale";

const { width } = Dimensions.get("window");

export const scale = width / 360;

export const toScale = (value: number) => {
  return value * scale;
};

// export default {
//   toScale,
//   fcxSpacing,
// };
