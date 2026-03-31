import { useFonts } from 'expo-font';

const [fontsLoaded] = useFonts({
  BricolageRegular: require('../assets/fonts/BricolageGrotesqueRegular.ttf'),
  BricolageMedium: require('../assets/fonts/BricolageGrotesqueMedium.ttf'),
  BricolageBold: require('../assets/fonts/BricolageGrotesqueBold.ttf'),
});

export const FontFamily = {
  regular: 'BricolageRegular',
  medium: 'BricolageMedium',
  bold: 'BricolageBold',
};

export const FontSize = {
  xs: 10,
  sm: 12,
  md: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 40,
};

export const LineHeight = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.75,
};