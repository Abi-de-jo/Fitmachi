import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Dimensions,
    Image,
} from 'react-native';
import { Colors } from '../../../theme/colors';

const { width } = Dimensions.get('window');

interface Props {
    onAnimationDone: () => void;
}

export default function LogoAnimation({ onAnimationDone }: Props) {
    const logoScale = useRef(new Animated.Value(0)).current;
    const logoOpacity = useRef(new Animated.Value(0)).current;
    const textOpacity = useRef(new Animated.Value(0)).current;
    const textScale = useRef(new Animated.Value(0.8)).current;
    const taglineOpacity = useRef(new Animated.Value(0)).current;
    const containerOpacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.sequence([
            // Step 1 — Logo pops in
            Animated.parallel([
                Animated.spring(logoScale, {
                    toValue: 1,
                    tension: 40,
                    friction: 6,
                    useNativeDriver: true,
                }),
                Animated.timing(logoOpacity, {
                    toValue: 1,
                    duration: 700,
                    useNativeDriver: true,
                }),
            ]),

            // Step 2 — Hold logo
            Animated.delay(800),

            // Step 3 — Logo wipes out
            Animated.timing(logoOpacity, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
            }),

            // Step 4 — FITMACHI text appears in same spot
            Animated.parallel([
                Animated.timing(textOpacity, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.spring(textScale, {
                    toValue: 1,
                    tension: 50,
                    friction: 6,
                    useNativeDriver: true,
                }),
            ]),

            // Step 5 — Tagline fades in below
            Animated.timing(taglineOpacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),

            // Step 6 — Hold
            Animated.delay(1000),

            // Step 7 — Everything fades out
            Animated.timing(containerOpacity, {
                toValue: 0,
                duration: 600,
                useNativeDriver: true,
            }),

        ]).start(() => {
            onAnimationDone();
        });
    }, [onAnimationDone]);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.centerBox,
                    { opacity: containerOpacity },
                ]}
            >
                {/* Logo Image — fades out */}
                <Animated.View
                    style={[
                        styles.logoWrapper,
                        {
                            opacity: logoOpacity,
                            transform: [{ scale: logoScale }],
                            position: 'absolute',
                        },
                    ]}
                >
                    <Image
                        source={require('../../../assets/images/fitmachi.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </Animated.View>

                {/* FITMACHI Text — appears in same spot after logo wipes */}
                <Animated.View
                    style={[
                        styles.logoWrapper,
                        {
                            opacity: textOpacity,
                            transform: [{ scale: textScale }],
                        },
                    ]}
                >
                    <Text style={styles.logoText}>FITMACHI</Text>
                </Animated.View>

                {/* Tagline below */}
                <Animated.Text
                    style={[
                        styles.tagline,
                        {
                            opacity: taglineOpacity,
                            marginTop: width * 0.55 + 1
                        },
                    ]}
                >
                   Unnala Mudium da!
                </Animated.Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.55,
        height: width * 0.55,
    },
    logoWrapper: {
        width: width * 0.55,
        height: width * 0.55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: width * 0.55,
        height: width * 0.55,
    },
    logoText: {
        fontSize: 42,
        fontWeight: '900',
        color: Colors.darkRum,
        letterSpacing: 5,
        textAlign: 'center',
    },
    tagline: {
        fontSize: 16,
        color: Colors.darkWood,
        fontWeight: '600',
        letterSpacing: 1.5,
        textAlign: 'center',
        position: 'absolute',
    },
});
