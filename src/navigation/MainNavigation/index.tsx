import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import {
  createStackNavigator
} from '@react-navigation/stack';
import { MainBackground } from '../../components/MainBackground';
import { MainNavigationParams } from '../../interfaces';
import { styles } from './styles'

const MainNavigation: () => JSX.Element = () => {
  const Stack = createStackNavigator<MainNavigationParams>();
  const navigationRef = useNavigationContainerRef<any>();
  return (
    <MainBackground>
     <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: true,
          gestureEnabled: false,
        }}
      >
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    </MainBackground>
  );
};

export default MainNavigation;