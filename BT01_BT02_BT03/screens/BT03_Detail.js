import { View, Alert, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput, Image } from "react-native";
import { useState } from "react";
import { SvgUri } from 'react-native-svg';

export default function BT03_DetailScreen({ route, navigation }) {
    const { employee } = route.params;

    const [id, setId] = useState(employee?.id || "");
    const [name, setName] = useState(employee?.employee_name || "");
    const [age, setAge] = useState(employee?.employee_age?.toString() || "");
    const [salary, setSalary] = useState(employee?.employee_salary?.toString() || "");
    const [profile_image, setProfileImage] = useState(employee?.profile_image?.toString() || "");

    if (!employee) {
        Alert.alert('Error', 'Can not load employee information!');
        return null;
    }

    const handleSave = async () => {
        try {
            const response = await fetch(`http://blackntt.net:88/api/v1/update/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    employee_name: name,
                    employee_age: age.toString(),
                    employee_salary: salary.toString(),
                    profile_image: profile_image.toString()
                })
            });

            const data = await response.json();

            if (response.ok) {
                Alert.alert('Success', 'Employee updated successfully!');
            } else {
                Alert.alert('Error', data.message || 'Failed to update employee.');
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred while updating.');
        }
    };

    const handleDelete = async () => {
        Alert.alert(
            'Confirm Delete',
            'Are you sure you want to delete this employee?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            const response = await fetch(`http://blackntt.net:88/api/v1/delete/${id}`, {
                                method: 'DELETE'
                            });

                            if (!response.ok) {
                                throw new Error('Failed to delete employee.');
                            }

                            Alert.alert('Success', 'Employee deleted successfully!');
                            navigation.goBack(); // Quay lại màn hình trước
                        } catch (error) {
                            Alert.alert('Error', error.message || 'An error occurred while deleting.');
                        }
                    }
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollview}>
                <Text style={styles.title}>Employee detail information</Text>
                <View style={styles.group}>
                    <View style={styles.imageContainer}>
                        {profile_image.endsWith('.svg') ? (
                            <SvgUri uri={profile_image} style={styles.image} />
                        ) : (
                            <Image source={{ uri: profile_image }} style={styles.image} />
                        )}
                        <TouchableOpacity style={styles.imageButton} onPress={() => setProfileImage('https://reactnative.dev/img/header_logo.svg')}>
                            <Text style={styles.imageButtonText}>Default Image</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputGroup}>
                        <View style={styles.row}>
                            <Text style={styles.label}>Name:</Text>
                            <TextInput
                                style={styles.input}
                                value={name}
                                onChangeText={setName}
                                placeholder="Enter name"
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Age:</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                value={age}
                                onChangeText={setAge}
                                placeholder="Enter age"
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Salary:</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                value={salary}
                                onChangeText={setSalary}
                                placeholder="Enter salary"
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleSave}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleDelete}>
                        <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
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
        backgroundColor: "#3D3D3D",
        padding: 20,
        borderRadius: 10
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFD154',
        width: 80
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        color: '#000'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    button: {
        backgroundColor: 'green',
        padding: 15,
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 10,
        flex: 1,
        marginHorizontal: 5
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 20,
        resizeMode: 'cover'
    },
    imageButton: {
        marginTop: 10,
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
    },
    imageButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
