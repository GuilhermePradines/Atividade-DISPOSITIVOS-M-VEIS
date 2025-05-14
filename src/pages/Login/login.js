import React from "react";
import { View, StyleSheet, TouchableOpacity, Text,Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Avatar, Input, Button } from "react-native-elements";
import { useState } from "react";
import { signIn } from "../../Service/firebaseService"; 



export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const handleLogin = async () => {
    try {
      const logar = await signIn(email, senha);

      if (logar && logar.email) {
      Alert.alert("Login realizado", `Bem-vindo(a), ${logar.email}`);
      console.log("navegando ...")
      navigation.navigate('ListaContatos');
    }
    } catch (error) {
      Alert.alert("Erro ao logar", error.message);
    }
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
      <Button title="Logar" buttonStyle={styles.button} onPress={handleLogin} />
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