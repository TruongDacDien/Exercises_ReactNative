import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import BT01_HomeScreen from './screens/BT01_Home';
import BT02_HomeScreen from './screens/BT02_Home';
import BT02_DetailScreen from './screens/BT02_Detail';
import BT03_HomeScreen from './screens/BT03_Home';
import BT03_DetailScreen from './screens/BT03_Detail';
import BT03_AddScreen from './screens/BT03_Add';
import BT04_HomeScreen from './screens/BT04_Home';
import BT04_DetailScreen from './screens/BT04_Detail';
import BT04_AddScreen from './screens/BT04_Add';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="BT01_Home" component={BT01_HomeScreen}/>
        <Stack.Screen name="BT02_Home" component={BT02_HomeScreen}/> 
        <Stack.Screen name="BT02_Detail" component={BT02_DetailScreen}/>
        <Stack.Screen name="BT03_Home" component={BT03_HomeScreen}/>
        <Stack.Screen name="BT03_Detail" component={BT03_DetailScreen}/>
        <Stack.Screen name="BT03_Add" component={BT03_AddScreen}/>
        <Stack.Screen name="BT04_Home" component={BT04_HomeScreen}/>
        <Stack.Screen name="BT04_Detail" component={BT04_DetailScreen}/>
        <Stack.Screen name="BT04_Add" component={BT04_AddScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
