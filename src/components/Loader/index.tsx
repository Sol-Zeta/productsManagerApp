import React from 'react';
import {  Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { colors } from '../../styles/common';
import { styles } from './styles';

interface Props {
    text?: string;
}

export const Loader = ({text}: Props) => {
  return (
    <View style={styles.background}>
        <View style={text ? styles.container : undefined}> 
            <ActivityIndicator size={'large'} color={text ? colors.primaryDark : colors.secondary}/>
            {text && <Text style={styles.text}>{text}</Text>}
        </View>
    </View>
  )
}
