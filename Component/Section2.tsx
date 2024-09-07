import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';

const Part2 = () => {
  const screenWidth = Dimensions.get('window').width;
  const imageWidth = screenWidth * 0.8;

  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, { width: imageWidth, height: imageWidth * 0.75 }]}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8AAxAr9ZNr9JCwn2QZ35rSWWuiayhh0ayQ&s' }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252A34', // Background color for the whole screen
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#08D9D6', // Background color for the image container
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Part2;
