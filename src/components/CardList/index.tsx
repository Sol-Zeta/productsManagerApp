import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {MainNavigationParams} from '../../interfaces';
import {ProductCard} from '../index';
import {images} from '../../assetsRoutes';
import {IProduct} from '../../interfaces';

interface Props {
  direction?: 'horizontal' | 'vertical';
  title?: string;
  list: IProduct[];
  navigation: StackScreenProps<MainNavigationParams> | any;
}

export const CardList = ({
  direction = 'vertical',
  title,
  list,
  navigation,
}: Props) => {
  const renderCards = () =>
    list.map((e: IProduct, i: number) => (
      <ProductCard key={`product-card-${i}`} {...e} navigation={navigation} />
    ));

  return (
    <View>
      <Text>{title}</Text>
      <ScrollView>{renderCards()}</ScrollView>
    </View>
  );
};
