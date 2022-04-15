import React, {useState, useEffect} from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import {
  ScrollView,
  View,
  Text
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {MainNavigationParams, IProduct} from '../../interfaces';
import {MainBackground, FormTextInput, FormTextArea, FormSwitchInput} from '../../components';
import {styles} from './styles';
import {StandardButton} from '../../components/Button';
import {Modal} from '../../components';

interface Params extends IProduct {
  formType: string;
}

type Inputs = {
  name: string,
  nameRequired: string,
  price: string,
  priceRequired: string,
  description: string,
  descriptionRequired: string,
  SKU: string,
  SKURequired: string,
  // active: string,
  // activeRequired: string,
};

interface Props {
  route: {params: Params};
  navigation: StackScreenProps<MainNavigationParams> | any;
}

export const EditProduct = ({route, navigation}: Props) => {
  const [data, setData] = useState<IProduct>({
    name: '',
    description: '',
    price: 0,
    active: true,
    SKU: '',
  });
  const [formTitle, setFormTitle] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const {name, description, active, price, SKU, formType} = route.params;

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log("FORMULARIO", data);

  const handleGoBack = () => navigation.goBack()
  const handleFormSubmit = () => { 
    handleSubmit(onSubmit)
    console.log("ERRORS===>>>",errors)
    // navigation.goBack()
  }

  const handleChangeFormValues = ({inputKey, value}:{inputKey: string, value:string | number}) => {
    if(inputKey === 'price'){
      setData({...data, price: Number(value)})
    } else {
      setData({...data, [inputKey]: value})
    }
  }

  const handleEdit = () => {
    console.log('edit');
  };

  useEffect(() => {
    if (formType === 'new') {
      setData({
        name: '',
        description: '',
        price: 0,
        active: true,
        SKU: '',
      });
      setFormTitle('Producto nuevo');
    } else {
      setData({name, description, active, price, SKU});
      setFormTitle('Modifica el producto');
    }
  }, [formType]);

  return (
    <>
      <MainBackground>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>{formTitle}</Text>
          <View style={styles.input_container}>
            <FormTextInput
              register={{...register("name", {required: true})}}
              label={'NOMBRE'}
              value={data.name || ''}
              textLimit={30}
              placeholder={'Nombre del producto'}
              inputKey={'name'}
              changeFormValues={handleChangeFormValues}
            />
          </View>
          <View style={styles.input_container}>
            <FormTextArea
              label={'DESCRIPCIÓN'}
              value={data.description || ''}
              placeholder={'Nombre del producto'}
              inputKey={'description'}
              // textLimit={150}
              changeFormValues={handleChangeFormValues}
            />
          </View>
          <View style={styles.input_container}>
            <FormTextInput
              register={{...register("price", {required: true})}}
              label={'PRECIO'}
              value={data.price ? data.price.toString() : ''}
              placeholder={'Nombre del producto'}
              inputKey={'price'}
              changeFormValues={handleChangeFormValues}
            />
          </View>
          <View style={styles.input_container}>
            <FormSwitchInput
              // register={{...register("example")}}
              value={data.active}
              firstValue={'inactivo'}
              secondValue={'activo'}
              inputKey={'active'}
              changeFormValues={() => {}}
            />
          </View>
          <View style={styles.input_container}>
            <FormTextInput
              register={{...register("SKU", {required: true})}}
              label={'SKU'}
              value={data.SKU || ''}
              placeholder={'Nombre del producto'}
              inputKey={'SKU'}
              textLimit={12}
              changeFormValues={handleChangeFormValues}
            />
          </View>
          <View style={styles.buttons_container}>
            <StandardButton
              secondary
              text='VOLVER'
              onPress={handleGoBack}
              customStyle={styles.button_standard}
              />
            <StandardButton
              text='ENVIAR'
              onPress={handleFormSubmit}
              customStyle={styles.button_standard}
            />
          </View>
        </ScrollView>
      </MainBackground>
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
