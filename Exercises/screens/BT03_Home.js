import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BT03_HomeScreen({ route, navigation }) {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchEmployees = () => {
        setLoading(true);
        fetch('http://blackntt.net:88/api/v1/employees')
            .then(response => response.json())
            .then(data => {
                setEmployees(data);
                setLoading(false);
            })
            .catch(error => {
                Alert.alert('Error', 'Can not load employee list!');
                setLoading(false);
            });
    };

    useFocusEffect(
        useCallback(() => {
            fetchEmployees();
        }, [])
    );


    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Employee List</Text>
            <FlatList
                data={employees}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate('BT03_Detail', { employee: item })}
                    >
                        <View style={styles.row}>
                            <Text style={styles.employeeName}>{item.employee_name}</Text>
                            <Text style={styles.employeeAge}>| Age: {item.employee_age}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                contentContainerStyle={{ paddingBottom: 120 }} // Tránh chồng lên button
            />

            {/* Nút Add và Refresh */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.circleButton} onPress={() => navigation.navigate('BT03_Add')}>
                    <Ionicons name="add" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleButton} onPress={fetchEmployees}>
                    <Ionicons name="refresh" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    item: {
        backgroundColor: '#0063EC',
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        margin: 10
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    employeeName: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'left',
        color: 'white'
    },
    employeeAge: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
        color: 'white'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20, // Đưa nút xuống gần đáy
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        paddingHorizontal: 40, // Tạo khoảng cách từ mép màn hình
    },
    circleButton: {
        width: 55, // Giảm kích thước cho gọn
        height: 55,
        backgroundColor: 'green',
        borderRadius: 30, // Hình tròn
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // Đổ bóng Android
        shadowColor: '#000', // Đổ bóng iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
});
