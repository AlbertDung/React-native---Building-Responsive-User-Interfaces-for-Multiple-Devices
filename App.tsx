import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Section1 from './Component/Section1';
import Section2 from './Component/Section2';
import Section3 from './Component/Section3';
import Section4 from './Component/Section4';
import Section5 from './Component/Section5';
import Section6 from './Component/Section6';
import Section7 from './Component/Section7';
import Section8 from './Component/Section8';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Use Expo icons or any other icon library

const Stack = createNativeStackNavigator();
const projects = [
  { name: 'Section1', title: 'Dynamic Width & Dimensions API', icon: 'expand' },
  { name: 'Section2', title: 'Resizing Images', icon: 'image' },
  { name: 'Section3', title: 'Screen Orientation Changes', icon: 'phone-portrait' },
  { name: 'Section4', title: 'KeyboardAvoidingView', icon: 'keyboard' },
  { name: 'Section5', title: 'Landscape', icon: 'tablet-landscape' },
  { name: 'Section6', title: 'Platform-Specific Code', icon: 'code-slash' },
  { name: 'Section7', title: 'Status Bar', icon: 'stats-chart' },
  { name: 'Section8', title: 'useWindowDimensions', icon: 'analytics' },
];


function Home({ navigation }: { navigation: any }) {
  const renderProject = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(item.name)}
    >
      <Ionicons name={item.icon} size={32} color="#FF2E63" />
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>React Native Building Adaptive UIs</Text>
      <FlatList
        data={projects}
        renderItem={renderProject}
        keyExtractor={(item) => item.name}
        numColumns={2} // Display two cards per row
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Section1" component={Section1} />
        <Stack.Screen name="Section2" component={Section2} />
        <Stack.Screen name="Section3" component={Section3} />
        <Stack.Screen name="Section4" component={Section4} />
        <Stack.Screen name="Section5" component={Section5} />
        <Stack.Screen name="Section6" component={Section6} />
        <Stack.Screen name="Section7" component={Section7} />
        <Stack.Screen name="Section8" component={Section8} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    padding: 20,
    paddingTop: 80, // Increased padding at the top
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#252A34',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#252A34',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardText: {
    color: '#EAEAEA',
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  list: {
    justifyContent: 'center',
  },
});
