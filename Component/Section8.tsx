import React from 'react';
import { StyleSheet, View, Button, useWindowDimensions } from 'react-native';

const UseWindowDimensionsHook = () => {
  const { width } = useWindowDimensions();
  const buttonWidth = width * 0.4;

  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer, { width: buttonWidth }]}>
        <Button title="Button 1" onPress={() => {}} color="#08D9D6" />
      </View>
      <View style={[styles.buttonContainer, { width: buttonWidth }]}>
        <Button title="Button 2" onPress={() => {}} color="#FF2E63" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#252A34',
  },
  buttonContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#EAEAEA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default UseWindowDimensionsHook;
