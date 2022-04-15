import React from 'react';
import {TouchableHighlight, Image, ImageSourcePropType, StyleProp, ViewStyle} from 'react-native';
import {colors} from '../../../styles/common';
import {styles} from './styles';

interface Props {
  icon: ImageSourcePropType;
  onPress: () => void;
  secondary?: boolean;
  small?: boolean;
  large?: boolean;
  customStyle?: StyleProp<ViewStyle>
}

export const IconButton = ({icon, onPress, secondary, small, large, customStyle}: Props) => {
  return (
    <TouchableHighlight
      activeOpacity={1}
      underlayColor={!small ? secondary ? colors.primary : colors.secondary : 'transparent'}
      style={[
        styles.container,
        secondary && styles.secondary,
        (small || large) && styles.container_transparent,
        customStyle
      ]}
      onPress={onPress}>
      <Image 
        source={icon} 
        style={[
          styles.icon,
          large && styles.icon_large
        ]} 
      />
    </TouchableHighlight>
  );
};
