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
      ios: 20,
      android: 10,
    }),
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: Platform.select({
      ios: '#EAEAEA',
      android: '#FF2E63',
    }),
  },
});

export default PlatformSpecificCode;
