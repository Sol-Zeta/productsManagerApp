import React, {useState, useEffect} from 'react';
import {Text, ScrollView, View, Button, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {StackScreenProps} from '@react-navigation/stack';
import {
  MainBackground,
  StandardButton,
  Modal,
  FormTextInput,
  FormSwitchInput
} from '../../components';
import {MainNavigationParams, IProduct} from '../../interfaces';
import { modalMessages } from '../../data/modalMessages';
import { cleanData } from '../../utils';
import { store } from '../../store';
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
  const [modalMessage, setModalMessage] = useState('')
  const [isFormSaved, setIsFormSaved] = useState(true)

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

  const onSubmit = async (formData: any) => {
    try {
      if(formType === "new"){
        const createdProduct = await store().createProduct({...formData, active: data.active})
        setIsFormSaved(createdProduct.success)
        setModalMessage('cambios guardados con éxito');
        setIsOpenModal(true);
      } else if(route.params._id){
        const newFields = cleanData(route.params, {...formData, active: data.active})
        if(Object.keys(newFields).length){
          const createdProduct = await store().updateProductById(route.params._id, newFields)
          setIsFormSaved(createdProduct.success)
        } else {
          setIsFormSaved(true)
        }
      }
      console.log(formData);
      
    } catch (error) {
      console.error("error enviado datos", error)
      setModalMessage(modalMessages.error_saving_changes);
      setIsOpenModal(true);
      setIsFormSaved(false)
    }
  };

  const handleGoBack = () => {
    setModalMessage(modalMessages.save_before_quit);
    setIsOpenModal(true);
  };

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

  useEffect(() => {
    console.log("active", data)
  }, [data])
  
  

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
            <FormSwitchInput
                value={data.active}
                firstValue={'inactivo'}
                secondValue={'activo'}
                inputKey={'active'}
                onChange={(value) => setData({...data, active: value})}
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
          {formType !== 'new' && (
            <View style={styles.single_button_container}>
              <StandardButton 
                text={'Resetear formulario'}
                onPress={handleReset}
                customStyle={styles.button_reset}
              />
            </View>
          )}
        </ScrollView>
      </MainBackground>
      <Modal
        title={isFormSaved ? '¡ESTUPENDO!' : 'ATENCIÓN'}
        text={modalMessage}
        openModal={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        primaryButton={'Volver al formulario'}
        primaryOnPress={() => {setIsOpenModal(false); console.log(isOpenModal)}}
        secondaryButton={'Salir sin guardar'}
        secondaryOnPress={() => navigation.goBack()}
      />
    </>
  );
};
