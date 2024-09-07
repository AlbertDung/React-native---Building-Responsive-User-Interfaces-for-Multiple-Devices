import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';

const OrientationHandling = () => {
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    const updateOrientation = () => {
      const screenWidth = Dimensions.get('window').width;
      const screenHeight = Dimensions.get('window').height;
      setIsPortrait(screenHeight >= screenWidth);
    };

    const subscription = Dimensions.addEventListener('change', updateOrientation);

    // Initial check
    updateOrientation();

    // Clean up the subscription on unmount
    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <View style={isPortrait ? styles.portraitContainer : styles.landscapeContainer}>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Button 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  portraitContainer: {
    flex: 1,
    backgroundColor: '#252A34', // Background color for the whole screen
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  landscapeContainer: {
    flex: 1,
    backgroundColor: '#252A34', // Background color for the whole screen
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#FF2E63', // Main Color for buttons
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    margin: 10,
    alignItems: 'center',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#EAEAEA', // Text Color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrientationHandling;
