import {StyleSheet} from 'react-native';
import {colors, flex, shadows} from '../../../styles/common';

export const styles = StyleSheet.create({
  container: {
    ...flex.column_center,
    borderRadius: 23,
    width: 46,
    height: 46,
    backgroundColor: colors.primaryDark,
    ...shadows.primary,
  },
  container_transparent: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    width: 32,
    height: 32,
    shadowColor: 'transparent',
  },
  secondary: {
    backgroundColor: colors.secondaryLight,
  },
  icon: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
  },
  icon_large: {
    width: 46,
    height: 46,
  },
  icon_light: {},
});
