import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface Props {
    text: string;
    onPress: () => void;
    secondary?: boolean;
}

export const StandardButton = ({text, onPress, secondary}: Props) => {
  return (
    <TouchableOpacity
        style={[styles.container, secondary && styles.secondary]}
        onPress={onPress}
    >
        <Text>{text}</Text>
    </TouchableOpacity >
  )
}
