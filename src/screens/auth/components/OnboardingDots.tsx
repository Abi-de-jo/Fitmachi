import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Colors } from '../../../theme/colors';

interface Props {
    total: number;
    current: number;
}

export default function OnboardingDots({ total, current }: Props) {
    return (
        <View style={styles.container}>
            {Array.from({ length: total }).map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.dot,
                        index === current ? styles.activeDot : styles.inactiveDot,
                    ]}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    dot: {
        height: 8,
        borderRadius: 4,
    },
    activeDot: {
        width: 24,
        backgroundColor: Colors.darkWood,
    },
    inactiveDot: {
        width: 8,
        backgroundColor: Colors.blonde,
    },
});