import {StyleSheet, Dimensions} from 'react-native';
import {flex, colors, margins, shadows, fonts} from '../../styles/common';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');


export const styles = StyleSheet.create({
  container: {
       ...flex.row_space_between, 
      width: '100%'
  },
  button_container: {
      ...flex.row_space_between,
      alignItems: 'center',
      paddingHorizontal: 10, 
      paddingVertical: '7%'
  },
  icon: {
      tintColor: colors.whiteDark
    },
    icon_disabled: {
        tintColor: colors.neutral
    },
    text: {
        fontSize: fonts.medium_text,
        textTransform: 'uppercase',
        fontWeight: '600',
        color: colors.whiteDark
    },
    text_disabled: {
        color: colors.neutral
    },
});
