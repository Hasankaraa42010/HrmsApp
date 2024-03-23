import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screen/LoginScreen';
import HomePage from './Screen/HomePage';
import SignUpScreen from './Screen/SignUpScreen';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpScreen">
        <Stack.Screen name="Kaydolma" component={SignUpScreen} />
        <Stack.Screen name="Ana Sayfa" component={HomePage} />
        
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
