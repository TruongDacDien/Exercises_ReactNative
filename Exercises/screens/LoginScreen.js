import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { students } from './Data';

export default function LoginScreen({ route, navigation }) {
  const { targetScreen } = route.params || {};

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Tạo ref để điều hướng focus
  const passwordInputRef = useRef(null);

  const handleLogin = () => {
    const student = students.find(student => student.username === username && student.password === password);

    if (student) {
      const studentId = student.idStudent;
      Alert.alert('Success', 'Login successful!', [
        {
          text: 'OK', onPress: () => {
            if (targetScreen) {
              navigation.navigate(targetScreen, { username, studentId });
            } else {
              navigation.navigate('Home');
            }
          }
        }
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
        style={styles.input}
        placeholder='Placeholder'
        placeholderTextColor="#888"
        value={username.trim()}
        onChangeText={setUsername}
        returnKeyType="next" // Nhấn Enter sẽ chuyển sang ô tiếp theo
        onSubmitEditing={() => passwordInputRef.current?.focus()} // Khi nhấn Enter sẽ focus vào ô password
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        ref={passwordInputRef} // Gán ref vào ô mật khẩu
        style={styles.input}
        placeholder='..... .... ....'
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        returnKeyType="done" // Nhấn Enter sẽ ẩn bàn phím
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
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