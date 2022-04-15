import React, { useState, useEffect } from 'react';
import {
  KeyboardType,
  TextInputProps,
  ViewStyle,
  StyleProp,
  TextStyle,
  Text
} from 'react-native';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../../../styles/common';
import { styles } from './styles';

interface Props {
  label?: string;  
  value: string;
  placeholder: string;
  errorMessage?: string;
  inputKey: 'name' | 'description' | 'price' | 'SKU';
  changeFormValues: ({inputKey, value}: {inputKey:string; value: string | number}) => void;
}

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

export const FormTextArea = ({
  inputKey,
  changeFormValues,
  value,
  label,
  errorMessage,
}: Props) => {

  const [inputIcon, setInputIcon] = useState<string>('')
  const [inputValue, setInputValue] = useState<string|number>(value)

  const handleIcons = (iconKey: string) => {
    switch (iconKey) {
      case 'name':
        return ''  
      case 'description':
        return ''  
      case 'price':
        return 'EuroOutlined'  
      case 'SKU':
        return ''  
      default:
        return ''  
    }
  }

  useEffect(() => {
    const icon = handleIcons(inputKey)
    setInputIcon(icon)
  }, [])
  


  return (
    <View style={styles.container}>
      {/* <Text>{`${label}:`}</Text> */}
      <TextInput
        label={label}
        multiline={false}
        selectionColor={colors.primaryDark}
        activeOutlineColor={colors.primaryDark}
        mode='flat'
        value={inputValue.toString()}
        onChange={(e)=>setInputValue(e.target)}
        placeholder={`Ingresa el ${label?.toLowerCase()} del producto`}
        secureTextEntry
        style={{height: 150}}
        right={<TextInput.Affix text="/300" />}
    />
    { errorMessage && <Text>{errorMessage}</Text>}
    </View>
  );
};
