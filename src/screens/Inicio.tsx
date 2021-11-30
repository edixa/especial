import React, {useState } from "react";
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";

const Inicio = () => {
  const [Estudiante, setEstudiante] = useState<string>("")
  const [PrimerParcial, setPrimerParcial] = useState("")
  const [SegundoParcial, setSegundoParcial] = useState("")
  const [NotaFinal, setNotaFinal] = useState<number>(0)
  const [CrearLista, setCrearLista] = useState<string[]>([0])


  const agregarEstudiante = () => {
    const divisor = 2;
    const NotaFinal = (parseFloat(PrimerParcial) + parseFloat(SegundoParcial)) / divisor;
    setNotaFinal(NotaFinal);

    setCrearLista([...CrearLista,Estudiante]);
  };

  return (
    <View style={styles.containerBase}>
      <View style={styles.container}>
        <TextInput
          placeholder={"Nombre del Estudiante"}
          onChangeText={setEstudiante}
        />
      </View>
      <View style={styles.title}>
        <TextInput placeholder={"IP"} onChangeText={setPrimerParcial} />
      </View>
      <View style={styles.title}>
        <TextInput placeholder={"IIP"} onChangeText={setSegundoParcial} />
      </View>
      <View style={styles.title}>
        <Text>{NotaFinal.toString()}</Text>
      </View>
      <Button color="#C4C4C4" title="Agregar" onPress={agregarEstudiante} />

      <ScrollView>
        {CrearLista.map((lista, index,resultado) => (
          <View style={styles.container} key={index}>
            <Text style={styles.text}>{lista}</Text>
            <Text>Nota Final:{NotaFinal.toString()}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Inicio;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginLeft: 10,
    marginTop: "10%",
    borderWidth: 3,
    borderColor: "#22B5A3",
  },
  text: {
    fontSize: 24,
    color: '#8C8A8A'
  },
  containerBase: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  inputs: {
    backgroundColor: "#F2F8FB",
    borderRadius: 8,
    padding: 16,
    textAlign: "right",
    fontSize: 22,
    fontWeight: "bold",
    color: "#004445",
  },
  title: {
    width: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#0cedb9",
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 9,
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 3,
    borderColor: "#8C8A8A",
  },
});