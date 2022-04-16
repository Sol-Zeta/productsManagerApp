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
    console.log('pag', value, limit);
  }, [value, limit]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={value === 0}
        onPress={() => getPage(value - 1)}>
        <View style={[styles.button_container]}>
          <Image
            source={icons.back}
            style={value === 0 ? styles.icon_disabled : styles.icon}
          />
          <Text style={[styles.text, value === 0 && styles.text_disabled]}>
            Anterior
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={value === limit}
        onPress={() => getPage(value + 1)}>
        <View style={[styles.button_container]}>
          <Text style={[styles.text, value === limit && styles.text_disabled]}>
            Siguiente
          </Text>
          <Image source={icons.forward} style={value === limit ? styles.icon_disabled : styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
