import React from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
//import ResponsiveImageView from 'react-native-responsive-image-view';
import { MainNavigationParams } from '../../interfaces';

export const Splash = ({
  navigation,
}: StackScreenProps<MainNavigationParams, "splash">) => {


  return (
    <View style={{width: '100%', height: '100%'}}>
        <Text style={{color: 'black'}}>SPLASH</Text>
    </View>
  );
};