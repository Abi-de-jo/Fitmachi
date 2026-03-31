import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Colors } from '../../../theme/colors';

interface Props {
    onSignUp: () => void;
    onSignIn: () => void;
}

export default function OnboardingButtons({ onSignUp, onSignIn }: Props) {
    return (
        <View style={styles.container}>
            {/* Sign Up Button */}
            <TouchableOpacity
                style={styles.signUpButton}
                onPress={onSignUp}
                activeOpacity={0.85}
            >
                <Text style={styles.signUpText}>Account Create Pannunga 🔥</Text>
            </TouchableOpacity>

            {/* Sign In Button */}
            <TouchableOpacity
                style={styles.signInButton}
                onPress={onSignIn}
                activeOpacity={0.7}
            >
                <Text style={styles.signInText}>
                    Already Account Iruka?{' '}
                    <Text style={styles.signInHighlight}>Sign In</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
        paddingBottom: 48,
        gap: 16,
    },
    signUpButton: {
        backgroundColor: Colors.darkWood,
        paddingVertical: 18,
        borderRadius: 16,
        alignItems: 'center',
        shadowColor: Colors.darkRum,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    signUpText: {
        color: Colors.cream,
        fontSize: 17,
        fontWeight: '800',
        letterSpacing: 0.5,
    },
    signInButton: {
        alignItems: 'center',
        paddingVertical: 8,
    },
    signInText: {
        color: Colors.darkWood,
        fontSize: 15,
        fontWeight: '500',
    },
    signInHighlight: {
        color: Colors.darkRum,
        fontWeight: '800',
        textDecorationLine: 'underline',
    },
});