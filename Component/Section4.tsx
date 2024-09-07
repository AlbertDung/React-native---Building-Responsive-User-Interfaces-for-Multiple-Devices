import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

const Part4 = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inner}>
        <TextInput
          placeholder="Enter text"
          placeholderTextColor="#EAEAEA" // Placeholder color for better visibility
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252A34', // Background color for the whole screen
    padding: 20,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderColor: '#08D9D6', // Border color matching the color palette
    borderWidth: 1,
    borderRadius: 10, // Rounded corners for modern look
    paddingHorizontal: 15,
    color: '#EAEAEA', // Text color for better readability
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF2E63', // Accent color for the button
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#EAEAEA', // Text color for button
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Part4;
