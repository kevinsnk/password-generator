import Clipboard from '@react-native-clipboard/clipboard';
import { useState } from "react";
import { Switch, Text, TextInput, View } from "react-native";

export default function App() {
  const [password, setPassword] = useState('');
  const [passwordLenght, setPasswordLenght] = useState('12');
  const [useSymbols, setUseSymbols] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useLowerCase, setLowerCase] = useState(true);
  const [useUpperCase, setUpperCase] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

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
    <View>
      <Text>
        Password Generator
      </Text>
      <View>
        <Text>
          Tamaño de la contraseña
        </Text>
        <TextInput keyboardType="numeric" value={passwordLenght}
          onChangeText={(text) => setPasswordLenght(text)} />
      </View>
      <View>
        <Switch value={useSymbols} onValueChange={() => setUseSymbols(!useSymbols)} />
        <Text>
          Symbols
        </Text>
      </View>
    </View>
  )
}

