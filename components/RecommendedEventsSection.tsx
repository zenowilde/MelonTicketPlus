import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import {renderImageSource} from "../utils/Common.ts";

// 定义事件对象的类型
interface EventItem {
  id: number;
  title: string;
  date: string;
  image: string;
}

// 定义组件props的类型
interface RecommendedEventsSectionProps {
  events: EventItem[];
}

const RecommendedEventsSection: React.FC<RecommendedEventsSectionProps> = ({ events }) => (
  <View style={styles.recommendedEventsContainer}>
    <Text style={styles.sectionTitle}>推荐活动</Text>
    <FlatList
      data={events}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.eventCard}>
          <Image source={renderImageSource(item.image)} style={styles.eventImage} />
          <Text style={styles.eventTitle}>{item.title}</Text>
          <Text style={styles.eventDate}>{item.date}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
);

const styles = StyleSheet.create({
  recommendedEventsContainer: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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

export default RecommendedEventsSection;
