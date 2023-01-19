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
            name="bemVindo"
            component={BemVindo}
            />
             <Stack.Screen
            name="telaCadastro"
            component={TelaCadastro}
            />
             <Stack.Screen
            name="telaLogin"
            component={TelaLogin}
            />
      </Stack.Navigator>
      </NavigationContainer>
    
  );
}



