import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../styles/common';
import { styles } from './styles';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MainBackground = ({children}: Props) => {
  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      start={{ x: 1, y: 0 }} 
      end={{ x: 0, y: 2 }}
      style={styles.linearGradient}>
      {children}
    </LinearGradient>
  );
};

