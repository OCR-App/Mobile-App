import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import PreviewScreen from '../screens/PreviewScreen';
import ResultScreen from '../screens/ResultScreen';
import IpScreen from '../screens/IpScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const appTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#1E1E1E',
    },
  };

  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator
        initialRouteName="Ip"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Ip" component={IpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Preview" component={PreviewScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
