import {StyleSheet, Dimensions} from 'react-native';
import {flex, colors, margins, shadows} from '../../styles/common';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');


export const styles = StyleSheet.create({
  background: {
      ...flex.column_center,
      position: 'absolute',
      zIndex: 100,
      backgroundColor: colors.alert,
      width: screenWidth,
      height: screenHeight
  },  
  container: {
    width: '80%',
    backgroundColor: colors.whiteDark,
    borderRadius: 10,
    padding: '5%'
  },
  header: {
      ...flex.row_space_between,
      alignItems: 'center',
      width: '100%'
  },
  text_container: {
    width: '70%',
    padding: '5%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  title:{
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
    textTransform: 'uppercase'
  },
  text:{
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
  buttons_container: {
    ...flex.row_space_between,
    width: '80%',
    marginTop: margins.small_margin,
  },
  button_close: {
      position: 'relative',
  },
  button_standard: {
    height: 40
  }
});