import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const scale = width / 360;

const unit = 4;
export const fcxSpacing = {
  unit: unit, // 4px em relação ao protótipo (Figma)
  tiny: unit, // 4px
  xSmall: unit * 2, // 8px
  small: unit * 3, // 12px
  regular: unit * 4, // 16px
  large: unit * 5, // 20px
  xLarge: unit * 6, // 24px
  xxLarge: unit * 7, // 28px
  capital: unit * 8, // 32px
};

export const fcxScale = {
  unit: fcxSpacing.unit * scale, // 4px
  tiny: fcxSpacing.tiny * scale, // 4px
  xSmall: fcxSpacing.xSmall * scale, // 8px
  small: fcxSpacing.small * scale, // 12px
  regular: fcxSpacing.regular * scale, // 16px
  large: fcxSpacing.large * scale, // 20px
  xLarge: fcxSpacing.xLarge * scale, // 24px
  xxLarge: fcxSpacing.xxLarge * scale, // 28px
  capital: fcxSpacing.capital * scale, // 32px
};
