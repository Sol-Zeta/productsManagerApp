import React from 'react';
import { TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { styles } from './styles';

interface Props {
    icon: ImageSourcePropType;
    onPress: () => void;
    secondary?: boolean;
}

export const IconButton = ({icon, onPress, secondary}: Props) => {
  return (
    <TouchableOpacity
        style={[styles.container, secondary && styles.secondary]}
        onPress={onPress}
    >
        <Image 
            source={icon}
        />
    </TouchableOpacity>
  )
}