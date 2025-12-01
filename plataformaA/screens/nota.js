import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// componente reutilizavel
import NotaCard from "../components/NotaCard";

export default function Notas({ navigation }) {
  // UseState
  const [notas, setNotas] = useState([
    { id: 1, disciplina: "Algoritmos", nota: 9.0 },
    { id: 2, disciplina: "Banco de Dados", nota: 8.5 },
    { id: 3, disciplina: "Engenharia de Software", nota: 7.8 },
    { id: 4, disciplina: "Programação Mobile", nota: 10 },
  ]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.voltar}
        // Navegacao
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={26} color="#c8003c" />
        <Text style={styles.voltarTexto}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Minhas Notas</Text>

      <ScrollView style={{ marginTop: 15 }}>
        {notas.map((n) => (
          <NotaCard key={n.id} disciplina={n.disciplina} nota={n.nota} />
        ))}
      </ScrollView>
    </View>
  );
}

// estilos aqui
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  voltar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  voltarTexto: {
    fontSize: 18,
    marginLeft: 8,
    color: "#c8003c",
    fontWeight: "bold",
  },
});
