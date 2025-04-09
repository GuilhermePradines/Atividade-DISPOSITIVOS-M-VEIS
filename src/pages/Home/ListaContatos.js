import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Avatar } from 'react-native-elements';


const contatos = [
  { id: '1', nome: 'Marcos Andrade', telefone: '81 988553424' },
  { id: '2', nome: 'Patrícia Tavares', telefone: '81 998765332' },
  { id: '3', nome: 'Rodrigo Antunes', telefone: '81 987765525' },
];

export default function ListaContatos({navigation}) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('EditarContato', { contato: item })}>
      <Avatar
              rounded
              size="large"
              icon={{ name: "user", type: "font-awesome" }}
              containerStyle={styles.avatar}/>
      <View>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text>{item.telefone}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
     

      <FlatList
        data={contatos}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#007bff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 16,
    backgroundColor: "#2ECC71",
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  separator: {
    height: 2,
    backgroundColor: '#ccc',

    
  },
});
