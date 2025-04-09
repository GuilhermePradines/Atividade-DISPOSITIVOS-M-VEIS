import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>
        Cadastro
      </Text>

      <Input label="Nome" placeholder="Digite seu nome" />

      <Input label="CPF" placeholder="Digite seu CPF" />

      <Input
        label="Email"
        placeholder="Digite seu email"
        keyboardType="email-address"
      />

      <Input label="Senha" placeholder="Digite sua senha" secureTextEntry />

      <Button title="Cadastrar" buttonStyle={styles.button} />
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
  });
