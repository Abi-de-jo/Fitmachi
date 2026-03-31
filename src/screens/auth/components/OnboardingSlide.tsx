import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Animated,
    Easing,
} from 'react-native';
import { Colors } from '../../../theme/colors';

const { width } = Dimensions.get('window');

interface Props {
    title: string;
    subtitle: string;
    emoji: string;
    backgroundColor: string;
}

export default function OnboardingSlide({
    title,
    subtitle,
    emoji,
    backgroundColor,
}: Props) {
    const emojiScale = useRef(new Animated.Value(0.7)).current;
    const emojiOpacity = useRef(new Animated.Value(0)).current;

    const titleOpacity = useRef(new Animated.Value(0)).current;
    const titleTranslateY = useRef(new Animated.Value(30)).current;

    const subtitleOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Reset values
        emojiScale.setValue(0.7);
        emojiOpacity.setValue(0);
        titleOpacity.setValue(0);
        titleTranslateY.setValue(30);
        subtitleOpacity.setValue(0);

        Animated.sequence([
            // Emoji gentle pop
            Animated.parallel([
                Animated.spring(emojiScale, {
                    toValue: 1,
                    tension: 55,
                    friction: 7,
                    useNativeDriver: true,
                }),
                Animated.timing(emojiOpacity, {
                    toValue: 1,
                    duration: 700,
                    useNativeDriver: true,
                }),
            ]),

            // Title slides up smoothly
            Animated.parallel([
                Animated.timing(titleTranslateY, {
                    toValue: 0,
                    duration: 700,
                    easing: Easing.out(Easing.back(1)),
                    useNativeDriver: true,
                }),
                Animated.timing(titleOpacity, {
                    toValue: 1,
                    duration: 700,
                    useNativeDriver: true,
                }),
            ]),

            // Subtitle fade in
            Animated.timing(subtitleOpacity, {
                toValue: 1,
                duration: 700,
                delay: 100,
                useNativeDriver: true,
            }),
        ]).start();
    }, [title]);

    return (
        <View style={[styles.container, { backgroundColor }]}>
            
            {/* Emoji in glowing circle - Exactly like reference */}
            <View style={styles.illustrationContainer}>
                <Animated.View
                    style={[
                        styles.emojiCircle,
                        {
                            transform: [{ scale: emojiScale }],
                            opacity: emojiOpacity,
                        },
                    ]}
                >
                    <Text style={styles.emoji}>{emoji}</Text>
                </Animated.View>
            </View>

            {/* Text Content */}
            <View style={styles.textContainer}>
                <Animated.Text
                    style={[
                        styles.title,
                        {
                            opacity: titleOpacity,
                            transform: [{ translateY: titleTranslateY }],
                        },
                    ]}
                >
                    {title}
                </Animated.Text>

                <Animated.Text
                    style={[styles.subtitle, { opacity: subtitleOpacity }]}
                >
                    {subtitle}
                </Animated.Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingTop: 20,
    },
    illustrationContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    emojiCircle: {
        width: width * 0.52,
        height: width * 0.52,
        backgroundColor: '#FFFFFF',
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.08,
        shadowRadius: 25,
        elevation: 12,
    },
    emoji: {
        fontSize: width * 0.28,
    },
    textContainer: {
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 35,
        fontWeight: '900',
        color: '#2C2C2C',           // Dark bold like reference
        textAlign: 'center',
        lineHeight: 46,
        marginBottom: 18,
        letterSpacing: 0,
    },
    subtitle: {
        fontSize: 16.5,
        color: '#555555',
        textAlign: 'center',
        lineHeight: 26,
        fontWeight: '500',
    },
});