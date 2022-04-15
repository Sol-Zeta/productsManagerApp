import React from 'react';
import {TouchableOpacity, ScrollView, View, Text, Image} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {MainNavigationParams} from '../../interfaces';
import {icons, images} from '../../assetsRoutes';
import {styles} from './styles';
import {findImageByName} from '../../utils';
import {IconButton} from '../../components/Button';

interface Props {
  _id?: string;
  name?: string;
  description?: string;
  active?: boolean;
  price?: number;
  SKU?: string;
  navigation: StackScreenProps<MainNavigationParams> | any;
}

export const ProductCard = ({
  _id,
  name,
  description,
  active,
  price,
  SKU,
  navigation,
}: Props) => {
  const handlePress = () => {
    navigation.navigate('productDetail', {itemId: _id});
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image style={styles.image} source={name && findImageByName(name)} />
        </View>
        <View style={styles.text_container}>
          <Text style={styles.price}>{`${price} €`}</Text>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.buttons_container}>
            <IconButton small icon={icons.share} onPress={() => {}} />
            <IconButton small icon={icons.edit} onPress={() => {}} />
            <IconButton small icon={icons.delete} onPress={() => {}} />
          </View>
          <View style={styles.button_save}>
            <IconButton small icon={icons.unmarked} onPress={()=> {}} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
