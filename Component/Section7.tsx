import React from 'react';
import { StatusBar, View, Platform, StyleSheet } from 'react-native';

const CustomStatusBar = () => {
  return (
    <View style={styles.statusBarContainer}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor={Platform.OS === 'android' ? '#FF2E63' : 'transparent'}
        translucent={Platform.OS === 'android'} // For Android, make status bar translucent
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarContainer: {
    backgroundColor: '#252A34', // Accent color for the status bar
    height: Platform.OS === 'android' ? 100 : 56, // Standard height for status bar
    
    flex: 1,
    paddingTop: 90,
  },
});

export default CustomStatusBar;
