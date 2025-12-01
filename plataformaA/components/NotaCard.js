import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function NotaCard({ disciplina, nota }) {
  return (
    <View style={styles.card}>
      <Ionicons name="school-outline" size={30} color={"#0f62fe"} />
      <View style={{ marginLeft: 12 }}>
        <Text style={styles.cardTitulo}>{disciplina}</Text>
        <Text style={styles.cardNota}>{nota}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 12,
  },
  cardTitulo: {
    fontSize: 15,
    color: "#333",
  },
  cardNota: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
