import { scale } from "..";

const unit = 4;
const spacing = {
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

export const fcxSpacing = {
  unit: spacing.unit * scale, // 4px
  tiny: spacing.tiny * scale, // 4px
  xSmall: spacing.xSmall * scale, // 8px
  small: spacing.small * scale, // 12px
  regular: spacing.regular * scale, // 16px
  large: spacing.large * scale, // 20px
  xLarge: spacing.xLarge * scale, // 24px
  xxLarge: spacing.xxLarge * scale, // 28px
  capital: spacing.capital * scale, // 32px
};
