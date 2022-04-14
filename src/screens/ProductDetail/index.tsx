import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { MainNavigationParams } from '../../interfaces'

interface Props {
    route: { params: {itemId: string}};
    navigation: StackScreenProps<MainNavigationParams>
}

export const ProductDetail = ({route, navigation}:Props) => {

    const [itemData, setItemData] = useState<any>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const { itemId } = route.params;

    const getItemData = async () => {
        try {
           const response = await fetch(`localhost:9000/products/${itemId}`) 
           const data = await response.json()
           return data
        } catch (error) {
            console.error('can´t fetch data')
        }
    }
    useEffect(() => {
        getItemData()
        .then(data=>setItemData(data))
        .then(()=>setIsLoading(false))
        .catch(error=>console.error(error))
    }, [])
    

if(isLoading && !itemData){
    return (
        <View>ESPERANDO DATOS DEL SERVIDOR...</View>
    )
} else {
    return (
      <View>
          <Text>{itemData.name}</Text>
      </View>
    );
}

};
