import React, {useState } from "react";
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";

const Inicio = () => {
  const [Estudiante, setEstudiante] = useState<string>("")
  const [PrimerParcial, setPrimerParcial] = useState<string>("")
  const [SegundoParcial, setSegundoParcial] = useState<string>("")
  const [NotaFinal, setNotaFinal] = useState<number>(0)
  const [CrearLista, setCrearLista] = useState<string[]>([])


  const agregarEstudiante = () => {

    const dividir = 2;
    const NotaFinal = (parseFloat(PrimerParcial) + parseFloat(SegundoParcial)) / dividir;
    setNotaFinal(NotaFinal);

    setCrearLista([...CrearLista,Estudiante]);
  };

  return (
      
    <View style={styles.containerBase}>
        <View style={styles.inputs}>
            <Text>Calificaciones</Text>
        </View>
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          placeholder={"Nombre del Estudiante"}
          onChangeText={setEstudiante}
        />

      </View>
      <View style={styles.diseñobor}>
      <View style={styles.title}>
        <TextInput placeholder={"IP"} onChangeText={setPrimerParcial} />
      </View>
      <View style={styles.title}>
        <TextInput placeholder={"IIP"} onChangeText={setSegundoParcial} />
      </View>
      <View style={styles.title}>
        <Text>{NotaFinal}</Text>
      </View>
      <View style={{ marginHorizontal: '30%' }}>
      <Button color="#C4C4C4" title="Agregar" onPress={agregarEstudiante} />
      </View>
      </View>
      <ScrollView>
        {
        CrearLista.map((lista, index) => (
          <View style={styles.container} key={index}>
            <Text style={styles.text}>{lista}</Text>
            <Text style={styles.text}>Nota Final: {NotaFinal}</Text>
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
    marginTop: "2%",
    borderWidth: 3,
    borderColor: "#22B5A3",
  },
  text: {
    fontSize: 15,
    color: '#8C8A8A',
    width: '70%'
  },
  containerBase: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  inputs: {
    backgroundColor: "#8C8A8A",
    borderRadius: 2,
    padding: 20,
    textAlign: "right",
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    marginTop: '10%',
    marginHorizontal: 10
  },
  title: {
    width: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginLeft: 10,
    marginTop: 3,
    borderWidth: 2,
    borderColor: "#8C8A8A",
  },
  diseñobor:{
      flexDirection:'row',
      width: '50%',
      marginTop:20,

  },
  container2:{
    fontSize: 10
  }
});