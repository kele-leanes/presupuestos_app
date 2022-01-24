import React from 'react';
import { Text } from 'react-native';
import { useTheme } from 'react-native-paper';

export const HomeScreen = () => {
  const { colors } = useTheme();
  return <Text style={{ color: colors.primary }}>HomeScreen</Text>;
};
