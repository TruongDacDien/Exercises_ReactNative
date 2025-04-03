import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { subjects, todolists } from './Data';

export default function BT04_HomeScreen({ route, navigation }) {
    const [todos, setTodos] = useState([]);
    const { studentId } = route.params;

    useEffect(() => {
        loadTodos();
    }, [studentId]);

    const loadTodos = async () => {
        if (!studentId) {
            Alert.alert('Error', 'Student ID is missing');
            return;
        }
        try {
            // Lấy dữ liệu từ AsyncStorage
            const storedTodos = await AsyncStorage.getItem('todos');
            let allTodos;

            if (storedTodos === null) {
                allTodos = todolists;
                await AsyncStorage.setItem('todos', JSON.stringify(todolists));
            } else {
                allTodos = JSON.parse(storedTodos);
            }

            const studentTodos = allTodos.filter(todo => todo.idStudent === studentId);
            setTodos(studentTodos);
        } catch (error) {
            Alert.alert('Error', 'Failed to load todos');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TODO List</Text>
            <FlatList
                data={todos}
                keyExtractor={item => item.idTodo.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate('BT04_Detail', {loadTodos, todo: item })}
                    >
                        <View style={styles.todoInfo}>
                            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
                                {item.todoContent}
                            </Text>
                            <Text style={styles.deadline}>
                                {item.deadlineDay} - {item.deadlineTime}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('BT04_Add', { loadTodos, studentId })}
            >
                <Ionicons name="add" size={30} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
    item: { backgroundColor: '#0063EC', padding: 15, marginVertical: 5, borderRadius: 8 },
    text: { color: 'white', fontSize: 18 , fontWeight: 'bold'},
    deadline: { color: 'yellow', fontSize: 12, fontWeight: 'bold'},
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 30,
    },
});