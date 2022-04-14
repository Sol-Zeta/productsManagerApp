import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {images} from '../../assetsRoutes';

interface Props {
  _id: string;
  name: string;
  description: string;
  active: boolean;
  price: number;
  SKU: string;
}

export const ProductCard = ({
  _id,
  name,
  description,
  active,
  price,
  SKU,
}: Props) => {
  return (
    <TouchableOpacity>
      <View>
        <Image source={images.card_picture} />
      </View>
      <View>
        <Text>{name}</Text>
        <Text>{description}</Text>
        <Text>{active}</Text>
        <Text>{price}</Text>
      </View>
      <View>{/* BUTTONS */}</View>
    </TouchableOpacity>
  );
};
