import {StyleSheet} from 'react-native';
import {flex, colors, margins, shadows} from '../../styles/common';
export const styles = StyleSheet.create({
  card: {
    ...flex.column_space_evenly,
    ...shadows.primary,
    width: '100%',
    
    backgroundColor: colors.whiteDark,
    borderRadius: 10,
  },
  container: {
    ...flex.row_space_between
  },
  image_container: {
    ...flex.column_center,
    alignItems: 'center',
    width: '30%',
    paddingHorizontal: '3%',
    paddingRight: '4%',
    marginVertical: '5%',
    borderRightColor: colors.neutral,
    borderRightWidth: 1,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
  },
  text_container: {
    position: 'relative',
    width: '70%',
    padding: '5%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  name:{
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
  price:{
      fontSize: 24,
      fontWeight: '600',
      color: colors.primaryDark,
  },
  buttons_container: {
    ...flex.row_space_between,
    width: '60%',
    marginTop: margins.small_margin,
  },
  button_save: {
    position: 'absolute',
    top: '10%',
    right: '5%'
  }
});
