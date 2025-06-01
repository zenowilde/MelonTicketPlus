import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

// 定义单个音乐事件的类型
interface MusicEvent {
  id: number;
  title: string;
  date: string;
  image: string;
}

// 定义组件props的类型
interface MusicSectionProps {
  musicEvents: MusicEvent[];
}

const MusicSection: React.FC<MusicSectionProps> = ({ musicEvents }) => (
  <View style={styles.musicContainer}>
    <View style={styles.musicHeader}>
      <Text style={styles.sectionTitle}>Music</Text>
      <Text style={styles.viewAll}>View All</Text>
    </View>
    <FlatList
      data={musicEvents}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.eventCard}>
          <Image source={{ uri: item.image }} style={styles.eventImage} />
          <Text style={styles.eventTitle}>{item.title}</Text>
          <Text style={styles.eventDate}>{item.date}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
);

const styles = StyleSheet.create({
  musicContainer: {
    padding: 10,
  },
  musicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 16,
    color: '#4ECDC4',
  },
  eventCard: {
    width: 150,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  eventImage: {
    width: '100%',
    height: 150,
  },
  eventTitle: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventDate: {
    padding: 10,
    fontSize: 14,
  },
});

export default MusicSection;