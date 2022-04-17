import {StyleSheet, Dimensions} from 'react-native';
import {colors, flex, fonts, margins} from '../../styles/common';

const {height: screenHeight} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    ...flex.column_center_space_between,
    width: '100%',
  },
  title: {
    ...fonts.main_title,
    marginTop: margins.large_margin,
  },
  switch_container: {
    marginBottom: margins.small_margin,
  },
  pagination_container: {
    width: '90%',
  },
});
