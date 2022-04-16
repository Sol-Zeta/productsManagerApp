import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Home,
  Onboarding,
  EditProduct,
  ProductDetail,
  Splash,
} from '../../screens';
import { BottomBar } from '../BottomBar';

const MainNavigation: () => JSX.Element = () => {
  const Stack = createStackNavigator();
  const navigationRef = useNavigationContainerRef<any>();
  return (
    <NavigationContainer ref={navigationRef} independent={true}>
      <Stack.Navigator
        initialRouteName='navigation'
        screenOptions={{
          animationEnabled: true,
          gestureEnabled: false,
          headerShown: false,
        }}>
        <Stack.Screen name='productDetail' component={ProductDetail} />
        <Stack.Screen name='editProduct' component={EditProduct} />
        <Stack.Screen name='splash' component={Splash} />
        <Stack.Screen name='onboarding' component={Onboarding} />
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='navigation' component={BottomBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
