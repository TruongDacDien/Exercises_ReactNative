import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BT04_AddScreen({ navigation, route }) {
    const [todoContent, setTodoContent] = useState('');
    const [deadlineDay, setDeadlineDay] = useState('');
    const [deadlineTime, setDeadlineTime] = useState('');
    const { loadTodos, studentId } = route.params;

    const saveTodo = async () => {
        if (!todoContent || !deadlineDay || !deadlineTime) {
            Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin');
            return;
        }

        // Kiểm tra định dạng ngày (DD/MM/YYYY) và giờ (HH:MM) đơn giản
        const dayPattern = /^\d{2}\/\d{2}\/\d{4}$/; // Định dạng DD/MM/YYYY
        const timePattern = /^\d{2}:\d{2}$/; // Định dạng HH:MM
        if (!dayPattern.test(deadlineDay) || !timePattern.test(deadlineTime)) {
            Alert.alert('Lỗi', 'Định dạng ngày (DD/MM/YYYY) hoặc giờ (HH:MM) không đúng');
            return;
        }

        try {
            const storedTodos = await AsyncStorage.getItem('todos');
            const todos = storedTodos ? JSON.parse(storedTodos) : [];

            const newTodo = {
                idTodo: Date.now(),
                idStudent: studentId,
                todoContent,
                deadlineDay,
                deadlineTime,
            };

            const updatedTodos = [...todos, newTodo];
            await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));

            Alert.alert('Thành công', 'Công việc đã được lưu!', [
                {
                    text: 'OK',
                    onPress: () => {
                        loadTodos();
                        navigation.goBack();
                    },
                },
            ]);
        } catch (error) {
            Alert.alert('Lỗi', 'Không thể lưu công việc');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thêm TODO</Text>

            <TextInput
                style={styles.input}
                placeholder="Nhập nội dung công việc..."
                placeholderTextColor="#888"
                value={todoContent}
                onChangeText={setTodoContent}
            />
            <TextInput
                style={styles.input}
                placeholder="Nhập ngày (DD/MM/YYYY)..."
                placeholderTextColor="#888"
                value={deadlineDay}
                onChangeText={setDeadlineDay}
            />
            <TextInput
                style={styles.input}
                placeholder="Nhập giờ (HH:MM)..."
                placeholderTextColor="#888"
                value={deadlineTime}
                onChangeText={setDeadlineTime}
            />

            <TouchableOpacity style={styles.addButton} onPress={saveTodo}>
                <Text style={styles.buttonText}>Lưu</Text>
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
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#3D85C6',
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 15,
        backgroundColor: '#fff',
        color: '#333',
    },
    addButton: {
        backgroundColor: 'green',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});