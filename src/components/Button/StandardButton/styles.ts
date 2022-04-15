import {StyleSheet} from 'react-native';
import { colors, flex, fonts, shadows } from '../../../styles/common';

export const styles = StyleSheet.create({
  container: {
    ...flex.column_center,
    paddingHorizontal: 15,
    borderRadius: 5,
    height: 60,
    backgroundColor: colors.primaryDark,
    ...shadows.primary
  },
  container_large: {
    paddingHorizontal: 10
  },
  text: {
    fontSize: fonts.medium_text,
    fontFamily: 'arial',
    fontWeight: '600', 
    color: colors.white,
    textTransform: 'uppercase',
    letterSpacing: 2
  },
  text_small: {
    fontSize: fonts.xsmall_text,
    letterSpacing: 1,
    lineHeight: fonts.xsmall_text+3
  },
  pressed: {
    color: colors.black
  },
  secondary: {
    backgroundColor: colors.secondaryDark,
  },
  secondary_pressed: {
    color: colors.secondaryDark
  },
});
