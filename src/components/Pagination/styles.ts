import {StyleSheet, Dimensions} from 'react-native';
import {flex, colors, margins, shadows, fonts} from '../../styles/common';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');


export const styles = StyleSheet.create({
  container: {
      ...flex.row_space_between,
    width: '100%',
  },
  button_container: {
      ...flex.row_space_between,
      alignItems: 'center',
      padding: '5%',
      color: 'red'
  },
  button_disabled: {
      backgroundColor: colors.neutral
  },
  icon: {
      tintColor: colors.whiteDark
  },
  text: {
      fontSize: fonts.medium_text,
      textTransform: 'uppercase',
      fontWeight: '600',
      color: colors.whiteDark
  }
});
