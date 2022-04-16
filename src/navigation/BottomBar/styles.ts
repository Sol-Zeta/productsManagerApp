import { StyleSheet } from 'react-native';
import { colors, flex, fonts } from '../../styles/common';

export const styles = StyleSheet.create({
  tab_container: {
      ...flex.column_center,
      width: '100%',
      height: '100%',
    backgroundColor: 'pink'
  },
  tab_container_focused: {
    backgroundColor: 'red'
  },
  tab: {
      backgroundColor: 'pink'
  },
  navigator: {
    backgroundColor: colors.primary,
  },
  text: {
      fontSize: fonts.small_text,
      color: colors.whiteDark
  },
  icon_container: {
  },
  icon: {
      tintColor: colors.whiteDark
  }
});
