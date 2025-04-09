import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login/login';
import Cadastro from '../pages/Cadastro/cadastro';
import ListaContatos from '../pages/Home/ListaContatos';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CadastroContato from '../pages/CadastroContato/cadastroContato';
import EditarContato from '../pages/EditarContato/editarContato';
const HeaderRight = () => {
    const navigation = useNavigation();
  
    return (
      <TouchableOpacity onPress={() => navigation.navigate('CadastroContato')}>
        <Text style={{ color: 'white', fontSize: 24, marginRight: 15 }}>＋</Text>
      </TouchableOpacity>
    );
  };
const Stack = createStackNavigator();

export default function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerStyle: { backgroundColor: "#4169e1" } }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login", headerShown: false }}
          />

          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{ title: "Cadastro" }}
          />
          <Stack.Screen
            name="ListaContatos"
            component={ListaContatos}
            options={{
              title: "Lista de Contatos",
              headerRight: () => <HeaderRight />,
            }}
          />
          <Stack.Screen
            name="CadastroContato"
            component={CadastroContato}
            options={{ title: "Contato",headerTitleAlign:'center' }}
            />
            <Stack.Screen 
            name="EditarContato"
            component={EditarContato}
            options={{ title: "Editar Contato",headerTitleAlign:'center' }}
            />
    

            
        </Stack.Navigator>
      </NavigationContainer>
    );
}