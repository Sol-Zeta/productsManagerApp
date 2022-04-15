import React, {useState, useEffect} from 'react';
import {Text, ScrollView, View, Button, Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useForm, Controller} from 'react-hook-form';
import {StackScreenProps} from '@react-navigation/stack';
import {
  MainBackground,
  StandardButton,
  Modal,
  FormTextInput,
  FormSwitchInput,
} from '../../components';
import {MainNavigationParams, IProduct} from '../../interfaces';
import {styles} from './styles';

interface Params extends IProduct {
  formType: string;
}

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
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const {name, description, active, price, SKU, formType} = route.params;

  const {
    control,
    reset,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: name ?? '',
      description: description ?? '',
      price: price ?? 0,
      SKU: SKU ?? '',
    },
  });
  console.log('error', errors);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleGoBack = () => setIsOpenModal(true);

  const handleReset = () => reset({
    name: name ?? '',
    description: description ?? '',
    price: price ?? 0,
    SKU: SKU ?? '',
  })

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
            <Controller
              control={control}
              rules={{
                required: true,
                maxLength: 30
              }}
              name="name"
              render={({field: {onChange, onBlur, value}}) => (
                <FormTextInput
                  label={'Nombre'}
                  multiline={false}
                  value={value || ''}
                  onBlur={onBlur}
                  onChange={onChange}
                  errorMessage={
                    errors.name ? 'Introduce un nombre válido' : undefined
                  }
                  textLimit={30}
                  placeholder={'Nombre del producto'}
                />
              )}
            />
          </View>
          <View style={styles.input_container}>
            <Controller
              control={control}
              rules={{
                required: true,
                maxLength: 150
              }}
              name="description"
              render={({field: {onChange, onBlur, value}}) => (
                <FormTextInput
                  label={'Descripción'}
                  multiline={true}
                  value={value || ''}
                  textLimit={150}
                  onBlur={onBlur}
                  onChange={onChange}
                  errorMessage={
                    errors.description ? 'Introduce una descripción' : undefined
                  }
                  placeholder={'Descripción del producto'}
                />
              )}
            />
          </View>
          <View style={styles.input_container}>
            <Controller
              control={control}
              rules={{
                required: true,
                maxLength: 10,
              }}
              name="price"
              render={({field: {onChange, onBlur, value}}) => (
                <FormTextInput
                  label={'Precio'}
                  multiline={false}
                  value={value || 0}
                  onBlur={onBlur}
                  onChange={onChange}
                  errorMessage={
                    errors.price ? 'Introduce un precio válido' : undefined
                  }
                  placeholder={'Precio del producto por kilo'}
                />
              )}
            />
          </View>
          <View style={styles.input_container}>
            <Controller
              control={control}
              rules={{
                required: true,
                maxLength: 15,
              }}
              name="SKU"
              render={({field: {onChange, onBlur, value}}) => (
                <FormTextInput
                  label={'Código único (SKU)'}
                  multiline={false}
                  value={value || ''}
                  textLimit={15}
                  onBlur={onBlur}
                  onChange={onChange}
                  errorMessage={
                    errors.SKU ? 'Introduce un código válido' : undefined
                  }
                  placeholder={'Código único (SKU)'}
                />
              )}
            />
          </View>
          {formType !== 'new' && (
            <StandardButton 
              text={'Resetear formulario'}
              onPress={handleReset}
              customStyle={styles.button_standard}
            />
          )}
          <View style={styles.buttons_container}>
            <StandardButton
              secondary
              text="VOLVER"
              onPress={handleGoBack}
              customStyle={styles.button_standard}
            />
            <StandardButton
              text="ENVIAR"
              onPress={handleSubmit(onSubmit)}
              customStyle={styles.button_standard}
            />
          </View>
        </ScrollView>
      </MainBackground>
      <Modal
        title={'No has guardado los cambios'}
        text={'¿Deseas enviarlos antes de salir?'}
        openModal={true}
        onClose={() => setIsOpenModal(false)}
        primaryButton={'Seguir completando el formulario'}
        primaryOnPress={() => setIsOpenModal(false)}
        secondaryButton={'Salir sin guardar'}
        secondaryOnPress={() => navigation.goBack()}
      />
    </>
  );
};
