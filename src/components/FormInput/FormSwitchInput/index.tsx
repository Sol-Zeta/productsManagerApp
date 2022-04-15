import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Switch} from 'react-native-paper';
import {colors} from '../../../styles/common';
import {styles} from './styles';

interface Props {
  label?: string;
  value?: string | boolean;
  firstValue?: string;
  secondValue?: string;
  errorMessage?: string;
  inputKey?: string;
  onChange: (value:boolean) => void;
}

export const FormSwitchInput = ({
  inputKey,
  onChange,
  value,
  firstValue,
  secondValue,
  errorMessage,
}: Props) => {
  const [inputValue, setInputValue] = useState<boolean>(true);

  useEffect(() => {
    setInputValue(value ? true : false);
  }, [value]);

  useEffect(() => {
    onChange(inputValue)
  }, [inputValue])
  

  return (
    <View style={styles.container}>
    <View style={styles.switch_container}>
      <Switch
        color={colors.primaryDark}
        style={{backgroundColor: inputValue ? colors.primaryDark : colors.secondaryDark, borderRadius: 15}}
        value={inputValue}
        onValueChange={()=>setInputValue(!inputValue)}
      />
      {(firstValue || secondValue) && <Text style={styles.text}>{inputValue ? secondValue : firstValue}</Text>}
    </View>    
      {errorMessage && <Text>{errorMessage}</Text>}
    </View>
  );
};
