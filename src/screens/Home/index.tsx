import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { MainNavigationParams } from '../../interfaces'

import {CardList, MainBackground, Loader} from '../../components';

export const Home = ({navigation}: StackScreenProps<MainNavigationParams>) => {
  
    const [isLoading, setIsLoading] = useState(true)
  
    if(isLoading){
        return <Loader text='Actualizando datos'/>
    }
  
    return (
    <MainBackground>
      <SafeAreaView>
        <Text>HOME</Text>
        <View>

        </View>
        <View>
            <ScrollView>
                <CardList
                    navigation={navigation}
                    direction='horizontal'
                    title='Todos los productos'
                    list={[
                        {
                            _id: "625701111c1b95606dae43a9",
                            name: "Cebolla Súper Roja",
                            "description": "Producto de Mariano, cultivada con amor.",
                            "active": true,
                            "price": 1.79,
                            "SKU": "HB000000002",
                            "__v": 0
                        },
                        {
                            "_id": "625701111c1b95606dae43b2",
                            "name": "Pimiento Amarillo",
                            "description": "Producto de Felix, cultivada con amor.",
                            "active": true,
                            "price": 0.89,
                            "SKU": "HB000000011",
                            "__v": 0
                        },
                        {
                            "_id": "625701111c1b95606dae43b3",
                            "name": "Tomate Rosa",
                            "description": "Producto de Angel, cultivada con amor.",
                            "active": true,
                            "price": 1.59,
                            "SKU": "HB000000012",
                            "__v": 0
                        },
                        {
                            "_id": "625701111c1b95606dae43b4",
                            "name": "Tomate Azul",
                            "description": "Producto de Angel, cultivada con amor.",
                            "active": true,
                            "price": 0.89,
                            "SKU": "HB000000013",
                            "__v": 0
                        },
                        {
                            "_id": "625701111c1b95606dae43ae",
                            "name": "Tomate Cherry",
                            "description": "Producto de Felix, cultivada con amor.",
                            "active": true,
                            "price": 0.89,
                            "SKU": "HB000000007",
                            "__v": 0
                        },
                        {
                            "_id": "625701111c1b95606dae43ac",
                            "name": "Tomate Maduro",
                            "description": "Producto de Mariano, cultivada con amor.",
                            "active": true,
                            "price": 0.89,
                            "SKU": "HB000000005",
                            "__v": 0
                        },
                        {
                            "_id": "625701111c1b95606dae43b1",
                            "name": "Pimiento Rojo",
                            "description": "Producto de Felix, cultivada con amor.",
                            "active": true,
                            "price": 0.89,
                            "SKU": "HB000000010",
                            "__v": 0
                        },
                        {
                            "_id": "625701111c1b95606dae43b0",
                            "name": "Pimiento Verde",
                            "description": "Producto de Felix, cultivada con amor.",
                            "active": true,
                            "price": 0.89,
                            "SKU": "HB000000009",
                            "__v": 0
                        },
                        {
                            "_id": "625701111c1b95606dae43aa",
                            "name": "Zanahoria",
                            "description": "Producto de Angel, cultivada con amor.",
                            "active": true,
                            "price": 2.79,
                            "SKU": "HB000000003",
                            "__v": 0
                        },
                        {
                            "_id": "625701111c1b95606dae43af",
                            "name": "Pepino",
                            "description": "Producto de Felix, cultivada con amor.",
                            "active": true,
                            "price": 2.89,
                            "SKU": "HB000000008",
                            "__v": 0
                        },
                        {
                            "_id": "625701111c1b95606dae43ad",
                            "name": "Tomate Verde",
                            "description": "Producto de Mariano, cultivada con amor.",
                            "active": true,
                            "price": 0.89,
                            "SKU": "HB000000006",
                            "__v": 0
                        },
                        {
                            "_id": "625701111c1b95606dae43a8",
                            "name": "Lechuga iceberg",
                            "description": "Producto de Mariano, cultivada con amor.",
                            "active": true,
                            "price": 0.79,
                            "SKU": "HB000000001",
                            "__v": 0
                        },
                        {
                            "_id": "625701111c1b95606dae43ab",
                            "name": "Patata Agria",
                            "description": "Producto de Mariano, cultivada con amor.",
                            "active": true,
                            "price": 0.39,
                            "SKU": "HB000000004",
                            "__v": 0
                        }
                    ]}
                />
            </ScrollView>
        </View>
        <View>
            <Text>Tus búsquedas recientes</Text>
        </View>
      </SafeAreaView>
    </MainBackground>
  );
};
