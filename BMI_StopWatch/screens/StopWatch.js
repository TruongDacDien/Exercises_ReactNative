import React, { useState, useRef } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';
import { ScrollView } from 'react-native';

export default function StopWatchScreen() {
    const [timeElapsed, setTimeElapsed] = useState(null);
    const [running, setRunning] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [laps, setLaps] = useState([]);
    const intervalRef = useRef(null);

    const handleStartPress = () => {
        if (running) {
            clearInterval(intervalRef.current);
            setRunning(false);
            return;
        }
        const start = new Date();
        setStartTime(start);
        setRunning(true);
        intervalRef.current = setInterval(() => {
            setTimeElapsed(new Date() - start);
        }, 30);
    };

    const handleLapPress = () => {
        setLaps([...laps, timeElapsed]);
        setStartTime(new Date());
    };

    const startStopButton = () => (
        <TouchableHighlight underlayColor="gray" onPress={handleStartPress} style={[styles.button, running ? styles.stopButton : styles.startButton]}>
            <Text>{running ? 'Stop' : 'Start'}</Text>
        </TouchableHighlight>
    );

    const lapButton = () => (
        <TouchableHighlight style={styles.button} underlayColor="gray" onPress={handleLapPress}>
            <Text>Lap</Text>
        </TouchableHighlight>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.timerWrapper}>
                    <Text style={styles.timer}>{formatTime(timeElapsed)}</Text>
                </View>
                <View style={styles.buttonWrapper}>
                    {lapButton()}
                    {startStopButton()}
                </View>
            </View>
            <View style={styles.footer}>
                <ScrollView style={{ flex: 1 }}>
                    {laps.map((time, index) => (
                        <View key={index} style={styles.lap}>
                            <Text style={styles.lapText}>Lap #{index + 1}</Text>
                            <Text style={styles.lapText}>{formatTime(time)}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    header: {
        flex: 1
    },
    footer: {
        flex: 1,
        margin: 20
    },
    timerWrapper: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWrapper: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    lap: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: 'lightgray',
        padding: 10,
        marginTop: 10
    },
    button: {
        borderWidth: 2,
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    timer: {
        fontSize: 60
    },
    lapText: {
        fontSize: 30
    },
    startButton: {
        borderColor: 'green'
    },
    stopButton: {
        borderColor: 'red'
    }
});