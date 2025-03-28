import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { subjects } from './Data';

export default function BT02_HomeScreen({ route, navigation }) {
    const { username, studentId } = route.params;

    const subjectList = subjects.filter(subject => subject.idStudent === studentId);

    if (subjectList) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Thời khóa biểu của {username}</Text>
                <FlatList
                    data={subjectList}
                    keyExtractor={(item) => item.idSubject}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('BT02_Detail', { subjectId: item.idSubject })}>
                            <View style={styles.row}>
                                <Text style={styles.subjectNameText}>{item.name}</Text>
                                <Text style={styles.subjectDayText}>| {item.day}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    } else {
        Alert.alert('Error', 'Can not load student schedule!')
    }
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
        flexDirection: 'row', // Hiển thị ngang
        justifyContent: 'space-between', // Đẩy 2 Text về 2 phía
        width: '100%',
    },
    subjectNameText: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1, // Chiếm toàn bộ không gian còn lại
        textAlign: 'left', // Căn trái
        color: 'white'
    },
    subjectDayText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right', // Căn phải
        color: 'white'
    }
});