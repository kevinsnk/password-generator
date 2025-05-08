import Clipboard from '@react-native-clipboard/clipboard';
import { useState } from "react";
import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function App() {
  const [password, setPassword] = useState('');
  const [passwordLenght, setPasswordLenght] = useState('12');
  const [useSymbols, setUseSymbols] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

  const styles = StyleSheet.create({

    container: {
      margin: 20,
      marginTop: 100,
      padding: 20,
      borderColor: '#ccc',
      borderRadius: 8,
      borderWidth: 1,
      shadowColor: 'grey',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 5,
      backgroundColor: '#fff',
    },
    header: {
      color: 'green',
      textAlign: 'center',
      fontSize: 30,
      marginBottom: 10,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    label: {
      flex: 1,
      fontSize: 18,
    },
    input: {
      flex: 2,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      fontSize: 16,
    },
    checkbox:{
      flex:1,
      padding: 10,
    },
    checkboxLabel: {
      fontSize: 20,
      flex:2
    },
    button: {
      padding: 13,
      backgroundColor: '#007bff',
      color: '#fff',
      borderRadius: 5,
      overflow: 'hidden',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      margin: 15,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    copyButton: {
      marginLeft: 10,
      backgroundColor: '#007bff',
      color: '#fff',
      borderRadius: 5,
      overflow: 'hidden',
      padding: 10,
      fontSize: 14,
    },
    successMessage: {
      color: 'green',
      textAlign: 'center',
      fontSize: 20,
    }
  })

  const generarPassword = () => {
    let charset = '';
    let newPassword = '';

    if (useSymbols) charset += '!@#$%^&*()';
    if (useNumbers) charset += '0123456789';
    if (useLowerCase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (useUpperCase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < parseInt(passwordLenght); i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
  }

  const copyToClipboard = () => {
    Clipboard.setString(password);
    setSuccessMessage('Contraseña copiada exitosamente');
    setTimeout(() => setSuccessMessage(''), 2000);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Password Generator
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Tamaño de la contraseña:
        </Text>
        <TextInput keyboardType="numeric" value={passwordLenght}
          onChangeText={(text) => setPasswordLenght(text)} style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Switch value={useSymbols} onValueChange={() => setUseSymbols(!useSymbols)} />
        <Text style={styles.checkboxLabel}>
          Symbols
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Switch value={useNumbers} onValueChange={() => setUseNumbers(!useNumbers)} />
        <Text style={styles.checkboxLabel}>
          Numbers
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Switch value={useLowerCase} onValueChange={() => setUseLowerCase(!useLowerCase)} />
        <Text style={styles.checkboxLabel}>
          LowerCase
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Switch value={useUpperCase} onValueChange={() => setUseUpperCase(!useUpperCase)} />
        <Text style={styles.checkboxLabel}>
          UpperCase
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={generarPassword}>
        <Text style={styles.buttonText}>
          Generar Contraseña
        </Text>
      </TouchableOpacity>
      {password !== '' && (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Contraseña Generada:
          </Text>
          <TextInput value={password} style={styles.input} />
          <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
            <Text style={styles.buttonText}>
              Copiar
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {successMessage !== '' && <Text style={styles.successMessage}>
        {successMessage}
      </Text>}
    </View>
  )
}

