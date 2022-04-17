import React, {useState, useEffect} from 'react';
import {KeyboardType, TextInputProps, Text} from 'react-native';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors} from '../../../styles/common';
import {styles} from './styles';

interface Props {
  label?: string;
  value: string | number;
  disabled?: boolean;
  multiline?: boolean;
  textLimit?: number;
  placeholder?: string;
  errorMessage?: string;
  onBlur: any;
  onChange: any;
  changeFormValues?: ({
    inputKey,
    value,
  }: {
    inputKey: string;
    value: string | number;
  }) => void;
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

export const FormTextInput = ({
  onChange,
  onBlur,
  value,
  textLimit,
  label,
  errorMessage,
  multiline,
  placeholder,
  disabled,
}: Props) => {
  const [spaceLeft, setSpaceLeft] = useState(
    (textLimit || 30) - value.toString().length,
  );

  useEffect(() => {
    setSpaceLeft((textLimit || 30) - value.toString().length);
  }, [value]);

  return (
    <View style={styles.container}>
      <TextInput
        label={label}
        multiline={multiline}
        error={errorMessage ? true : false}
        selectionColor={colors.primaryDark}
        activeUnderlineColor={colors.primaryDark}
        placeholderTextColor={colors.primaryDark}
        mode="flat"
        value={`${value}`}
        disabled={disabled}
        onBlur={onBlur}
        onChangeText={onChange}
        placeholder={placeholder}
        style={[
          {backgroundColor: colors.whiteTransparencyLight},
          multiline && {height: 150},
        ]}
        right={
          textLimit ? <TextInput.Affix text={`/${spaceLeft}`} /> : undefined
        }
      />
      {errorMessage && <Text style={styles.error_message}>{errorMessage}</Text>}
    </View>
  );
};
