import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BT04_DetailScreen({ route, navigation }) {
    const { todo, loadTodos } = route.params;

    const deleteTodo = async () => {
        try {
            const storedTodos = await AsyncStorage.getItem('todos');
            const todos = storedTodos ? JSON.parse(storedTodos) : [];

            const updatedTodos = todos.filter(item => item.idTodo !== todo.idTodo);

            await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));

            loadTodos();
            Alert.alert('Thành công', 'Công việc đã được xóa!', [
                {
                    text: 'OK',
                    onPress: () => navigation.goBack(),
                },
            ]);
        } catch (error) {
            Alert.alert('Lỗi', 'Không thể xóa công việc');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TODO Detail</Text>

            <View style={styles.detailContainer}>
                <Text style={styles.label}>📌 Nội dung:</Text>
                <Text style={styles.text}>{todo.todoContent}</Text>

                <Text style={styles.label}>📅 Ngày hết hạn:</Text>
                <Text style={styles.text}>{todo.deadlineDay}</Text>

                <Text style={styles.label}>⏰ Giờ:</Text>
                <Text style={styles.text}>{todo.deadlineTime}</Text>
            </View>

            <TouchableOpacity style={styles.deleteButton} onPress={deleteTodo}>
                <Text style={styles.buttonText}>Xóa</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    detailContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#3D85C6',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3D85C6',
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        color: '#333',
        marginLeft: 20,
    },
    deleteButton: {
        backgroundColor: '#ff4444',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});