import React, {useState, useEffect} from 'react';
import {TouchableOpacity, ScrollView, View, Text, Image} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import {deleteProduct} from '../../redux/ducks/products';
import {useFavourites} from '../../hooks';
import {MainNavigationParams} from '../../interfaces';
import {icons} from '../../assetsRoutes';
import {styles} from './styles';
import {findImageByName, shareProduct} from '../../utils';
import {IconButton} from '../../components/Button';

interface Props {
  _id?: string;
  name?: string;
  price?: number;
  navigation: StackScreenProps<MainNavigationParams> | any;
}

export const ProductCard = ({_id, name = '', price = 0, navigation}: Props) => {
  const [isFav, setIsFav] = useState(false);

  // const {isFavID, addFavID, removeFavID, allFavs} = useFavourites();

  const {deleteSuccess, page, quantity, active} = useSelector(
    (state: any) => state.products,
  );
  const dispatch = useDispatch();

  const handlePress = () => {
    navigation.navigate('productDetail', {itemId: _id});
  };

  const handleDelete = () => {
    if (_id) {
      dispatch(deleteProduct(_id, page, quantity, active));
    }
  };

  // const handleFavourite = () => {
  //   if (isFav && _id) {
  //     removeFavID(_id);
  //   } else if (!isFav && _id) {
  //     addFavID(_id);
  //   }
  // };

  // useEffect(() => {
  //   if (_id) {
  //     const isFavourite = isFavID(_id);
  //     setIsFav(isFavourite);
  //   }
  // }, [allFavs]);

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
            <IconButton
              small
              icon={icons.share}
              onPress={() => shareProduct({name, price})}
            />
            <IconButton small icon={icons.delete} onPress={handleDelete} />
          </View>
          <View style={styles.button_save}>
            <IconButton
              small
              icon={
                isFav? icons.marked : icons.unmarked
              }
              onPress={()=>{}}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
