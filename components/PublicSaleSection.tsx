import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PublicSaleSection = () => (
  <View style={styles.publicSaleContainer}>
    <Image source={require('../assest/image/50.jpeg')} style={styles.publicSaleImage} />
    <View style={styles.publicSaleTextContainer}>
      <Text style={styles.publicSaleTitle}>THE 72-HOUR PUBLIC SALE</Text>
      <Text style={styles.publicSaleDate}>9-12 JUNE 2025 AT 6PM BKK (GMT+7)</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  publicSaleContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#ADD8E6',
  },
  publicSaleImage: {
    width: '50%',
    height: 200,
  },
  publicSaleTextContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  publicSaleTitle: {
    fontSize: 24,
    color: 'white',
  },
  publicSaleDate: {
    fontSize: 16,
    color: 'white',
  },
});

export default PublicSaleSection;