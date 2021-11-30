import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Inicio = () => {

    const [PrimerParcial, setPrimerParcial] = useState<number>(0)
    const [SegundoParcial, setSegundoParcial] = useState<number>(0)
    const [NotaFinal, setNotaFinal] = useState<number>(0)

    const calCalificaciones= () =>{
        let calculo= ((PrimerParcial) + (SegundoParcial)/2)
        setNotaFinal(calculo)


    }

return (
    <View style={styles.container}>
        <View>
            <Text style={styles.Title}>Calificaciones<Text/>
            <Text>Nombre del Estudiante<Text/>

            <TextInput placeholder="IP"></TextInput>

            <TextInput placeholder="IP"></TextInput>

            <TextInput>NF</TextInput>

            <TouchableOpacity style={styles.botonAgregar} onPress=('') >
            <Text style={styles.textbotonAgregar}>Agregar</Text>
            </TouchableOpacity>
        </View>

    </View>

    )
}

export default Inicio

const styles = StyleSheet.create({
    inputs: {
        backgroundColor: '#F2F8FB',
        borderRadius: 8,
        padding: 10,
        textAlign: 'right',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445'

    },
    text: {

        fontSize: 34,
        color: '#034C50',

    },
    container: {
        flex: 1,
        backgroundColor: '#dbd5e3',
        width: '95%',
        marginLeft: 10
    },
    botonAgregar: {
        backgroundColor: '#754bad',
        borderRadius: 15,
        width: '100%',
        marginHorizontal: 10,
        marginLeft: 1,
        marginRight: 1,
        paddingVertical: 7,
        marginTop: 1
    },
    textbotonAgregar: {
        color: '#f3f2f5',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'
    },
    resultText: {
        fontSize: 20,
        fontStyle: 'normal',
        color: '#034C50'
    }
})

