import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BMIScreen from './screens/BMI';
import HomeScreen from './screens/HomeScreen';
import StopWatchScreen from './screens/StopWatch';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BMI" component={BMIScreen}/>
        <Stack.Screen name="Stop Watch" component={StopWatchScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
