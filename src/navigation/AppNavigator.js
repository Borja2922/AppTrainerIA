import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Step1_AgeScreen from '../screens/Step1_AgeScreen';
import Step2_GenderScreen from '../screens/Step2_GenderScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Step1">
        <Stack.Screen name="Step1" component={Step1_AgeScreen} />
        <Stack.Screen name="Step2" component={Step2_GenderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}