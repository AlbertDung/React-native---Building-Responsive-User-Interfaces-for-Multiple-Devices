import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';

const DynamicWidth = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, { width: screenWidth / 2 }]}>
        <Text style={styles.buttonText}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: screenWidth / 2 }]}>
        <Text style={styles.buttonText}>Button 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252A34', // Background color for the whole screen
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //padding: 20,
  },
  button: {
    backgroundColor: '#FF2E63', // Main Color for buttons
    borderRadius: 10,
    paddingVertical: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
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

export default DynamicWidth;
