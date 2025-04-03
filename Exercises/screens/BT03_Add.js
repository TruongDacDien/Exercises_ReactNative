import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function BT03_AddScreen({ navigation }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [salary, setSalary] = useState('');
    const [profile_image, setProfileImage] = useState('');

    const handleAddEmployee = async () => {
        if (!name || !age || !salary) {
            Alert.alert('Error', 'Please fill all required fields!');
            return;
        }

        try {
            const response = await fetch('http://blackntt.net:88/api/v1/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    employee_name: name,
                    employee_age: age.toString(),
                    employee_salary: salary.toString(),
                    profile_image: profile_image.toString()
                })
            });

            if (!response.ok) {
                throw new Error('Failed to add employee.');
            }

            const data = await response.json();
            Alert.alert('Success', 'Employee added successfully!');
            navigation.goBack(); // Quay lại màn hình trước
        } catch (error) {
            Alert.alert('Error', error.message || 'An error occurred while adding employee.');
        }
    };

    const handleDefaultImage = () => {
        setProfileImage('https://reactnative.dev/img/header_logo.svg');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add New Employee</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter age"
                keyboardType="numeric"
                value={age}
                onChangeText={setAge}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter salary"
                keyboardType="numeric"
                value={salary}
                onChangeText={setSalary}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter image URL (optional)"
                value={profile_image}
                onChangeText={setProfileImage}
            />
            <TouchableOpacity style={styles.button} onPress={handleDefaultImage}>
                <Text style={styles.buttonText}>Default Image</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleAddEmployee}>
                <Text style={styles.buttonText}>Add Employee</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        margin: 20
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});
