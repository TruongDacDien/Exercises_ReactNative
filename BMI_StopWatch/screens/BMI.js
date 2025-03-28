import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function BMIScreen() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(0);

    const compute = () => {
        let w = parseFloat(weight);
        let h = parseFloat(height);

        if (!w || !h || h <= 0) {
            setBmi(0);
            return;
        }

        let bmiValue = w / Math.pow(h / 100, 2);
        setBmi(bmiValue);
    };

    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <Text style={styles.title}>Weight (KG)</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={weight}
                    onChangeText={setWeight}
                    placeholder="Enter weight"
                />
            </View>
            <View style={styles.group}>
                <Text style={styles.title}>Height (CM)</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={height}
                    onChangeText={setHeight}
                    placeholder="Enter height"
                />
            </View>
            <View style={styles.center}>
                <View style={styles.group}>
                    <Text style={styles.title}>BMI: {bmi.toFixed(2)}</Text>
                </View>
                <View style={styles.group}>
                    <TouchableOpacity style={styles.button} onPress={compute}>
                        <Text style={styles.buttonText}>Compute</Text>
                    </TouchableOpacity>
                </View>
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
    group: {
        marginTop: 20,
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 20,
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        padding: 10,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    center: {
        alignItems: 'center',
    },
});

