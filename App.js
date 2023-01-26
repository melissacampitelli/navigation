import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BemVindo from './src/screens/BemVindo/BemVindo.js'
import TelaCadastro from './src/screens/TelaCadastro/TelaCadastro.js'
import TelaLogin from './src/screens/TelaLogin/TelaLogin.js'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
            name="BemVindo"
            component={BemVindo}
            />
             <Stack.Screen
            name="TelaCadastro"
            component={TelaCadastro}
            />
             <Stack.Screen
            name="TelaLogin"
            component={TelaLogin}
            />
      </Stack.Navigator>
      </NavigationContainer>
    
  );
}



