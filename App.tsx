import React, { useState } from 'react';
import "./global.css";
import { StatusBar } from 'expo-status-bar';
import { Colors } from './src/theme/colors';
import LogoAnimation from './src/screens/auth/components/LogoAnimation';
import OnboardingScreen from './src/screens/auth/OnboardingScreen';

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  return (
    <>
      <StatusBar style="dark" backgroundColor={Colors.background} />
      {!showOnboarding ? (
        <LogoAnimation onAnimationDone={() => setShowOnboarding(true)} />
      ) : (
        <OnboardingScreen />
      )}
    </>
  );
}