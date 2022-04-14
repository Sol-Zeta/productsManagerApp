import React, { useState } from 'react';
import { TouchableHighlight, Text, StyleProp, ViewStyle } from 'react-native';
import { colors } from '../../../styles/common';
import { styles } from './styles';

interface Props {
    text: string;
    onPress: () => void;
    secondary?: boolean;
    customStyle?: StyleProp<ViewStyle>
}

export const StandardButton = ({text, onPress, secondary, customStyle}: Props) => {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <TouchableHighlight
        activeOpacity={1}
        underlayColor={secondary ? colors.primary : colors.secondary}
        onHideUnderlay={() => setIsPressed(false)}
        onShowUnderlay={() => setIsPressed(true)}
        style={[
          styles.container, 
          secondary && styles.secondary,
          customStyle && customStyle
        ]}
        onPress={onPress}
    >
        <Text
          style={[
            styles.text,
            isPressed && styles.pressed
          ]}
        >{text}</Text>
    </TouchableHighlight>
  )
}
