import { scale } from "./scale";

export { fcxSpacing, fcxScale, scale } from "./scale";

export const toScale = (value: number) => {
  return value * scale;
};
