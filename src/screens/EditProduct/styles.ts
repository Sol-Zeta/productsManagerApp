import {StyleSheet, Dimensions} from 'react-native';
import {flex, colors, fonts, margins} from '../../styles/common';
const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    ...flex.column_center,
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: '8%',
    paddingVertical: 70
  },
  scroll_view: {},
  title_container: {
    ...flex.column_center_top,
    width: '100%',
  },
  title: {
    ...fonts.main_title
  },
  input_container: {
    width: '100%',
    marginHorizontal: '8%',
    marginBottom: margins.large_margin,
  },
  single_button_container: {
    width: '100%',
    marginTop: margins.medium_margin,
  },
  buttons_container: {
    ...flex.row_space_between,
    width: '100%'
  },
  button_standard: {
    width: '45%'
  },
  button_reset: {
    width: '100%',
    backgroundColor: colors.error
  },
});
