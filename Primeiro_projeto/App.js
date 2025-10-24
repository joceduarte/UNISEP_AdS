import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [valor, setValor] = useState(0);
  const [seuNome, setSeuNome] = useState('Teste');

  function add() {
    setValor(valor + 1);

    function rmv() {
      setValor(valor - 1);
    }
    return (
      <View style={styles.container}>
        <Text>{valor}</Text>

        <Button
          title="Adicionar"
          onPress={() => {
            add();
          }}
        />

        <Button
          title="Remover"
          onPress={() => {
            rmv();
          }}
        />

        <TextInput onChangeText={seuNome} value="seuNome"
        style=({
          borderwidth: 50,
          width: 200,
          height: 200,
        });
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}
