import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const PublicSaleSection = () => {
  const bannerItems = [
    {
      id: 1,
      title: '限时抢购',
      subtitle: '热门演出 5折起',
      bgColor: '#4A90E2',
      emoji: '★',
    },
    {
      id: 2,
      title: '新用户专享',
      subtitle: '首单立减50元',
      bgColor: '#5BC0DE',
      emoji: '☷',
    },
    {
      id: 3,
      title: '会员早鸟票',
      subtitle: '提前24小时购票',
      bgColor: '#90EE90',
      emoji: '☆',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {bannerItems.map((item) => (
          <TouchableOpacity key={item.id} style={[styles.bannerItem, { backgroundColor: item.bgColor }]}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.bannerTitle}>{item.title}</Text>
            <Text style={styles.bannerSubtitle}>{item.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  bannerItem: {
    width: 200,
    height: 100,
    borderRadius: 15,
    padding: 15,
    marginRight: 15,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emoji: {
    fontSize: 24,
    marginBottom: 5,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 2,
  },
  bannerSubtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.9)',
  },
});

export default PublicSaleSection;