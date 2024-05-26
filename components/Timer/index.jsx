import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TimerComponent = ({ initialMinutes = 0, initialSeconds = 0, onEnd }) => {
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval);
                    onEnd && onEnd();  // Call the onEnd function if it exists
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);

        return () => {
            clearInterval(myInterval);
        };
    }, [seconds, minutes, onEnd]); // Include onEnd in the dependency array if its definition may change over time

    return (
        <View style={styles.container}>
            <Icon name="timer" size={24} color="#FFF" />
            <Text style={styles.timerText}>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds} Min
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    timerText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    }
});

export default TimerComponent;
