import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  PixelRatio,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {MainNavigationParams} from '../../interfaces';
import {MainBackground} from '../../components';
import {styles} from './styles';
import {icons} from '../../assetsRoutes';
import {IconButton, StandardButton} from '../../components/Button';
import {Modal} from '../../components';
import {findImageByName} from '../../utils';

interface Props {
  route: {params: {itemId: string}};
  navigation: StackScreenProps<MainNavigationParams> | any;
}

export const ProductDetail = ({route, navigation}: Props) => {
  const [itemData, setItemData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);

  const ratio = PixelRatio.getFontScale();
  console.log('ratio', ratio);
  const {itemId} = route.params;

  const getItemData = async () => {
    console.log('getItemData');
    try {
      const response = await fetch(`http://localhost:9000/products/${itemId}`);
      const data = await response.json();
      console.log('data', data);
      return data;
    } catch (error) {
      console.error('cannot fetch data');
    }
  };
  useEffect(() => {
    getItemData()
      .then(data => setItemData(data))
      .then(() => setIsLoading(false))
      .catch(error => console.error(error));
  }, []);

  const handleEdit = () => {
    navigation.navigate('editProduct', itemData);
  };

  const handleGoBack = () => navigation.navigate('home');

  if (isLoading && !itemData) {
    return (
      <View>
        <Text>ESPERANDO DATOS DEL SERVIDOR...</Text>
      </View>
    );
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
                    {/* <IconButton icon={icons.unmarked} onPress={handleEdit} /> */}
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
