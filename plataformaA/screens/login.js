import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import logo from "../assets/logo.png";

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erroMessage, setErroMessage] = useState("");

  const validate = () => {
    console.log({
      usuario,
      senha,
      usuarioType: typeof usuario,
      senhaType: typeof senha,
    });

    if (String(usuario).length < 11) {
      setErroMessage("Usuário inválido");
    } else if (String(senha).length < 6) {
      setErroMessage("Senha inválida");
    } else {
      //Alert.alert("Login realizado com sucesso!");
      navigation.navigate("perfil");
    }
  };

  const handlerUser = (value) => {
    setUsuario(value);
    setErroMessage("");
  };

  const handlerSenha = (value) => {
    setSenha(value);
    setErroMessage("");
  };

  return (
    <View  iew style={styles.container}>
      <View style={styles.card}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Bem-vindo Guampa Torta</Text>

        <Text style={styles.error}>Informe o Usuário</Text>

        {erroMessage.length > 0 && (
          <Text style={styles.error}>{erroMessage}</Text>
        )}

        <TextInput
          placeholder="Usuário"
          keyboardType="numeric"
          placeholderTextColor="#9aa0a6"
          style={styles.input}
          onChangeText={handlerUser}
          value={usuario}
        />

        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={true}
          placeholderTextColor="#9aa0a6"
          onChangeText={handlerSenha}
          value={senha}
        />

        <TouchableOpacity style={styles.Button} onPress={validate}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.rowBetween}>
          <TouchableOpacity>
            <Text style={styles.link}>Esqueci o Usuário</Text>
          </TouchableOpacity>

          <Text style={styles.dividerText}>ou</Text>

          <TouchableOpacity>
            <Text style={styles.link}>Esqueci a Senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    maxHeight: 420,
    backgroundColor: "#f8f8f8",
    borderRadius: 14,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 5,
  },
  logo: {
    width: 210,
    height: 80,
    alignSelf: "center",
  },
  title: {
    marginTop: 12,
    fontSize: 15,
    color: "#6b7280",
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 12,
  },
  input: {
    height: 46,
    borderColor: "#d1d5db",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    fontSize: 15,
  },
  Button: {
    backgroundColor: "#2c3b48",
    height: 46,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  link: {
    color: "#c8003c",
    fontSize: 14,
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#9aa0a6",
    fontSize: 14,
  },
  error: {
    color: "#c8003c",
    textAlign: "center",
    marginBottom: 8,
  },
});
