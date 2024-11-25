import { Dimensions, PixelRatio } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const scaleWidth = (size: any) => (screenWidth / 375) * size; // 375 es el ancho base de referencia

const scaleHeight = (size: any) => (screenHeight / 812) * size; // 812 es la altura base de referencia (iPhone X)

const scaleFont = (size: any) => size * PixelRatio.getFontScale();

const widthSizes = {
  full: width,
  200: scaleWidth(200),
  120: scaleWidth(120),
  100: scaleWidth(100),
  90: scaleWidth(90),
  60: scaleWidth(60),
  50: scaleWidth(50),
  40: scaleWidth(40),
  35: scaleWidth(35),
  30: scaleWidth(30),
  25: scaleWidth(25),
  20: scaleWidth(20),
  15: scaleWidth(15),
  18: scaleWidth(18),
  10: scaleWidth(10),
  7: scaleWidth(7),
  5: scaleWidth(5),
  3: scaleWidth(3),
  2: scaleWidth(2),
  1: scaleWidth(1),
};

const heightSizes = {
  full: height,
  320: scaleHeight(320),
  200: scaleHeight(200),
  170: scaleHeight(170),
  130: scaleHeight(130),
  120: scaleHeight(120),
  100: scaleHeight(100),
  90: scaleHeight(90),
  80: scaleHeight(80),
  70: scaleHeight(70),
  55: scaleHeight(55),
  50: scaleHeight(50),
  45: scaleHeight(45),
  40: scaleHeight(40),
  35: scaleHeight(35),
  30: scaleHeight(30),
  25: scaleHeight(25),
  20: scaleHeight(20),
  18: scaleHeight(18),
  15: scaleHeight(15),
  13: scaleHeight(13),
  10: scaleHeight(10),
  5: scaleHeight(5),
};

const fontSizes = {
  40: scaleFont(40),
  30: scaleFont(30),
  25: scaleFont(25),
  20: scaleFont(20),
  18: scaleFont(18),
  15: scaleFont(15),
  13: scaleFont(13),
  10: scaleFont(10),
  8: scaleFont(8),
  5: scaleFont(5),
};

const fontTypes = {
  bold: 'bold',
  normal: 'normal',
  italic: 'italic',
};

export { widthSizes, heightSizes, fontSizes, fontTypes };
