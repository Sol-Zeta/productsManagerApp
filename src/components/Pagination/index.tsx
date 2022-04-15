import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {IconButton, StandardButton} from '../Button';
import {icons} from '../../assetsRoutes';
import {styles} from './styles';

interface Props {
  limit: number;
  value: number;
  getPage: (value: number) => void;
}

export const Pagination = ({limit, value, getPage}: Props) => {
    useEffect(() => {
        console.log('pag', value, limit)
    }, [value, limit])
    
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={value === 0}
        onPress={() => getPage(value - 1)}>
        <View
          style={[
            styles.button_container,
            value === 0 && styles.button_disabled,
          ]}>
          <Image source={icons.back} style={styles.icon} />
          <Text style={styles.text}>Anterior</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={value === limit}
        onPress={() => getPage(value + 1)}>
        <View
          style={[
            styles.button_container,
            value === limit && styles.button_disabled,
          ]}>
          <Text style={styles.text}>Siguiente</Text>
          <Image source={icons.forward} style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
