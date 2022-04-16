import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  PixelRatio,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import {
  getProductById,
} from '../../redux/ducks/products';
import {MainNavigationParams} from '../../interfaces';
import {Modal, MainBackground, IconButton, StandardButton, Loader} from '../../components';
import {findImageByName} from '../../utils';
import {icons} from '../../assetsRoutes';
import {styles} from './styles';

interface Props {
  route: {params: {itemId: string}};
  navigation: StackScreenProps<MainNavigationParams> | any;
}

export const ProductDetail = ({route, navigation}: Props) => {
  const [itemData, setItemData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOnBlur, setIsOnBlur] = useState(true)

  const {itemId} = route.params;

  const {productDetail} = useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!isOnBlur){
      setIsLoading(true);
      dispatch(getProductById(itemId));
    }
  }, [isOnBlur]);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getProductById(itemId));
  }, []);

  useEffect(() => {
    if(productDetail){
      setIsLoading(false)
      setItemData(productDetail.data)
    }
  }, [productDetail])

  useFocusEffect(() => {
    setIsOnBlur(false)
    return () => {
      setIsOnBlur(true)
    }
  });
  

  const handleEdit = () => {
    navigation.navigate('editProduct', {...itemData, formType: 'edit'});
  };

  const handleGoBack = () => navigation.navigate('home');

  if (isLoading && !itemData) {
    return ( <Loader />);
  } else {
    return (
      <>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scroll_view}>
            {itemData && (
              <>
                <MainBackground customStyle={styles.title_container}>
                  <Text style={styles.title}>{itemData.name}</Text>
                </MainBackground>
                <View style={styles.image_container}>
                  <Image
                    source={findImageByName(itemData.name)}
                    style={styles.image}
                  />
                </View>
                <View style={styles.content_container}>
                  <View style={styles.content_header}>
                    <Text style={styles.price}>
                      {`${itemData.price} €/`}
                      <Text style={styles.price_symbol}>kg.</Text>
                    </Text>
                    <IconButton large icon={icons.marked} onPress={() => {}} />
                  </View>
                  <View style={styles.content_main}>
                    <Text style={styles.description_text}>
                      {itemData.description}
                    </Text>
                    <View
                      style={[
                        styles.state_container,
                        itemData.active
                          ? styles.active_text
                          : styles.inactive_text,
                      ]}>
                      <Text style={[styles.state_text]}>
                        {`${itemData.active ? 'activo' : 'oculto'}`}
                      </Text>
                    </View>
                    <Text style={styles.SKU_title}>
                      {'Identificador único: '}
                      <Text style={styles.SKU_text}>{itemData.SKU}</Text>
                    </Text>
                  </View>
                  <View style={styles.buttons_container}>
                    <IconButton icon={icons.edit} onPress={handleEdit} />
                    <IconButton icon={icons.share} onPress={handleEdit} />
                  </View>
                  <StandardButton
                    text={'volver al listado'}
                    customStyle={styles.button_standard}
                    onPress={handleGoBack}
                  />
                </View>
              </>
            )}
          </ScrollView>
        </View>
        <Modal
          title={'hola'}
          text={'hola'}
          openModal={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          primaryButton={'click'}
          primaryOnPress={handleGoBack}
          secondaryButton={'click'}
          secondaryOnPress={handleGoBack}
        />
      </>
    );
  }
};
