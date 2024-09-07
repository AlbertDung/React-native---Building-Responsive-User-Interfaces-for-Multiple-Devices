import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

const PlatformSpecificCode = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is platform-specific text!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252A34', // Background color for a modern look
    padding: Platform.select({
      ios: 30,
      android: 20,
    }),
  },
  text: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FF2E63', // Modern accent color
    textAlign: 'center',
  },
});

export default PlatformSpecificCode;
