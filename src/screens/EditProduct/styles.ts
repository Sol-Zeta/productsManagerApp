import {StyleSheet, Dimensions} from 'react-native';
import {flex, colors, fonts, margins} from '../../styles/common';
const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll_view: {
    ...flex.column_center,
    width: '100%',
  },
  title_container: {
    ...flex.column_center_top,
    width: '100%',
  },
  title: {
    color: colors.white,
    fontSize: fonts.large_text,
    fontFamily: 'Gill Sans',
    textTransform: 'uppercase',
    letterSpacing: 3,
    fontWeight: '600',
    marginTop: 90,
  },
  image_container: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.4,
    position: 'absolute',
    zIndex: 1,
    top: screenWidth*0.45,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  content_container: {
    ...flex.column_center_space_between,
    position: 'absolute',
    top: screenHeight / 3.3,
    zIndex: 0,
    backgroundColor: colors.whiteDark,
    width: screenWidth,
    height: screenHeight - screenHeight/3.3,
    borderTopLeftRadius: screenWidth * 0.05,
    borderTopRightRadius: screenWidth * 0.05,
    paddingTop: '15%',
    paddingBottom: '15%',
    paddingHorizontal: '8%',
  },
  content_header: {
    ...flex.row_space_between,
    width: '100%'
  },
  price: {
    fontSize: fonts.large_text,
    fontWeight: '600',
    textAlign: 'right',
    color: colors.primaryDark,
    marginBottom: margins.large_margin
  },
  price_symbol: {
    fontSize: fonts.small_text,
  },
  content_main: {
    ...flex.column_left,
    width: '100%'
  }, 
  description_text: {
    fontSize: fonts.large_text,
    fontWeight: '400',
    color: colors.secondaryDark,
    fontStyle: 'italic',
    marginBottom: margins.medium_margin
  },
  state_container: {
    ...flex.column_center,
    marginBottom: margins.medium_margin,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 30,
    width: '50%',
    alignSelf: 'center'
  },
  state_text: {
    fontSize: fonts.large_text,
    fontWeight: '400',
    color: colors.black,
  },
  active_text: {
    backgroundColor: colors.alert,
  },
  inactive_text: {
    backgroundColor: colors.info
  },
  SKU_title: {
    fontSize: fonts.medium_text,
    fontWeight: '400',
    color: colors.black,
    marginBottom: margins.medium_margin
  },
  SKU_text: {
    fontSize: fonts.medium_text,
    fontWeight: '600',
    color: colors.black,
    marginBottom: margins.medium_margin
  },
  buttons_container: {
      ...flex.row_space_evenly,
      width: '100%',
      marginTop: margins.medium_margin
  },
  button_standard: {
    marginTop: margins.large_margin
  },
  secondary: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
