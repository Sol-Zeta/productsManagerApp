import React from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { MainNavigationParams } from '../../interfaces';

export const Onboarding = ({
  navigation,
}: StackScreenProps<MainNavigationParams, "splash">) => {


  return (
    <View style={{width: '100%', height: '100vh'}}>
        <Text style={{color: 'black'}}>ON BOARDING</Text>
    </View>
  );
};