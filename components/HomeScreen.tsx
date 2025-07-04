import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import TopWelcomeSection from './TopWelcomeSection';
import PublicSaleSection from './PublicSaleSection';
import RecommendedEventsSection from './RecommendedEventsSection';
import MusicSection from './MusicSection';

interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  title: string;
  image: string;
  price?: string;
  category?: string;
}

const HomeScreen = () => {
  const events: Event[] = [
    { 
      id: 1, 
      name: '音乐会《春天的故事》', 
      date: '2025-04-15', 
      location: '上海大剧院', 
      title: '音乐会《春天的故事》', 
      image: 'image/50.jpeg',
      price: '¥180起',
      category: '音乐会'
    },
    { 
      id: 2, 
      name: '话剧《恋爱的犀牛》', 
      date: '2025-04-20', 
      location: '北京人艺剧场', 
      title: '话剧《恋爱的犀牛》', 
      image: 'image/50.jpeg',
      price: '¥280起',
      category: '话剧'
    },
    { 
      id: 3, 
      name: '摇滚音乐节', 
      date: '2025-05-01', 
      location: '深圳湾体育中心', 
      title: '摇滚音乐节', 
      image: 'image/50.jpeg',
      price: '¥380起',
      category: '音乐节'
    }
  ];

  const musicEvents: Event[] = [
    { 
      id: 4, 
      name: '古典音乐会', 
      date: '2025-04-25', 
      location: '广州星海音乐厅', 
      title: '古典音乐会', 
      image: 'image/50.jpeg',
      price: '¥150起',
      category: '古典音乐'
    },
    { 
      id: 5, 
      name: '流行音乐现场', 
      date: '2025-05-05', 
      location: '成都乐山大剧院', 
      title: '流行音乐现场', 
      image: 'image/50.jpeg',
      price: '¥220起',
      category: '流行音乐'
    },
    { 
      id: 6, 
      name: '民谣音乐会', 
      date: '2025-05-10', 
      location: '杭州大剧院', 
      title: '民谣音乐会', 
      image: 'image/50.jpeg',
      price: '¥120起',
      category: '民谣'
    }
  ];

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <TopWelcomeSection />
        <PublicSaleSection />
        <RecommendedEventsSection events={events} />
        <MusicSection musicEvents={musicEvents} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
});

export default HomeScreen;