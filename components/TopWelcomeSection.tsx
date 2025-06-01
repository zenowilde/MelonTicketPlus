import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopWelcomeSection = () => (
  <View style={styles.topWelcome}>
    <Text style={styles.welcomeText}>Welcome</Text>
    <Text style={styles.subText}>Let's find events you'll love</Text>
  </View>
);

const styles = StyleSheet.create({
  topWelcome: {
    backgroundColor: '#4ECDC4',
    padding: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 5,
  },
  subText: {
    fontSize: 16,
    color: 'white',
  },
});

export default TopWelcomeSection;