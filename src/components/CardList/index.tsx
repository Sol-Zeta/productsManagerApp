import React from 'react';
import {View, Text, Image} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {MainNavigationParams, IProduct} from '../../interfaces';
import {ProductCard} from '../ProductCard';
import {images} from '../../assetsRoutes';
import { styles } from './styles';

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
      <View style={styles.cards_container}>
        { list.length ? (
          renderCards()
        ) : (
          <View style={styles.message_container}>
            <Image 
              source={images.all_products}
              style={styles.image}
            />
            <Text style={styles.symbol}>?</Text>
            <Text style={styles.text}>No se han encontrado productos</Text>
            <Text style={styles.text}>Intenta con una nueva búsqueda</Text>
          </View>
        )}
      </View>
    </View>
  );
};
