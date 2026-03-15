import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { Colors } from '../../theme';

export default function OnboardingScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View className="flex-1 bg-dark">
      {/* Background Image or Gradient Placeholder */}
      <View className="flex-[0.6] justify-center items-center">
        {/* We'll add a Gethu logo/mascot here later */}
        <View className="w-48 h-48 bg-primary/20 rounded-full items-center justify-center border border-primary/30">
           <Text className="text-primary text-6xl font-bold">G</Text>
        </View>
      </View>

      {/* Content Section */}
      <View className="flex-[0.4] px-8 justify-between pb-12">
        <View>
          <Text className="text-white text-5xl font-black leading-tight">
            GETHU <Text className="text-primary">FITNESS</Text>
          </Text>
          <Text className="text-gray-400 text-xl mt-4 font-medium italic">
            Vera Level Da! 🔥
          </Text>
          <Text className="text-gray-500 text-base mt-2 leading-6">
            Tamil Nadu's first AI-powered fitness app with 8,000+ Tamil food items.
          </Text>
        </View>

        {/* Action Button */}
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Login')}
          className="bg-primary py-4 rounded-2xl items-center shadow-lg shadow-primary/50"
        >
          <Text className="text-white text-lg font-bold">Start Your Journey</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}