import { View, Alert, StyleSheet, Text, ScrollView } from "react-native";
import { subjects } from "./Data";

export default function BT02_DetailScreen({ route }) {
    const { subjectId } = route.params;

    const subjectDetail = subjects.find(subject => subject.idSubject === subjectId);
    if (subjectDetail) {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollview}>
                    <Text style={styles.title}>Chi tiết môn học</Text>
                    <View style={styles.group}>
                        <Text style={styles.text}>Tên môn học: {subjectDetail.name}</Text>
                        <Text style={styles.text}>Mã môn học: {subjectDetail.code}</Text>
                        <Text style={styles.text}>Giáo viên: {subjectDetail.teacher}</Text>
                        <Text style={styles.text}>Buổi học: {subjectDetail.day} / {subjectDetail.time}</Text>
                        <Text style={styles.text}>Phòng học: {subjectDetail.room}</Text>
                        <Text style={styles.text}>Ngày bắt đầu: {subjectDetail.start}</Text>
                        <Text style={styles.text}>Ngày kết thúc: {subjectDetail.end}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    } else {
        Alert.alert('Error', 'Can not load subject information!');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    scrollview: {
        flex: 1
    },
    group: {
        margin: 10,
        backgroundColor: "#0063EC",
        padding: 20,
        borderRadius: 10
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        margin: 10
    }
});