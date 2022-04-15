import React from 'react';
import {
  KeyboardType,
  TextInputProps,
  ViewStyle,
  StyleProp,
  TextStyle,
  Text
} from 'react-native';
import { TextInput, View } from 'react-native';
import { colors } from '../../styles/common';
import { styles } from './styles';

interface Props {
  label?: string;  
  value: string;
  placeholder: string;
  inputKey: 'name' | 'description' | 'price' | 'SKU';
  changeFormValues: ({inputKey, value}: {inputKey:string; value: string | number}) => void;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  editable?: boolean;
  placeholderTextColor?: string;
}

export const FormInput = ({
  placeholder,
  inputKey,
  changeFormValues,
  value,
  label,
  inputStyle,
  containerStyle,
  editable = true,
  placeholderTextColor = colors.secondary || 'yellow',
}: Props) => {
  interface TextContextTypeInterface {
    [inputKey: string]: TextInputProps['textContentType'];
  }
  const textContentType: TextContextTypeInterface = {
    email: 'emailAddress',
    password: 'password',
  };

  interface KeyboardTypeInterface {
    [inputKey: string]: KeyboardType;
  }
  const keyboardType: KeyboardTypeInterface = {
    name: 'default',
    description: 'default',
    price: 'numeric',
    SKU: 'default',
    default: 'default',
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text>{`${label}:`}</Text>
      <TextInput
        value={value}
        editable={true}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={['name', 'description', 'price', 'SKU'].includes(
          inputKey
        )}
        style={[styles.input, inputStyle]}
        textContentType={textContentType[inputKey]}
        keyboardType={keyboardType[inputKey] || keyboardType['default']}
        onChange={(e) => console.log(e)}
      />
    </View>
  );
};
