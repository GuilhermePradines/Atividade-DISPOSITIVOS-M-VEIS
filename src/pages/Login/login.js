import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Avatar, Input, Button } from "react-native-elements";
import { useState } from "react";
import { signIn } from "../../Service/firebaseService"; 


export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const handleLogin = async () => {
    const logar = await signIn(email, senha);
    alert("Usuário logado com sucesso!",logar.email);
    navigation.navigate("ListaContatos");
  };

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="large"
        icon={{ name: "user", type: "font-awesome" }}
        containerStyle={styles.avatar}/>
      <Input label="Email" placeholder="Digite seu email" onChangeText={setEmail} />
      <Input label="Senha" placeholder="Digite sua senha" secureTextEntry onChangeText={setSenha}/>
      <Button title="Logar" buttonStyle={styles.button} onPress={()=>navigation.navigate('ListaContatos')} />
      <Button title="Cadastre-se" buttonStyle={styles.button} onPress={()=>navigation.navigate('Cadastro')} />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>esqueceu a senha</Text>
      </TouchableOpacity>
    </View>
  );
};

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