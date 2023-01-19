
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import bemVindo from '../src/screens/bemVindo'
import telaCadastro from '../src/screens/telaCadastro'
import telaLogin from '../src/screens/telaLogin'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
  
      <Stack.Navigator>
      <Stack.Screen
            name="bemVindo"
            component={bemVindo}
            />
             <Stack.Screen
            name="telaCadastro"
            component={telaCadastro}
            />
             <Stack.Screen
            name="telaLogin"
            component={telaLogin}
            />
      </Stack.Navigator>
    
  );
}




