import React from 'react';
import { StyleProp, ViewStyle, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../styles/common';
import { styles } from './styles';

interface Props {
  children: JSX.Element | JSX.Element[];
  height?: number;
  top?: number;
  customStyle?: StyleProp<ViewStyle>;
}

export const MainBackground = ({children, height, top, customStyle}: Props) => {
  
  const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      start={{ x: 1, y: 0 }} 
      end={{ x: 0, y: 2 }}
      style={[
        {height: height ?? screenHeight},
        top ? {marginTop: top} : {marginTop: 0},
        customStyle && customStyle
      ]}>
      {children}
    </LinearGradient>
  );
};

