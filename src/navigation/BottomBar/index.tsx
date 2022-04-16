import React, {useEffect, useState, useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigationState} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StackScreenProps,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {MainNavigationParams} from '../../interfaces';
import {EditProduct, Home} from '../../screens';
import {icons} from '../../assetsRoutes';
import {colors} from '../../styles/common';
import {styles} from './styles';

export type TabMenuParams = {
  tabBarOptions: any;
  home: {itemId: string};
  new: {itemId: string; formType: string};
  favourites: {itemId: string};
};

type IIcons = {
  home: 'home';
  new: 'new';
  favourites: 'favourites';
};

export type tabMenuKeys = keyof TabMenuParams;

const Tab = createBottomTabNavigator<TabMenuParams>();

export const BottomBar = ({
  navigation,
  route,
}: StackScreenProps<MainNavigationParams, 'navigation'>) => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="home"
        defaultScreenOptions={{
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors.whiteDark,
          tabBarItemStyle: styles.tab,
          tabBarStyle: styles.navigator,
          tabBarShowLabel: false,
          tabBarLabelStyle: {backgroundColor: 'red'}
        }}
        backBehavior="initialRoute"
        detachInactiveScreens={true}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName: keyof IIcons = 'home';
            let text: string = '';

            if (route.name === 'home') {
              iconName = 'home';
              text = 'Productos';
            } else if (route.name === 'new') {
              iconName = 'new';
              text = 'Crear Producto';
            } else if (route.name === 'favourites') {
              iconName = 'favourites';
              text = 'Guardados';
            }
            return (
              <View
                style={[
                  styles.tab_container,
                  focused && styles.tab_container_focused,
                ]}>
                <View style={styles.icon_container}>
                  <Image source={icons[iconName]} style={styles.icon} />
                </View>
                <Text adjustsFontSizeToFit style={styles.text}>
                  {text}
                </Text>
              </View>
            );
          },
          headerShown: false,
        })}>
        <Tab.Screen
          name="home"
          component={Home}
          initialParams={{itemId: 'home'}}
          options={{unmountOnBlur: true}}
        />
        <Tab.Screen
          name="new"
          component={EditProduct}
          initialParams={{itemId: 'new'}}
          options={{unmountOnBlur: true}}
        />
        <Tab.Screen
          name="favourites"
          component={Home}
          initialParams={{itemId: 'favourites'}}
          options={{unmountOnBlur: true}}
        />
      </Tab.Navigator>
    </>
  );
};
