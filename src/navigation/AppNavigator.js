import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Step1_AgeScreen from '../screens/Step1_AgeScreen';
import Step2_GenderScreen from '../screens/Step2_GenderScreen';
import Step3_QuestionsScreen from '../screens/Step3_QuestionsScreen';
import Step4_ResultScreen from '../screens/Step4_ResultScreen';
import Step5_RutinaScreen from '../screens/Step5_RutinaScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Step1">
        <Stack.Screen name="Step1" component={Step1_AgeScreen} />
        <Stack.Screen name="Step2" component={Step2_GenderScreen} />
        <Stack.Screen name="Step3" component={Step3_QuestionsScreen} />
        <Stack.Screen name="Step4" component={Step4_ResultScreen} />
        <Stack.Screen name="Step5" component={Step5_RutinaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}