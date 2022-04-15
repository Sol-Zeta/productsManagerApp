import {StyleSheet, Dimensions} from 'react-native';
import {flex, colors, margins, shadows} from '../../styles/common';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');


export const styles = StyleSheet.create({
  background: {
      ...flex.column_center,
      position: 'absolute',
      zIndex: 100,
      backgroundColor: colors.greyTransparency,
      width: screenWidth,
      height: screenHeight
  },  
  container: {
      ...flex.column_center,
    width: '80%',
    backgroundColor: colors.whiteDark,
    borderRadius: 10,
    padding: margins.xlarge_margin
  },
  text:{
    fontSize: 18,
    color: colors.black,
    marginTop: margins.large_margin
  }
});