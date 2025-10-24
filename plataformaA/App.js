import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import logo from "./assets/logo.png";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Welcome to the App!</Text>
        <TextInput
          placeholder="Usuario"
          keyboardType="numeric"
          placeholderTextColor="#9aa0a6"
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={true}
          placeholderTextColor="#9aa0a6"
        />
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.rowBetween}>
          <TouchableOpacity>
            <Text style={styles.link}>Esqueci o Usuario</Text>
          </TouchableOpacity>

          <Text style={styles.dividerText}>ou </Text>

          <TouchableOpacity>
            <Text style={styles.link}>Esqueci a senha </Text>
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
    color: "#9aa0",
    fontSize: 14,
  },
});
