import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, Dimensions } from 'react-native';

const LandscapeDesign = () => {
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
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8AAxAr9ZNr9JCwn2QZ35rSWWuiayhh0ayQ&s' }}
        style={[styles.image, { height: isPortrait ? 200 : 120 }]}
      />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  portraitContainer: {
    flex: 1,
    backgroundColor: '#252A34', // Background color for portrait mode
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  landscapeContainer: {
    flex: 1,
    backgroundColor: '#252A34', // Background color for landscape mode
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '80%',
    borderRadius: 10,
    borderColor: '#08D9D6', // Border color for image
    borderWidth: 2,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#FF2E63', // Accent color for button
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginTop: 20, // Space between the image and button
  },
  buttonText: {
    color: '#EAEAEA', // Text color for button
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LandscapeDesign;
