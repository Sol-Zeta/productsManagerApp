import {StyleSheet} from 'react-native';
import {colors, flex, fonts, margins} from '../../styles/common';

export const styles = StyleSheet.create({
  tab_container: {
    ...flex.column_center,
  },
  text: {
    fontSize: fonts.small_text,
    color: colors.primaryDark,
  },
  text_focused: {
    color: colors.secondaryDark,
  },
  icon: {
    marginTop: margins.small_margin,
    tintColor: colors.primaryDark,
  },
  icon_focused: {
    tintColor: colors.secondaryDark,
  },
});
