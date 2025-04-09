import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

export default function EditarContato() {
  return (
    <View style={styles.container}>
      

      <Input label="Nome"  />

      <Input label="Email"  keyboardType="email-address"/>

      <Input label="Telefone"  />

      <Button title="Alterar" buttonStyle={styles.Alterar} />
      <Button title="Excluir" buttonStyle={styles.Excluir} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      
    },
    avatar: {
      marginBottom: 20,
      backgroundColor: "#2ECC71",
    },
    button: {
      width: 200,
      marginVertical: 10,
      backgroundColor: "#2ECC71",
    },
    forgotPassword: {
      marginTop: 10,
      color: "black",
      fontWeight: "bold",
    },

    Alterar: {
      width: 200,
      marginVertical: 10,
      backgroundColor: "#0000ff",
    },

    Excluir: {
      width: 200,
      marginVertical: 10,
      backgroundColor: "#ff0000",
    },
  });
