import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  PixelRatio,
  TextInput
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {MainNavigationParams, IProduct} from '../../interfaces';
import {MainBackground, FormInput} from '../../components';
import {styles} from './styles';
import {icons} from '../../assetsRoutes';
import {IconButton, StandardButton} from '../../components/Button';
import {Modal} from '../../components';
import {findImageByName} from '../../utils';

interface Props {
  route: {params: IProduct};
  navigation: StackScreenProps<MainNavigationParams> | any;
}

export const EditProduct = ({route, navigation}: Props) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const ratio = PixelRatio.getFontScale();
  console.log('ratio', ratio);
  const {name, description, active, price, SKU} = route.params;
  console.log(route)

  const handleEdit = () => {
    console.log('edit');
  };

  const handleGoBack = () => navigation.navigate('home');
  return (
    <>
      <View>
        <MainBackground>
          <Text></Text>
          <FormInput
            label={'Nombre'}
            value={name}
            placeholder={'Nombre del producto'}
            inputKey={'name'}
            changeFormValues={()=>{}}
          />
        </MainBackground>
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
};
