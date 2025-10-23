import { Dimensions, PixelRatio } from "react-native";
const { width, height } = Dimensions.get("window");

const BASE_WIDTH = 360;
const BASE_HEIGHT = 760;
const scaleWidth = width / BASE_WIDTH;
const scaleHeight = height / BASE_HEIGHT;

export const scaleW = (size) => scaleWidth * size;
export const scaleH = (size) => scaleHeight * size;

const moderateScale = (size, factor = 0.5) =>
  size + (scaleWidth * size - size) * factor;

export const responsiveFontSize = (size, factor = 0.5) =>
  Math.round(PixelRatio.roundToNearestPixel(moderateScale(size, factor)));
