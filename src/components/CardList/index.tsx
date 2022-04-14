import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {ProductCard} from '../index';
import { MainNavigationParams } from '../../interfaces'
import {images} from '../../assetsRoutes';
import {IProductCard} from '../../interfaces';

interface Props {
  direction?: 'horizontal' | 'vertical';
  title?: string;
  list: IProductCard[];
}

export const CardList = ({direction = 'vertical', title, list}: Props) => {

  const renderCards = () =>
    list.map((e: IProductCard, i: number) => (
      <ProductCard key={`product-card-${i}`} {...e} />
    ));

  return (
    <View>
      <Text>{title}</Text>
      <ScrollView>{renderCards()}</ScrollView>
    </View>
  );
};
