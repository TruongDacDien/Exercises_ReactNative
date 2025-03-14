import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [accounts, setAccounts] = useState([
    {username: 'User1', password: '123'},
    {username: 'User2', password: '321'},
  ])

  const handleLogin = () => {
    const userExists = accounts.some(account => account.username === username && account.password === password);

    if (userExists) {
      Alert.alert('Success', 'Login successful!', [
        { text: 'OK', onPress: () => navigation.navigate('Home', { username }) }
      ]);
    } else {
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput
        style = {styles.input}
        placeholder='Placeholder'
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style = {styles.input}
        placeholder='..... .... ....'
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Confirm and Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
    margin: 5,
    marginTop: 30
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  label: {
    alignSelf:'flex-start',
    fontSize:16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal:10,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});