import React, { useRef, useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { Colors } from '../../theme/colors';
import { ONBOARDING_SLIDES } from '../../constants/onboarding';
import OnboardingSlide from './components/OnboardingSlide';
import OnboardingDots from './components/OnboardingDots';
import OnboardingButtons from './components/OnboardingButtons';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrentSlide(index);
  };

  const handleSignUp = () => {
    console.log('Sign Up pressed');
    // Navigate to Register screen later
  };

  const handleSignIn = () => {
    console.log('Sign In pressed');
    // Navigate to Login screen later
  };

  return (
    <View style={styles.container}>
      {/* Slides */}
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        style={styles.slider}
      >
        {ONBOARDING_SLIDES.map((slide) => (
          <OnboardingSlide
            key={slide.id}
            title={slide.title}
            subtitle={slide.subtitle}
            emoji={slide.emoji}
            backgroundColor={slide.backgroundColor}
          />
        ))}
      </ScrollView>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <OnboardingDots
          total={ONBOARDING_SLIDES.length}
          current={currentSlide}
        />
        <View style={styles.spacer} />
        <OnboardingButtons
          onSignUp={handleSignUp}
          onSignIn={handleSignIn}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  slider: {
    flex: 1,
  },
  bottomSection: {
    backgroundColor: Colors.background,
    paddingTop: 24,
  },
  spacer: {
    height: 24,
  },
});